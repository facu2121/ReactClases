import "./style.css";

function UserCard ( {product, price, comprar}) {


    return (
        <div className="card">
            <p>Nombre: {product} </p>
            <p>Precio: {price} </p>
            <button onClick={comprar}> Compar </button>

        </div>

    ); 
}

export default UserCard;