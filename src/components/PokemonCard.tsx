import { Link } from 'react-router-dom';
import PokemonProperties from '../interfaces/index';
interface props {
  pokemon: PokemonProperties;
}

const PokemonCard = ({ pokemon }: props) => {
  return (
    <Link to={`/pokemon/${pokemon._id}`} className="pokemonCard">
      <p>{pokemon.name}</p>
      <img src={pokemon.thumbnail} alt={pokemon.name} />
      <p>Dex Number: {pokemon.dexNumber}</p>
    </Link>
  );
};

export default PokemonCard;
