import React from 'react';
import Data from "./components/Data";
import Navbar from './components/Navbar';
import './App.css';
import styled from "styled-components";

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
        <Navbar />
        </div>
        <Data 
            things={this.state.things}
            />
      </div>
    );
  }
}
export default App;