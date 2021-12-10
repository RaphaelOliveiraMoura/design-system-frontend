import React from 'react';

import { TextField } from 'components/inputs/textfield';

import { GlobalStyles } from 'styles/global';
import { moneyMask } from 'services/mask';
import { PokemonsPage } from 'pages/pokemons';

function App() {
  return (
    <>
      <TextField label='Input maneiro' onChange={() => null} mask={moneyMask} />
      <PokemonsPage />
      <GlobalStyles />
    </>
  );
}

export default App;
