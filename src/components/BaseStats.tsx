import { PokemonProperties } from '../interfaces';
import { calculateBarWidth, getStatColor } from '../utils';
import statStyles from './styles/BaseStats.module.css';

const BaseStats = ({ baseStats }: PokemonProperties) => {
  return (
    <section className={`${statStyles['pokemon-stats']} boxWithRadius`}>
      <div className={statStyles['stat-bar']}>
        <div className={statStyles['stat-name']}>HP</div>
        <div className={statStyles['bar-container']}>
          <div className={statStyles.bar} style={{ width: `${calculateBarWidth(baseStats.hp)}%`, backgroundColor: getStatColor('hp') }}>
            {baseStats.hp}
          </div>
        </div>
      </div>
      <div className={statStyles['stat-bar']}>
        <div className={statStyles['stat-name']}>Attack</div>
        <div className={statStyles['bar-container']}>
          <div className={statStyles.bar} style={{ width: `${calculateBarWidth(baseStats.atk)}%`, backgroundColor: getStatColor('atk') }}>
            {baseStats.atk}
          </div>
        </div>
      </div>
      <div className={statStyles['stat-bar']}>
        <div className={statStyles['stat-name']}>Defense</div>
        <div className={statStyles['bar-container']}>
          <div className={statStyles.bar} style={{ width: `${calculateBarWidth(baseStats.def)}%`, backgroundColor: getStatColor('def') }}>
            {baseStats.def}
          </div>
        </div>
      </div>
      <div className={statStyles['stat-bar']}>
        <div className={statStyles['stat-name']}>Special Attack</div>
        <div className={statStyles['bar-container']}>
          <div className={statStyles.bar} style={{ width: `${calculateBarWidth(baseStats.sp_atk)}%`, backgroundColor: getStatColor('sp_atk') }}>
            {baseStats.sp_atk}
          </div>
        </div>
      </div>
      <div className={statStyles['stat-bar']}>
        <div className={statStyles['stat-name']}>Special Defense</div>
        <div className={statStyles['bar-container']}>
          <div className={statStyles.bar} style={{ width: `${calculateBarWidth(baseStats.sp_def)}%`, backgroundColor: getStatColor('sp_def') }}>
            {baseStats.sp_def}
          </div>
        </div>
      </div>
      <div className={statStyles['stat-bar']}>
        <div className={statStyles['stat-name']}>Speed</div>
        <div className={statStyles['bar-container']}>
          <div className={statStyles.bar} style={{ width: `${calculateBarWidth(baseStats.speed)}%`, backgroundColor: getStatColor('speed') }}>
            {baseStats.speed}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseStats;
