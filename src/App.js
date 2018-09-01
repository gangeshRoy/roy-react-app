import "./App.css";
import React from "react";
import './App.css';

import HomeHeader from "./components/HomeHeader";




class App extends React.Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    
    return (
      <div className="App">
     <HomeHeader/>
      </div>
    );
  }
}

export default App;
