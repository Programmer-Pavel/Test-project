import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { theme } from './ui-kit';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);
