import NavBar  from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"


function App() {


  return (


    <BrowserRouter>

        <NavBar/>

      <Routes>

      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categorias/:categoria" element={<ItemListContainer/>}/>
      <Route path="*" element={<Navigate to={"/"}/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
