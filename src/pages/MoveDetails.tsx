import { useEffect, useState } from 'react';
import { MoveProperties } from '../interfaces';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '@mantine/core';
import statusMove from '../assets/status move icon.png';
import physicalMove from '../assets/physical move icon.png';
import specialMove from '../assets/special move icon.png';
import { setTypeColor } from '../utils';
import moveDetailStyles from './styles/MoveDetails.module.css';

const MoveDetails = () => {
  const { moveId } = useParams();
  const [move, setMove] = useState<MoveProperties>();

  useEffect(() => {
    const fetchMove = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/api/moves/${moveId}`);
        if (response.status === 200 || response.status === 304) {
          setMove(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (moveId) {
      fetchMove();
    }
  }, [moveId]);

  return (
    <section className={moveDetailStyles.moveDetailsPage}>
      <h1>Move Details</h1>
      {!move ? (
        <Loader color="teal" size="lg" type="dots" className="loader" />
      ) : (
        <div className={moveDetailStyles.box}>
          <h2>{move.name}</h2>
          <div>
            <p className={moveDetailStyles.category}>
              <span>Category: </span>
              <img src={move.type === 'Physical' ? physicalMove : move.type === 'Special' ? specialMove : statusMove} alt="Move category" />
            </p>
            <div
              style={{
                backgroundColor: `${setTypeColor(move.typing)}`,
              }}
              className={moveDetailStyles.type}
            >
              {move.typing}
            </div>
            <p>
              <span>Power: </span>
              {move.power ? move.power : 'NA'}
            </p>
            <p>
              <span>Accuracy: </span>
              {move.accuracy ? move.accuracy : 'Never misses'}
            </p>
            <p>
              <span>Description and extra effects: </span>
              {move.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoveDetails;
