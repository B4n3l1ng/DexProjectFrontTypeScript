import { Input, Loader, Pagination } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MoveProperties } from '../interfaces';
import Card from '../components/Card';
import movesStyles from './styles/MovesPage.module.css';

const MovesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moves, setMoves] = useState<MoveProperties[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [isFiltering, setIsFiltering] = useState(false);

  const [display, setDisplay] = useState<MoveProperties[]>([]);

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/api/moves`);
        if (response.status === 200 || response.status === 304) {
          setMoves(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoves();
  }, []);

  useEffect(() => {
    if (moves.length > 0) {
      const copy = JSON.parse(JSON.stringify(moves));
      const newData = copy.slice((activePage - 1) * 50, activePage * 50);
      setDisplay(newData);
      setIsLoading(false);
    }
  }, [activePage, moves]);

  const filterByName = (query: string) => {
    if (query.length > 0) {
      setIsFiltering(true);
      const copy = JSON.parse(JSON.stringify(moves));
      const filtered = copy.filter((move: MoveProperties) => move.name.toLowerCase().includes(query.toLowerCase()));
      setDisplay(filtered);
    } else {
      setIsFiltering(false);
      const copy = JSON.parse(JSON.stringify(moves));
      const newData = copy.slice((activePage - 1) * 50, activePage * 50);
      setDisplay(newData);
    }
  };

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    setFilter(event.currentTarget!.value);
    filterByName(event.currentTarget!.value);
  };

  return (
    <section className={movesStyles.movesPage}>
      <h1>All Moves</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <>
          <Input variant="filled" size="md" type="text" placeholder="Filter by item name" value={filter} onChange={handleSearch} />
          {!isFiltering ? (
            <Pagination
              total={Math.ceil(moves.length / 50)}
              value={activePage}
              onChange={(page) => {
                setIsLoading(true);
                setActivePage(page);
              }}
              mt="sm"
              size="lg"
              radius="lg"
              color="teal"
              className="pagination"
            />
          ) : null}

          <div className={movesStyles.list}>
            {display.map((move) => (
              <Card data={move} type="moves" key={move._id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MovesPage;
