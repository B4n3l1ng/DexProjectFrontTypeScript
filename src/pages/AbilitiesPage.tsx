import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loader } from '@mantine/core';
import PokemonCard from '../components/PokemonCard';
import { AbilityProperties } from '../interfaces';

const AbilitiesPage = () => {
  const [data, setData] = useState<AbilityProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAbilities = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/abilities`);
      if (response.status === 200 || response.status === 304) {
        setData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAbilities();
  }, []);

  return (
    <section className="abilitiesPage">
      <h1>All Abilities</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" />
      ) : (
        <div className="list">
          {data!.map((ability) => (
            <PokemonCard data={ability} type="ability" key={ability._id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AbilitiesPage;
