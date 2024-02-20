import PokemonProperties from '../interfaces';
import { useEffect } from 'react';
import { calculateBarWidth, getStatColor } from '../utils';

const BaseStats = ({ baseStats }: PokemonProperties) => {
  useEffect(() => {
    console.log(baseStats);
  }, [baseStats]);
  return (
    <section className="pokemon-stats boxWithRadius">
      <div className="stat-bar">
        <div className="stat-name">HP</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateBarWidth(baseStats.hp)}%`, backgroundColor: getStatColor('hp') }}>
            {baseStats.hp}
          </div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="stat-name">Attack</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateBarWidth(baseStats.atk)}%`, backgroundColor: getStatColor('atk') }}>
            {baseStats.atk}
          </div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="stat-name">Defense</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateBarWidth(baseStats.def)}%`, backgroundColor: getStatColor('def') }}>
            {baseStats.def}
          </div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="stat-name">Special Attack</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateBarWidth(baseStats.sp_atk)}%`, backgroundColor: getStatColor('sp_atk') }}>
            {baseStats.sp_atk}
          </div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="stat-name">Special Defense</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateBarWidth(baseStats.sp_def)}%`, backgroundColor: getStatColor('sp_def') }}>
            {baseStats.sp_def}
          </div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="stat-name">Speed</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateBarWidth(baseStats.speed)}%`, backgroundColor: getStatColor('speed') }}>
            {baseStats.speed}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseStats;
