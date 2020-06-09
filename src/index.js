import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './constants/theme'
import Firebase, { FirebaseContext } from './components/Firebase'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
