import logo from "../assets/carrito-icono.png"

const CartWidget = () => {
    return (
        <div className="cartConteiner">
            <img className="cartWidget__image" src={logo} alt="carrito" />
            <span className="cartWidget__span">0</span>
        </div>
    )
}

export default CartWidget