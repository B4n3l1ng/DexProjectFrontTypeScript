import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

interface props {
  id: string;
  text: string;
}

const PokemonNavButton = ({ id, text }: props) => {
  return (
    <Button variant="filled" color="#008080" component={Link} to={`/pokemon/${id}`}>
      {text}
    </Button>
  );
};

export default PokemonNavButton;
