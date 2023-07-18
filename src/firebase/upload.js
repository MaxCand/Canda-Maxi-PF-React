import MOCK_PRODUCTOS from "../data/MOCK_PRODUCTOS.json" assert {type: "json"}
import { collection, addDoc } from "firebase/firestore"
import { db } from "./config.js"

const productosRef = collection(db, "productos")

MOCK_PRODUCTOS.forEach((item) => {
    delete item.id
    addDoc(productosRef, item)
})