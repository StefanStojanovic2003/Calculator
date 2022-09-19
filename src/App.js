import React from 'react';
import NavBar from "./Components/NavBar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import PDVCalculator from './Components/PDVCalculator';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Calculator />} />
          <Route path='/pdv-calculator' element={<PDVCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
