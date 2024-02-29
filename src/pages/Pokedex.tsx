import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Loader, Input, Button } from '@mantine/core';
import { PokemonProperties } from '../interfaces/index';
import Card from '../components/Card';
import dexStyles from './styles/Pokedex.module.css';
import TypeSearch from '../components/TypeSearch';

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonProperties[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [display, setDisplay] = useState<PokemonProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const fetchAll = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/pokemon`);
      if (response.status === 200 || response.status === 304) {
        const ordered = response.data.toSorted((a: PokemonProperties, b: PokemonProperties) => a.dexNumber - b.dexNumber);
        setAllPokemon(ordered);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    if (allPokemon.length > 0) {
      const copy = JSON.parse(JSON.stringify(allPokemon));
      const newData = copy.slice((activePage - 1) * 50, activePage * 50);
      setDisplay(newData);
      setIsLoading(false);
    }
  }, [activePage, allPokemon]);

  const filterByName = (name: string) => {
    if (name.length > 0) {
      const copy = JSON.parse(JSON.stringify(allPokemon));
      const filtered = copy.filter((pokemon: PokemonProperties) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
      setIsFiltering(true);
      setDisplay(filtered);
    } else {
      setIsFiltering(false);
      const copy = JSON.parse(JSON.stringify(allPokemon));
      const newData = copy.slice((activePage - 1) * 50, activePage * 50);
      setDisplay(newData);
    }
  };

  const filterByType = (type: string) => {
    const copy = JSON.parse(JSON.stringify(allPokemon));
    const filtered = copy.filter((pokemon: PokemonProperties) => pokemon.type.includes(type));
    setIsFiltering(true);
    setDisplay(filtered);
  };

  const removeFilters = () => {
    setIsFiltering(false);
    setFilter('');
    const copy = JSON.parse(JSON.stringify(allPokemon));
    const newData = copy.slice((activePage - 1) * 50, activePage * 50);
    setDisplay(newData);
  };

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFilter(event.currentTarget!.value);
    filterByName(event.currentTarget!.value);
  };

  return (
    <section className={dexStyles.dexPage}>
      <h1>List of all Pokémon</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} color="#008080">
            {showFilters ? 'Hide' : 'Show'} Filters
          </Button>
          {showFilters ? (
            <>
              <TypeSearch filterByType={filterByType} removeFilters={removeFilters} />
              <Input variant="filled" size="md" type="text" placeholder="Filter by pokemon name" value={filter} onChange={handleSearch} />{' '}
            </>
          ) : null}
          {!isFiltering ? (
            <Pagination
              total={Math.ceil(allPokemon.length / 50)}
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
          <div className={dexStyles.list}>
            {display.map((pokemon) => (
              <Card data={pokemon} type="pokemon" key={pokemon._id} />
            ))}
          </div>
          {!isFiltering ? (
            <Pagination
              total={Math.ceil(allPokemon.length / 50)}
              value={activePage}
              onChange={(page) => {
                setIsLoading(true);
                setActivePage(page);
              }}
              mt="sm"
              color="teal"
              size="lg"
              radius="lg"
              className="pagination"
            />
          ) : null}
        </>
      )}
    </section>
  );
};

export default Pokedex;
