import { Fragment } from "react";
import UserCard from "../UserCard";

const CardContainer = () => {

    const comprar = () => {
        console.log("Gracias por tu compra");
    };
    


    return(
    <Fragment>
    
    <UserCard 
                product="Pancito" 
                price="40"  
                comprar={comprar} 
        />
        
        
        <UserCard 
                product="Milanesa" 
                price="40" 
                comprar={comprar}  
        />
        
        
        <UserCard 
                product="Sambuchito" 
                price="18" 
                comprar={comprar} 
        />
    </Fragment>
    );

}


export default CardContainer;