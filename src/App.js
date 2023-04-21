import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { URL } from './utilities/serverURL';

import TheHeader from './components/TheHeader.js';
import Home from './pages/Home.js';
import Today from './pages/Today.js';
import Create from './pages/Create.js';

// test pr
function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const fetchPins = async () => {
      const res = await fetch(`${URL}/pins`);
      const json = await res.json();
      if (res.ok) {
        setPins(json);
      }
    };
    fetchPins();
  }, []);

  const add_pin = async (pinDetails) => {
    // post pinDetails to db, use AI localhost:3500/pins fetch
    const res = await fetch(`${URL}/pins`, {
      method: 'POST',
      body: JSON.stringify(pinDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(res.status);

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

  const handleDeletePin = async (id) => {
    try {
      const res = await fetch(`${URL}/pins/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
      const newPins = pins.filter((pin) => pin.id !== id);
      setPins(newPins);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <TheHeader>
        <Switch>
          <Route path="/create">
            <Create
              add_pin={add_pin}
              pins={pins}
              handleDeletePin={handleDeletePin}
            />
          </Route>
          <Route path="/today">
            <Today />{' '}
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
