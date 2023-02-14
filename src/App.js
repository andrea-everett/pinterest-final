 import React from 'react';
// import  Modal  from './components/Modal';
// import ModalAndPin from './components/ModalAndPin.js';
// import FinalBoard from './components/FinalBoard.js'
import GetImages from './components/GetImages.js';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Create  from './components/Create.js';



function App() {
    return (
      <Router>
        
            <Route exact path="/Create.js" component={Create}/>
            <GetImages/>
        
      </Router>
      );
    }

export default App;
