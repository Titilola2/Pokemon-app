import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './component/PokemonList';
import PokemonDetail from './component/PokemonDetail';
import SearchBar from './component/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <SearchBar onSearch={handleSearch} />
        <Switch>
          <Route exact path="/" render={() => <PokemonList searchTerm={searchTerm} />} />
          <Route path="/pokemon/:name" component={PokemonDetail} />
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
