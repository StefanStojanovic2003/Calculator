import React from 'react';
import NavBar from "./Components/NavBar";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' exact element={<Calculator />} />
          <Route path='/currency-converter' element={<CurrencyConverter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
