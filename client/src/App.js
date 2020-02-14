import React from 'react';
import Data from "./components/Data";
import './App.css';
import styled from "styled-components";

import Toggle from "./hooks/Toggle";
//hooks

const ToggleMode = styled.p `
    border: solid 1px green;
    width: 50px;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      things: ""
  
    };
  }

  render() {
  return (
    <div className="App">
      <div className="toggleBox">
        <ToggleMode>Dark Mode</ToggleMode>
        <Toggle />
        </div>
        <Data 
            things={this.state.things}
            />
      </div>
    );
  }
}
export default App;