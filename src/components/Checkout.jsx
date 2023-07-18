import { useContext, useState } from "react"
import { CartContext } from "./CartContext"

const Checkout = () => {

const {cart, totalCompra} = useContext(CartContext)

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
    console.log(orden)
}

const handleInputChange = (e) => {
    console.log(e.target.name)
    setValues({
        ...values, 
        [e.target.name]: e.target.value
    })
}


    return (
        <div className="container my-5">
           <h2>Resumen de compra</h2>
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