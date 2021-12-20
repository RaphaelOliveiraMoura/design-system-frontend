import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Routes } from 'routes';

import { PokemonsPage } from 'pages/pokemons';
import { InputsPage } from 'pages/inputs';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.POKEMONS} element={<PokemonsPage />} />
      <Route path={Routes.INPUTS} element={<InputsPage />} />
    </Switch>
  </BrowserRouter>
);
