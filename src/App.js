// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import TicTacToe from './components/TicTacToe/TicTacToe';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/tictactoe' element={<TicTacToe/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
