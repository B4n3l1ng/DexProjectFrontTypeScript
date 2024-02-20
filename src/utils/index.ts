interface Colours {
  [key: string]: string;
}

const colours: Colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

function setTypeColor(type: string): string {
  return colours[type] || '#777';
}

const calculateBarWidth = (statValue: number) => {
  const maxWidth = 100;
  return (statValue / 255) * maxWidth;
};

function getStatColor(name: string) {
  let color;
  switch (name) {
    case 'hp':
      color = 'red';
      break;
    case 'atk':
      color = 'orange';
      break;
    case 'def':
      color = 'yellow';
      break;
    case 'sp_atk':
      color = 'blue';
      break;
    case 'sp_def':
      color = 'green';
      break;
    case 'speed':
      color = 'pink';
      break;
    default:
      color = '#fff';
  }
  return color;
}

export { setTypeColor, colours, capitalize, calculateBarWidth, getStatColor };
function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
