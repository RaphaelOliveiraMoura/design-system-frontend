import React from 'react';

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { PokemonDetailsPage } from 'pages/pokemon-details';
import { PokemonsPage } from 'pages/pokemons';

import { Routes } from '.';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.POKEMONS_LIST()} element={<PokemonsPage />} />
      <Route
        path={Routes.POKEMONS_DETAILS(':id')}
        element={<PokemonDetailsPage />}
      />
    </Switch>
  </BrowserRouter>
);
