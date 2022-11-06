// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import TicTacToe from './components/TicTacToe/TicTacToe';
import Splash from './components/Splash/Splash';
import BorderRadius from './components/BorderRadius/BorderRadius';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Splash/>}/>
      </Routes>
      <Routes>
        <Route exact path='/tictactoe' element={<TicTacToe/>}/>
      </Routes>
      <Routes>
        <Route exact path='/borderradius' element={<BorderRadius/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
