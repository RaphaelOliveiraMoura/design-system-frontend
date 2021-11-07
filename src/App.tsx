import React from 'react';

import { TextField } from 'components/inputs/textfield';

import { GlobalStyles } from 'styles/global';
import { moneyMask } from 'services/mask';

function App() {
  return (
    <>
      <TextField label='Input maneiro' onChange={() => null} mask={moneyMask} />
      <GlobalStyles />
    </>
  );
}

export default App;
