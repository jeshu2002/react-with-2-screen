import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/shows/:id" component={ShowDetailsScreen} />
    </Router>
  );
};

export default App;
