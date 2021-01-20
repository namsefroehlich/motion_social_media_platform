import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./components/store/index";
import { Provider } from 'react-redux';
import Routes from './routes/routes';

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

