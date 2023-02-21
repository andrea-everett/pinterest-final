 import React from 'react';
import Header from './components/TheHeader.js';
import Home from './components/Home.js';
import Modal from './components/Create.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
      <Router>
          <Header />
            <Switch>

              <Route exact path="/"><Home></Home></Route>
              <Route exact path="/Create"><Modal/> </Route> 
              
          </Switch>
      </Router>
      );
}

export default App;
