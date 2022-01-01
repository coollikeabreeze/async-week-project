import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import css from '../public/style.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Routers from './components/Routers'

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <Router>
  <ApolloProvider client={client}>
    <Routers />
  </ApolloProvider>
  </Router>,
  document.getElementById('app')
);
