import React from 'react';

import { TextField } from 'components/inputs/textfield';

import { GlobalStyles } from 'styles/global';

function App() {
  return (
    <>
      <TextField label='Input maneiro' onChange={console.log} />
      <GlobalStyles />
    </>
  );
}

export default App;
