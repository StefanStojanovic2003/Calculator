import React from 'react';
import NavBar from "./Components/NavBar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import VATCalculator from './Components/VATCalculator';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Calculator />} />
          <Route path='/vat-calculator' element={<VATCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
