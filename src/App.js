import './App.css';
import CardContainer from './Componentes/CardContainer';
import NavBar from './Componentes/navbar/NavBar';
import { useEffect, useState } from 'react';
import Promises from './Componentes/Item/itemPromise';







function App() {

const [show, setShow] = useState(false)
const buttonHandler = () => {
    setShow(!show)
    console.log("show");

}


  return (
    <div className="App">
      <NavBar />

      <h1> Big Apple </h1>

      {!show ? <CardContainer /> : '' }

      <button onClick={buttonHandler}> Productos </button>

      <Promises />
    

    </div>
  );
}

export default App;
