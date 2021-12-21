import React from 'react';

import { GlobalStyles } from 'styles/global';

import { AppRoutes } from 'services/routes/routes';
import { ToastProvider } from 'services/toast';

export const App: React.FC = () => (
  <>
    <AppRoutes />
    <GlobalStyles />
    <ToastProvider />
  </>
);
