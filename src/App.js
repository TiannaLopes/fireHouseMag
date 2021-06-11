import React from 'react';
import './App.css';
import AppBar from './Components/AppBar';
import FireHouseIssues from './Components/FireHouseIssues'
import ButtonArea from './Components/ButtonArea'

function App() {
  return (
    <div className="App">
      <AppBar/>
      <FireHouseIssues/>
      <ButtonArea/>
    </div>
  );
}

export default App;
