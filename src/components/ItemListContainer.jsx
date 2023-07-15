import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { pedirDatos } from "../Utilidades/pedirDatos"

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
          <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer