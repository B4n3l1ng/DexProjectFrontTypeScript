import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

interface props {
  id: string;
  text: string;
}

const PokemonNavButton = ({ id, text }: props) => {
  return (
    <Button variant="filled" color="#008080" type="button">
      <Link to={`/pokemon/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
        {text}
      </Link>
    </Button>
  );
};

export default PokemonNavButton;
