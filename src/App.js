import React from 'react';
import './App.css';


import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}




export default App;
