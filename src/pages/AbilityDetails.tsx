import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AbilityProperties, PokemonProperties } from '../interfaces';
import { Center, Loader } from '@mantine/core';
import Card from '../components/Card';
import dexStyles from './styles/Pokedex.module.css';
import detailStyles from './styles/AbilityDetails.module.css';

const AbilityDetails = () => {
  const { abilityId } = useParams();

  const [ability, setAbility] = useState<AbilityProperties>();
  const [pokemon, setPokemon] = useState<PokemonProperties[]>([]);

  const fetchAbility = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/abilities/${abilityId}`);
      if (response.status === (200 || 304)) {
        setAbility(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonWithAbility = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/abilities/${abilityId}/pokemon`);
      if (response.status === (200 || 304)) {
        setPokemon(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAbility();
    fetchPokemonWithAbility();
  }, [abilityId]);

  return (
    <section>
      <Center>
        {ability && pokemon ? (
          <div className={dexStyles.dexPage}>
            <h1>{ability.name}</h1>
            <div className={detailStyles.box}>
              <p>Description: {ability.description}</p>
            </div>
            <div className={dexStyles.list}>
              {pokemon!.map((pokemon) => (
                <Card data={pokemon} type={'pokemon'} key={pokemon._id} />
              ))}
            </div>
          </div>
        ) : (
          <Loader color="teal" size="lg" type="dots" />
        )}
      </Center>
    </section>
  );
};

export default AbilityDetails;
