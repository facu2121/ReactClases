import './App.css';
import NavBar from './Componentes/navbar/NavBar';
import { useEffect, useState } from 'react';
import Promises from './Componentes/Item/itemPromise';
import Button from './Componentes/button';







function App() {

  return (
    <div className="App">
      <NavBar />

      <h1> Big Apple </h1>

      <Button />

      <Promises />
    

    </div>
  );
}

export default App;
