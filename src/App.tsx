import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import AbilitiesPage from './pages/AbilitiesPage';
import ScrollToTop from './components/ScrollToTop';
import AbilityDetails from './pages/AbilityDetails';
import ItemsPage from './pages/ItemsPage';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
        <Route path="/abilities" element={<AbilitiesPage />} />
        <Route path="/ability/:abilityId" element={<AbilityDetails />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:itemId" element={<ItemDetails />} />
      </Routes>
    </>
  );
}

export default App;
