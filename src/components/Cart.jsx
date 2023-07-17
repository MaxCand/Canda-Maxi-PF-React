import { useContext } from "react"
import { CartContext } from "./CartContext"
import {LuTrash2} from "react-icons/lu"
import { Link } from "react-router-dom"

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
        <div className="container my-5">
              
                <><h2>Tu compra: </h2>
           <hr />

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <h4>{prod.nombre}</h4>
                    <img src={prod.img} alt={prod.nombre}/>
                    <p>Precio: ${prod.precio}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <button className="btn btn-danger" onClick={() => eliminarDelCarrito(prod.id)}> <LuTrash2/> </button>
                    <hr/>
                </div>
            ))
        }

        <div>
            <h5>Total: ${totalCompra()}</h5>
            <hr />
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
        </div></>
            

        </div>
     )
}

export default Cart