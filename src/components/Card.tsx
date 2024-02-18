import { Link } from 'react-router-dom';
import { PokemonProperties, AbilityProperties } from '../interfaces/index';
interface props {
  data: PokemonProperties | AbilityProperties;
  type: string;
}

const Card = ({ data, type }: props) => {
  return (
    <Link to={`/${type}/${data._id}`} className="dataCard">
      <p>{data.name}</p>
      {type === 'pokemon' ? <img src={(data as PokemonProperties).thumbnail} alt={data.name} /> : null}
      {type === 'pokemon' ? <p>Dex Number: {(data as PokemonProperties).dexNumber}</p> : null}
    </Link>
  );
};

export default Card;
