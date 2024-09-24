import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './User/UserList';
import { allUser } from './User/UserData';

function App() {
  return (
    <div className="App">
      <UserList users={allUser}/>
    </div>
  );
}

export default App;
