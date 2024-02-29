import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loader, Pagination } from '@mantine/core';
import Card from '../components/Card';
import { AbilityProperties } from '../interfaces';
import abilitiesPageStyles from './styles/AbilitiesPage.module.css';

const AbilitiesPage = () => {
  const [data, setData] = useState<AbilityProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState<AbilityProperties[]>();
  const [activePage, setActivePage] = useState(1);

  const fetchAbilities = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/abilities`);
      if (response.status === 200 || response.status === 304) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAbilities();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const copy = JSON.parse(JSON.stringify(data));
      const newData = copy.slice((activePage - 1) * 50, activePage * 50);
      setDisplay(newData);
      setIsLoading(false);
    }
  }, [activePage, data]);

  return (
    <section className={abilitiesPageStyles.abilitiesPage}>
      <h1>All Abilities</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <>
          <Pagination
            total={Math.ceil(data.length / 50)}
            value={activePage}
            onChange={(page) => {
              setIsLoading(true);
              setActivePage(page);
            }}
            mt="sm"
            size="lg"
            radius="lg"
            color="teal"
          />
          <div className={abilitiesPageStyles.list}>
            {display!.map((ability) => (
              <Card data={ability} type="ability" key={ability._id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AbilitiesPage;
