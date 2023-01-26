// import React, { Component } from 'react';
// import axios from 'axios';

// import Gallery from './components/Gallery';

//   class App extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         gallery: [],
//         searchedQuery: ''};
//     }
//     ROOT = `https://api.unsplash.com/`
//     KEY = `?client_id=<v5HJI2VRN6ZfIW0_4t882w7OVJRntBaYOeBbaYDSdaA>`
//     PERPAGE = `&per_page=30`
    
//         fetchInitialImages = () => {
//           this.setState({ searchedQuery: 'Curated Collection'})
//           axios.get(`${this.ROOT}photos${this.KEY}${this.PERPAGE}&page=1`)
//               .then(res => {
//                 let results = res.data
//                 this.setState(() => {
//                   return { gallery: [...results] }
//                 }, () => { console.log('this.state.gallery = ', this.state.gallery)})
//               })
//               .catch(error => console.log(error))  
//           }
   
//           componentDidMount() {
//             this.fetchInitialImages()
//           }
  
//       render() {
//         return (
//           <div className="App">
//             <Gallery gallery={this.state.gallery}/>
//           </div>
//         );
//       }
//     }

//       export default App

  import React from 'react';
// import  Modal  from './components/Modal';
// import ModalAndPin from './components/ModalAndPin.js';
import FinalBoard from './components/FinalBoard.js'
// import HomeLayout from './components/HomeLayout.js';


function App() {
  return (
        <FinalBoard/>
  );
}

export default App;
