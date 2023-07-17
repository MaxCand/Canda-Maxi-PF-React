import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { pedirDatos } from "../Utilidades/pedirDatos"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect (() => {

        setLoading(true)

        const productosRef = collection(db, "productos")
        getDocs(productosRef)
        .then((resp) => {
            const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setProductos(items)
        })
        .catch((error) => {
            console.error(error)})
        .finally(() => setLoading (false))
    }, [categoria])




    return (
        <div className="container my-5"> 
        {
        loading
        ? <h2 className="text-center">Loading...</h2>
        : <ItemList items={productos}/>
        }
        </div>
    )
}

export default ItemListContainer

// pedirDatos()
        // .then((res) => {
        //     if(!categoria){
        //     setProductos(res)}
        //     else {setProductos( res.filter((juego) => juego.categoria === categoria)       )}
        // })