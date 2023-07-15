import { useState } from "react"
import { useEffect } from "react"
import MOCK_PRODUCTOS from "../data/MOCK_PRODUCTOS.json"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_PRODUCTOS)
        }, 1000)
    })
}

const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)


    // console.log(item)
    // console.log(itemId)

    useEffect (() => {
        pedirDatos()
        .then((res) => {
            setItem(res.find((prod) => prod.id === Number(itemId)))
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => setLoading(false))
    }, [itemId])




    return (
        <div className="container my-5">
            
        {
            loading
            ? <h2 className="text-center">Loading...</h2>
            :<ItemDetail {...item}/>
        
        
        }
        </div>
    )
}

export default ItemDetailContainer

