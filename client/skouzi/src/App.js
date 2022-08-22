//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AppNavBar from './component/appNavBar';
import Dashboard from './component/pages/Dashboard';
import Home from './component/pages/Home';

function App() {
  return (
    <div className='App'>
      <AppNavBar/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/dashboard' exact element={<Dashboard />}/>
      </Routes>   
    </div>
  );
}
export default App;
