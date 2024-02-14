import { useParams } from 'react-router-dom';
import PokemonProperties from '../interfaces';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '@mantine/core';
import ImageCarousel from '../components/ImageCarousel';
import { setTypeColor } from '../utils';
import TypeAndAbility from '../components/TypeAndAbility';

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

  return (
    <section className="detailsPage">
      {data ? (
        <div>
          <h1>Pokemon Details</h1>
          <h2 className="pkmName" style={{ color: setTypeColor(data.type[0]) }}>
            {data.name}
          </h2>
          <ImageCarousel {...data} />
          <TypeAndAbility {...data} />
        </div>
      ) : (
        <Loader color="teal" size="lg" type="dots" />
      )}
    </section>
  );
};

export default PokemonDetails;
