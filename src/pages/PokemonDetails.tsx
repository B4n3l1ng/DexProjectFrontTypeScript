import { useParams } from 'react-router-dom';
import { PokemonProperties } from '../interfaces';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '@mantine/core';
import ImageCarousel from '../components/ImageCarousel';
import { setTypeColor } from '../utils';
import TypeAndAbility from '../components/TypeAndAbility';
import BaseStats from '../components/BaseStats';
import PokemonNavButton from '../components/PokemonNavButton';
import Tabs from '../components/Tabs';

const PokemonDetails = () => {
  const [data, setData] = useState<PokemonProperties>();
  const { pokemonId } = useParams();
  const [previous, setPrevious] = useState<string>('');
  const [next, setNext] = useState<string>('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/api/pokemon/${pokemonId}`);
        if (response.status === 200 || response.status == 304) {
          setData(response.data.pokemon);
          setNext(response.data.next);
          setPrevious(response.data.previous);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, [pokemonId]);

  /*  useEffect(() => {
    if (data) {
      console.log(data);
      console.log('next:', next, 'previous:', previous);
    }
  }, [data]); */

  return (
    <section className="detailsPage">
      {data ? (
        <div>
          <h1>Pokemon Details</h1>
          <div className="navButtonSection">
            {previous ? <PokemonNavButton id={previous} text={'Previous Pokemon'} /> : null}
            {next ? <PokemonNavButton id={next} text={'Next Pokemon'} /> : null}
          </div>
          <h2 className="pkmName" style={{ color: setTypeColor(data.type[0]) }}>
            {data.name}
          </h2>
          <ImageCarousel {...data} />
          <TypeAndAbility {...data} />
          {/* Saving space for stats */}

          <BaseStats {...data} />
          <Tabs levelingMoves={data.levelUpMoves} eggMoves={data.eggMoves} machineMoves={data.machineMoves} tutorMoves={data.tutorMoves} />

          <div className="navButtonSection">
            <PokemonNavButton id={previous} text={'Previous Pokemon'} />
            <PokemonNavButton id={next} text={'Next Pokemon'} />
          </div>
        </div>
      ) : (
        <Loader color="teal" size="lg" type="dots" />
      )}
    </section>
  );
};

export default PokemonDetails;
