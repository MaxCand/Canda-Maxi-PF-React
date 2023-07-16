import { ItemQuantitySelector } from "./ItemQuantitySelector"
import { useState } from "react"

const ItemDetail = ({id, precio, img, categoria, nombre, descripcion, stock}) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const item = {
            id, precio, img, categoria, nombre, descripcion, stock, cantidad
        }
        console.log(item)
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
     <ItemQuantitySelector max={stock} cantidad={cantidad} setCantidad={setCantidad} handleAgregar={handleAgregar}/>
     </div>
}



</div>

        </div>
    )
}

export default ItemDetail
