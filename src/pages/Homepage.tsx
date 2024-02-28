import { Link } from 'react-router-dom';
import homeStyles from './styles/Homepage.module.css';
import { Button } from '@mantine/core';

const Homepage = () => {
  return (
    <section className={homeStyles.homePage}>
      <div>
        <h1>Welcome to our PokeDèx website!</h1>
        <h2>Here you can learn about all things competitive Pokémon, from Pokémon moves, to their abilities and items.</h2>
        <ul>
          <li>
            <Button variant="filled" color="#008080" component={Link} to="/pokedex" fullWidth>
              Browse Pokémon information
            </Button>
          </li>
          <li>
            <Button variant="filled" color="#008080" component={Link} to="/abilities" fullWidth>
              Browse Ability information
            </Button>
          </li>
          <li>
            <Button variant="filled" color="#008080" component={Link} to="/items" fullWidth>
              Browse item information
            </Button>
          </li>
          <li>
            {' '}
            <Button variant="filled" color="#008080" component={Link} to="/signup" fullWidth>
              Sign Up
            </Button>
          </li>
          <li>
            <Button variant="filled" color="#008080" component={Link} to="/login" fullWidth>
              Already registered? Login here!
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Homepage;
