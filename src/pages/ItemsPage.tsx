import { useState, useEffect } from 'react';
import { ItemProperties } from '../interfaces';
import axios from 'axios';
import Card from '../components/Card';
import { Loader } from '@mantine/core';
import itemStyles from './styles/ItemsPage.module.css';

const ItemsPage = () => {
  const [items, setItems] = useState<ItemProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/api/items`);
        if (response.status === 200 || response.status === 304) {
          console.log(response.data);
          setItems(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <section className={itemStyles.itemsPage}>
      <h1>All Items</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <div className={itemStyles.list}>
          {items!.map((item) => (
            <Card data={item} type="items" key={item._id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ItemsPage;
