import React from 'react';

import { GlobalStyles } from 'styles/global';

import { AppRoutes } from 'services/routes/routes';

export const App: React.FC = () => (
  <>
    <AppRoutes />
    <GlobalStyles />
  </>
);
