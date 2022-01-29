import CartIcon from "../icons/CartIcon"
import "./style.css"


const NavBar = () => {
    return (
        <nav className="navContainer" >
            <p>Home</p>
            <p>Products</p>
            <p>Abouts Us</p>
            <CartIcon />
            
        </nav>
    )
}

export default NavBar 