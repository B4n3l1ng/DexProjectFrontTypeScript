import { useParams } from 'react-router-dom';
import PokemonProperties from '../interfaces';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '@mantine/core';

const PokemonDetails = () => {
  const [data, setData] = useState<PokemonProperties>();
  const { pokemonId } = useParams();

  const fetchPokemon = async () => {
    try {
      const response = await axios(`${import.meta.env.VITE_API_URL}/api/pokemon/${pokemonId}`);
      if (response.status === 200 || response.status == 304) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonId]);

  return <>{data ? <div>{data.name}</div> : <Loader color="teal" size="lg" type="dots" />}</>;
};

export default PokemonDetails;
