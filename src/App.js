import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStoreWithMiddleware } from './redux/index';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/home';

function App() {
  return (
    <Provider store={createStoreWithMiddleware}>
     <Router>
          <Route exact path="/" component={Home} />
          <Route  path="/home" component={Home} />
        </Router>
  </Provider>
  );
}

export default App;
