import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    
      const agregarAlCarrito = (item) => {
        setCart([...cart, item])
      }
    
      const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
      }

      return (
        <CartContext.Provider value={
            {
                cart,
                agregarAlCarrito,
                isInCart
            }
        }>

        {children}
        </CartContext.Provider>
      )

}