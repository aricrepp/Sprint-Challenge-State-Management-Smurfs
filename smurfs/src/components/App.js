import React, { Component } from "react";
import "./App.css";
import DisplaySmurf from './displaySmurf';
import NewSmurf from './newSmurf';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <NewSmurf />
        <DisplaySmurf />
      </div>
    );
  }
}

export default App;
