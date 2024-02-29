import { useState, useEffect } from 'react';
import { ItemProperties } from '../interfaces';
import axios from 'axios';
import Card from '../components/Card';
import { Loader, Pagination } from '@mantine/core';
import itemStyles from './styles/ItemsPage.module.css';

const ItemsPage = () => {
  const [items, setItems] = useState<ItemProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<number>(1);
  const [display, setDisplay] = useState<ItemProperties[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/api/items`);
        if (response.status === 200 || response.status === 304) {
          console.log(response.data);
          setItems(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const copy = JSON.parse(JSON.stringify(items));
      const newData = copy.slice((activePage - 1) * 50, activePage * 50);
      setDisplay(newData);
      setIsLoading(false);
    }
  }, [activePage, items]);

  return (
    <section className={itemStyles.itemsPage}>
      <h1>All Items</h1>
      {isLoading ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <>
          <Pagination
            total={Math.ceil(items.length / 50)}
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
          <div className={itemStyles.list}>
            {display!.map((item) => (
              <Card data={item} type="items" key={item._id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ItemsPage;
