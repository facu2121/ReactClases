import CardContainer from "./CardContainer";
import { useEffect, useState } from 'react';

const Button = () =>{

    const [show, setShow] = useState(false)
    const buttonHandler = () => {
    setShow(!show)
    console.log("show");

}



    return(
        <div>
        {!show ? <CardContainer /> : '' }

        <button onClick={buttonHandler}> Productos </button>
        </div>


    )
};

export default Button;