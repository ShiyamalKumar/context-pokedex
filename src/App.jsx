
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import { PokemonProvider } from './context/PokemonContext';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<PokemonList />} /> 
            <Route path="/pokemon/:id" element={<PokemonDetails />} /> 
          </Routes>
        </PokemonProvider>
      </div>
    </Router>
  );
};

export default App;
