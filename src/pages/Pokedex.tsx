import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Loader } from '@mantine/core';
import { PokemonProperties } from '../interfaces/index';
import PokemonCard from '../components/PokemonCard';

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonProperties[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [display, setDisplay] = useState<PokemonProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <section className="dexPage">
      <h1>List of all Pokémon</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" />
      ) : (
        <>
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
          <div className="list">
            {display.map((pokemon) => (
              <PokemonCard data={pokemon} type="pokemon" key={pokemon._id} />
            ))}
          </div>
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
        </>
      )}
    </section>
  );
};

export default Pokedex;
