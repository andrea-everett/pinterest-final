// import React, { Fragment } from "react";
// import Header from './components/TheHeader.js';
// import Home from './components/Home.js';
// import Modal from './components/Create.js';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// function App() {
//     return (
//       <Fragment>
//       <Router>
//           <Header />
//             <Switch>

//               <Route path="/create"><Modal/> </Route> 
              
//               <Route path="/"><Home/></Route>

//           </Switch>
//       </Router>
//     </Fragment>
//       );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/TheHeader.js';
import Home from './components/Home.js';
import Today from './components/Today.js';
import Modal from './components/Modal.js';

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
      <Route path="/create"><Modal/> </Route> 
      <Route path="/today"><Today/> </Route> 
              
      <Route path="/"><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;