import React from 'react';

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { PokemonDetailsPage, PokemonsPage, InputsPage, TablePage } from 'pages';

import { Routes } from '.';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.POKEMONS_LIST()} element={<PokemonsPage />} />
      <Route
        path={Routes.POKEMONS_DETAILS(':id')}
        element={<PokemonDetailsPage />}
      />
      <Route path={Routes.INPUTS()} element={<InputsPage />} />
      <Route path={Routes.TABLE()} element={<TablePage />} />
    </Switch>
  </BrowserRouter>
);
