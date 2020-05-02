import React from 'react';
import './App.css';
import axios from'axios';
import {useEffect} from "react";
import { useState } from "react";
import Person from "./components/Person"


const App = () => {
 const [reactWar, setReactWar] = useState([])
 useEffect(() => {
    
  axios
    .get("https://swapi.dev/api/people")
    // Which we then set to state
    .then(res => {
      setReactWar(res.data.results)
      console.log(res.data.results)}
    )
    // Always include error handling
    .catch(err => console.log(err));
}, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
  
    <div className="App">
      <h1 className="Header">React Wars</h1>
       {
      reactWar.map(props =>{
      return ( <Person info={props}/>

      )
    })} 
      
    </div>
  );
}

export default App;
