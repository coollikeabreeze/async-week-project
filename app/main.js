import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import css from '../public/style.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Routers from './components/Routers'


ReactDOM.render(
  <Router>
  <Provider store={store}>
    <Routers />
  </Provider>
  </Router>,
  document.getElementById('app')
);
