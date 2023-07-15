import { useState } from "react"
import { useEffect } from "react"
import MOCK_PRODUCTOS from "../data/MOCK_PRODUCTOS.json"
import { Link, useParams } from "react-router-dom"

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_PRODUCTOS)
        }, 1000)
    })
}

const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])
    // const [loading, setLoading] = useState(true)


    useEffect (() => {
        pedirDatos()
        .then((res) => {
            if(!categoria){
            setProductos(res)}
            else {setProductos( res.filter((juego) => juego.categoria === categoria)       )}
        })
        .catch((error) => {
            console.error(error)
        })
    }, [categoria])




    return (
        <div className="container my-5"> 
            <h2 className="text-center">Lista de juegos</h2>
            <hr />
            <div className="row">

            {
                productos.map((prod)  => (
                    <div key={prod.id} className="col-3 mb-3 text-center">
                    <h4>{prod.nombre}</h4>
                    <img src={prod.img} alt={prod.nombre}/>
                    <p className="producto__descripcion">Genero: {prod.categoria}</p>
                    <p>Precio: ${prod.precio}</p>
                    <Link className="btn btn-primary" to={`/item/${prod.id}`}>Más info</Link>
                    </div>
                ))
            }


            </div>
        </div>
    )
}

export default ItemListContainer

