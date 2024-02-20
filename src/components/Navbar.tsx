import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/pokedex">Dex Page</Link>
        </li>
        <li>
          <Link to="/abilities">Abilities Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
