

const ItemDetail = ({id, precio, img, categoria, nombre, descripcion}) => {
    return (
        <div>
           <div className="row">

{
     
     <div className="col-3 mb-3 text-center">
     <h4>{nombre}</h4>
     <img src={img} alt={nombre}/>
     <p className="producto__descripcion">Genero: {categoria}</p>
     <p>Precio: ${precio}</p>
     <p>Descripcion: {descripcion}</p>
     </div>

}


</div>

        </div>
    )
}

export default ItemDetail
