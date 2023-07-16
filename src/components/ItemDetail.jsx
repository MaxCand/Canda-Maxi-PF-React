import { ItemQuantitySelector } from "./ItemQuantitySelector"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({id, precio, img, categoria, nombre, descripcion, stock}) => {


    const { agregarAlCarrito, isInCart} = useContext(CartContext)
    console.log(isInCart(id))
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, precio, img, categoria, nombre, descripcion, stock, cantidad
        }

       agregarAlCarrito(item)

    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>
           <div className="row">

{
     
     <div className="col-3 mb-3 text-center">
     <h4>{nombre}</h4>
     <img src={img} alt={nombre}/>
     <p className="producto__descripcion">Genero: {categoria}</p>
     <p>Precio: ${precio}</p>
     <p>Descripcion: {descripcion}</p>


    {
        isInCart(id)
        ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
        :  <ItemQuantitySelector 
        max={stock} 
        cantidad={cantidad} 
        setCantidad={setCantidad} 
        handleAgregar={handleAgregar}
        />
    }

        <hr />
        <hr />
    <button onClick={handleVolver} className="btn btn-primary">Volver</button>
     </div>
}



</div>

        </div>
    )
}

export default ItemDetail
