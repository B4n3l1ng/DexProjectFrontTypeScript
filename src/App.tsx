import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;
