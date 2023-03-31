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
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TheHeader from "./components/TheHeader.js";
import Home from "./pages/Home.js";
import Today from "./pages/Today.js";
import FinalBoard from "./pages/Create.js";



function App() {
  const [pins, setPins] = useState([]);

  // useEffect get from db

  const add_pin = (pinDetails) => {
    // post pinDetails to db, use AI localhost:3500/async fetch
    setPins(() => [...pins, pinDetails]);
  };

  return (
    <Router>
      <TheHeader>

        <Switch>
          <Route path="/create">
            <FinalBoard add_pin={add_pin} pins={pins} />
          </Route>
          <Route path="/today">
            <Today />{" "}
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </TheHeader>
    </Router>
  );
}

export default App;
