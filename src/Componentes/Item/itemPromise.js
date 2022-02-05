import Item from '../Item';
import { getProductos } from './itemList';
import { useEffect, useState } from 'react';

const Promises = () => {
    const [product, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        getProductos()
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    
    
        
    }, []);
    
    
    
    return(


        <div>
            {isLoading ? <p>Cargando...</p>:
            product.map((product)=> (<Item key={product.id} product={product} />))}
        </div>


    );
};


export default Promises;

