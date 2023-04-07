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
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TheHeader from "./components/TheHeader.js";
import Home from "./pages/Home.js";
import Today from "./pages/Today.js";
import Create from "./pages/Create.js";

const URL = 'https://json-server-production-f1f5.up.railway.app'

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const fetchPins = async () => {
      const res = await fetch(`${URL}/pins`)
      const json = await res.json()
      if (res.ok) {
        setPins(json)
      }
    }
    fetchPins()
  }, []);


  const add_pin = async (pinDetails) => {
    // post pinDetails to db, use AI localhost:3500/pins fetch
    const res = await fetch(`${URL}/pins`, {
      method: 'POST',
      body: JSON.stringify(pinDetails),
      headers: {
        "Content-Type": 'application/json'
      }
    })

    console.log(res.status)

    // if (res.status !== 404) {
    //   const data = res.json();
    //   setPins([...pinDetails, { pinDetails }])
    // } else {
    //   setPins([...pinDetails])
    // }

    // } catch (error) {
    //   console.log(error.message)
    //   setLoading(false)
    // }

    setPins(() => [...pins, pinDetails]);
  };


  return (
    <Router>
      <TheHeader>

        <Switch>
          <Route path="/create">
            <Create add_pin={add_pin} pins={pins} />
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
