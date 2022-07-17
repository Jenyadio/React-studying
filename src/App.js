import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import './styles/App.css'
import AppRouter from './Components/AppRouter';
 
function App() {

  return (
    <BrowserRouter className="App">
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
