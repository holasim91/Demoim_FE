import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import store from "./redux/configStore";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import theme from './shared/theme';
import './css/reset.css';
import './css/main.css';

ReactDOM.render(
  <Provider store ={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

