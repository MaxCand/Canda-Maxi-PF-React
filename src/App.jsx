import NavBar  from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { CartProvider } from "./components/CartContext"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"



function App() {


  return (

<CartProvider>
    <BrowserRouter>

        <NavBar/>

      <Routes>

      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categorias/:categoria" element={<ItemListContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="*" element={<Navigate to={"/"}/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route/>

      </Routes>

    </BrowserRouter>
    </CartProvider>

  )
}

export default App
