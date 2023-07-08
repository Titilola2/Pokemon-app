import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = ({ match }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemon();
  }, [match.params.name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Pokémon not found.</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemon.forms[0].name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.forms[0].name} />

      <h3>Abilities:</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>
            {ability.ability.name} {ability.is_hidden && "(Hidden)"}
          </li>
        ))}
      </ul>

      <h3>Base Experience:</h3>
      <p>{pokemon.base_experience}</p>

      <h3>Game Indices:</h3>
      <ul>
        {pokemon.game_indices.map((gameIndex, index) => (
          <li key={index}>
            {gameIndex.version.name} (Game Index: {gameIndex.game_index})
          </li>
        ))}
      </ul>

      <h3>Height:</h3>
      <p>{pokemon.height}</p>

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default PokemonDetail;
