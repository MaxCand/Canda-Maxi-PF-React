import { useContext } from "react"
import logo from "../assets/carrito-icono.png"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <Link to="/cart" className="cartConteiner">
            <img className="cartWidget__image" src={logo} alt="carrito" />
            <span className="cartWidget__span">{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget