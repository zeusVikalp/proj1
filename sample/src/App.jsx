import React from 'react';
import './App.css';
import  List  from "./Components/List"
import AnotherList from './Components/AnotherList';

function App() {
  return (
    <div >
      <h1>Mobile Operating System</h1>
      <List /> 
      <h1>Mobile Manufactures</h1>
      <AnotherList />
    </div>
  );
}

export default App;
