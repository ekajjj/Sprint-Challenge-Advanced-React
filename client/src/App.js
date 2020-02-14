import React from 'react';
import Data from "./components/Data";
import './App.css';

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
        <Data 
            things={this.state.things}
            />
      </div>
    );
  }
}
export default App;