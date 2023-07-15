import MOCK_PRODUCTOS from "../data/MOCK_PRODUCTOS.json"

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_PRODUCTOS)
        }, 1000)
    })
}