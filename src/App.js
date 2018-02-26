import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import DataInfra from './slides/DataInfra/DataInfra';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='routeWrapper'>
          <Route exact path="/" component={Home} />
          <Route exact path="/DataInfra" component={DataInfra} />
        </div>
      </div>
    );
  }
}

export default App;
