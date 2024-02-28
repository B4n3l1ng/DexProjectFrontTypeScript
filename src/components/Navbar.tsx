import { Link } from 'react-router-dom';
import navStyles from './styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
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
        <li>
          <Link to="/items">Items Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
