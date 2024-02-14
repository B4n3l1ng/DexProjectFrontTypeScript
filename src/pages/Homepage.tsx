import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section className="homePage">
      <div>
        <h1>Welcome to our PokeDèx website!</h1>
        <h2>Here you can learn about all things competitive Pokémon, from Pokémon moves, to their abilities and items.</h2>
        <ul>
          <li>
            <Link to="/pokedex">Browse Pokémon information</Link>
          </li>
          <li>Browse Ability information</li>
          <li>Browse item information</li>
          <li>Sign Up</li>
          <li>Already registered? Login here!</li>
        </ul>
      </div>
    </section>
  );
};

export default Homepage;
