import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import css from '../public/style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import App from './App'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('main')
)
