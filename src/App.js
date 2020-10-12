import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import DataInfra from './slides/DataInfra/DataInfra';
import DataETL from './slides/DataETL/DataETL';
import DataPipeline from './slides/DataPipeline/DataPipeline';
import Cassandra from './slides/Cassandra/Cassandra';
import Solr from './slides/Solr/Solr';
import Docker from './slides/Docker/Docker';
import ModularizationDataPipeline from './slides/ModularizationDataPipeline/ModularizationDataPipeline'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='routeWrapper'>
          <Route exact path="/" component={Home} />
          <Route exact path="/DataInfra" component={DataInfra} />
          <Route exact path="/DataETL" component={DataETL} />
          <Route exact path="/DataPipeline" component={DataPipeline} />
          <Route exact path="/Cassandra" component={Cassandra} />
          <Route exact path="/Solr" component={Solr} />
          <Route exact path="/Docker" component={Docker} />
          <Route exact path="/ModularizationDataPipeline" component={ModularizationDataPipeline} />
        </div>
      </div>
    );
  }
}

export default App;
