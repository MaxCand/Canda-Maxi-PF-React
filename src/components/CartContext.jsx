import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    
      const agregarAlCarrito = (item) => {
        setCart([...cart, item])
        console.log(cart)
      }
    
      const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
      }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0 )
    }

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0 )
    }
    

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }
 
      return (
        <CartContext.Provider value={
            {
                cart,
                agregarAlCarrito,
                isInCart,
                totalCompra,
                vaciarCarrito,
                eliminarDelCarrito,
                totalCantidad
            }
        }>

        {children}
        </CartContext.Provider>
      )

}