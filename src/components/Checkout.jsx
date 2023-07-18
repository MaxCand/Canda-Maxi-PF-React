import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Checkout = () => {

const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

const [orderId, setOrderId] = useState(null)
 const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: ""
 })


const handleSubmit = (e) => {
    e.preventDefault()

    if(values.nombre.length === 0) {
        alert("El nombre es obligatorio")
        return
    }

    if(values.direccion.length === 0) {
        alert("La direccion es obligatorio")
        return
    }

    if(values.email.length === 0) {
        alert("El email es obligatorio")
        return
    }

    const orden = {
        cliente: values,
        items: cart,
        total: totalCompra()
    }

    const ordersRef = collection(db, "orders")

    addDoc(ordersRef, orden)
    .then((doc) => {
        setOrderId(doc.id)
        vaciarCarrito()
    })
}

const handleInputChange = (e) => {
    console.log(e.target.name)
    setValues({
        ...values, 
        [e.target.name]: e.target.value
    })
}

if(orderId) {
    return (
        <div className="container my-5">
            <h2>Tu compra fue exitosa!</h2>
            <hr />
            <p>Orden de compra{orderId}</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
    )
}

if (cart.length === 0) {
    return <Navigate to="/"/>
}

    return (
        <div className="container my-5">
           <h2>Finalizar compra</h2>
           <hr />

           <form onSubmit={handleSubmit}>

            <input 
            value={values.nombre}
            type="text"
            placeholder="Nombre"
            className="form-control my-2"
            onChange={handleInputChange}
            name="nombre"
             />

            <input 
            value={values.direccion}
            type="text"
            placeholder="Direccion"
            className="form-control my-2"
            onChange={handleInputChange}
            name="direccion"
             />

            <input 
            value={values.email}
            type="email"
            placeholder="Email"
            className="form-control my-2"
            onChange={handleInputChange}
            name="email"
             />
            <button className="btn btn-primary" type="submit">Enviar</button>
           </form>
        </div>
     )
}

export default Checkout