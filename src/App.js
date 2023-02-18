 import React from 'react';
 import TheHeader from './components/TheHeader.js';
import GetImages from './components/GetImages.js';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
    return (
      <Router>
          <TheHeader />
            <Switch>
              <Route path="/add-pin.js">

              </Route>
                
              <Route path="/">
                <GetImages/>
              </Route>
          </Switch>
      </Router>
      );
}

export default App;
