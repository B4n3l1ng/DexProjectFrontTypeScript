import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
interface Props {
  page: string;
}

const BackButton = ({ page }: Props) => {
  return (
    <Button variant="filled" color="#008080" component={Link} to={`/${page}`}>
      Back to {page === 'pokedex' ? page : `all ${page}`}
    </Button>
  );
};

export default BackButton;
