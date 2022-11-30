/* @refresh reload */
import { render } from 'solid-js/web';

import './index.scss';
import App from './App';
import { Router } from '@solidjs/router';
import { createTheme, ThemeProvider } from '@suid/material';

const theme = createTheme({
   typography: {
    'fontFamily': 'Montserrat',
    'fontWeightRegular': 400
  }
})

render(
    () => 
        <ThemeProvider theme={theme}>
          <Router>
            <App/>
          </Router>
        </ThemeProvider>
    , 
    document.getElementById('root') as HTMLElement
);
