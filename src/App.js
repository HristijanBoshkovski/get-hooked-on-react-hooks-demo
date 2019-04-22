import React, { Component } from 'react';
import './App.css';
import AgeContext from './context/ageContext';
import CardDemo from './components/CardDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AgeContext.Provider value={{age: 25}}>
          <CardDemo />
        </AgeContext.Provider> */}
        <CardDemo />
      </div>
    );
  }
}

export default App;
