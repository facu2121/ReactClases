import logo from './logo.svg';
import './App.css';
import CardContainer from './Componentes/CardContainer';
import NavBar from './Componentes/navbar/NavBar';
import { useEffect, useState } from 'react';
import UserCard from './Componentes/UserCard';
import Item from './Componentes/Item';
import { getProductos } from './Componentes/baseDeDatos';






function App() {

const [product, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    setIsLoading(true);
    getProductos()
    .then((data) => setProducts(data))
    .catch((error) => console.error(error))
    .finally(() => setIsLoading(false));


    
}, []);



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

      {isLoading ? <p>Cargando...</p>:
      product.map((product)=> (<Item key={product.id} product={product} />))}

    

    </div>
  );
}

export default App;
