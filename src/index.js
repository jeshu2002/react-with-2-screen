import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';
import './index.css';

ReactDOM.render(
  <Router>
    <Route path="/" component={HomeScreen} exact />
    <Route path="/shows/:id" component={ShowDetailsScreen} />
  </Router>,
  document.getElementById('root')
);
