import { Button } from '@mantine/core';
import { setTypeColor } from '../utils';
interface Props {
  filterByType: (type: string) => void;
  removeFilters: () => void;
}

const TypeSearch = ({ filterByType, removeFilters }: Props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '60%', justifyContent: 'center', alignItems: 'center', gap: '0.5em', margin: '1em 0' }}>
      <Button variant="filled" color={setTypeColor('normal')} onClick={() => filterByType('normal')}>
        Normal
      </Button>
      <Button variant="filled" color={setTypeColor('fire')} onClick={() => filterByType('fire')}>
        Fire
      </Button>
      <Button variant="filled" color={setTypeColor('water')} onClick={() => filterByType('water')}>
        Water
      </Button>
      <Button variant="filled" color={setTypeColor('grass')} onClick={() => filterByType('grass')}>
        Grass
      </Button>
      <Button variant="filled" color={setTypeColor('flying')} onClick={() => filterByType('flying')}>
        Flying
      </Button>
      <Button variant="filled" color={setTypeColor('fighting')} onClick={() => filterByType('fighting')}>
        Fighting
      </Button>
      <Button variant="filled" color={setTypeColor('poison')} onClick={() => filterByType('poison')}>
        Poison
      </Button>
      <Button variant="filled" color={setTypeColor('electric')} onClick={() => filterByType('electric')}>
        Electric
      </Button>
      <Button variant="filled" color={setTypeColor('ground')} onClick={() => filterByType('ground')}>
        Ground
      </Button>
      <Button variant="filled" color={setTypeColor('rock')} onClick={() => filterByType('rock')}>
        Rock
      </Button>
      <Button variant="filled" color={setTypeColor('psychic')} onClick={() => filterByType('psychic')}>
        Psychic
      </Button>
      <Button variant="filled" color={setTypeColor('ice')} onClick={() => filterByType('ice')}>
        Ice
      </Button>
      <Button variant="filled" color={setTypeColor('bug')} onClick={() => filterByType('bug')}>
        Bug
      </Button>
      <Button variant="filled" color={setTypeColor('ghost')} onClick={() => filterByType('ghost')}>
        Ghost
      </Button>
      <Button variant="filled" color={setTypeColor('steel')} onClick={() => filterByType('steel')}>
        Steel
      </Button>
      <Button variant="filled" color={setTypeColor('dragon')} onClick={() => filterByType('dragon')}>
        Dragon
      </Button>
      <Button variant="filled" color={setTypeColor('dark')} onClick={() => filterByType('dark')}>
        Dark
      </Button>
      <Button variant="filled" color={setTypeColor('fairy')} onClick={() => filterByType('fairy')}>
        Fairy
      </Button>
      <Button variant="filled" color="#008080" onClick={removeFilters}>
        Remove filters
      </Button>
    </div>
  );
};

export default TypeSearch;
