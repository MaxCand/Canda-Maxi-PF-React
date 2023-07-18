import { useContext } from "react"
import { CartContext } from "./CartContext"
import {LuTrash2} from "react-icons/lu"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';


const Cart = () => {

const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

if (cart.length === 0) {
    return (
        <div className="container my-5">
        <h2>Tu carrito esta vacio</h2>
        <hr />
        <Link className= "btn btn-primary" to="/"> Ir a comprar </Link>
        </div>
    )
}

return (
        <div className="container-fluid row my-5">
                <><h2>Tu resumen de compra: </h2>
                <hr />

        {
            cart.map((prod) => (
                <Card className="text-center mt-2 mb-2" border="primary" style={{ width: '18rem' }} key={prod.id}>
                    <Card.Header>{prod.nombre}</Card.Header>
                    <Card.Img variant="top" src={prod.img} alt={prod.nombre}/>
                    <Card.Body>
                    <p>Precio: ${prod.precio}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <button className="btn btn-danger" onClick={() => eliminarDelCarrito(prod.id)}> <LuTrash2/> </button>
                    <hr/>
                    </Card.Body>
                </Card>
            ))
        }

        <div>
            <h5>Total: ${totalCompra()}</h5>
            <hr />
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Finalizar compra</Link>
        </div></>
            

        </div>)
}

export default Cart