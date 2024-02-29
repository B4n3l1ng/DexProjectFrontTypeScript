import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ItemProperties } from '../interfaces';
import axios from 'axios';
import { Loader } from '@mantine/core';
import dexStyles from './styles/Pokedex.module.css';
import detailStyles from './styles/AbilityDetails.module.css';
import BackButton from '../components/BackButton';
const ItemDetails = () => {
  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<ItemProperties>();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/api/items/${itemId}`);
        if (response.status === 200 || response.status === 304) {
          setItem(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, [itemId]);

  return (
    <section>
      <h1>Item Details</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <>
          <div className={dexStyles.dexPage}>
            <div className={detailStyles.box} style={{ width: '35%', fontWeight: 600 }}>
              <h1 className={detailStyles.name}>{item!.name}</h1>
              {item!.image ? <img src={item!.image} alt={item!.name} style={{ width: '5em' }} /> : null}
              <p>Effect: {item!.effect}</p>
            </div>
          </div>
          <BackButton page={'items'} />
        </>
      )}
    </section>
  );
};

export default ItemDetails;
