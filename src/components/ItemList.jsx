const ItemList = ({items}) => {

    return (
        <div>

<h2 className="text-center">Lista de juegos</h2>
            <hr />
            <div className="row">

            {
                items.map((prod)  => (
                    <div key={prod.id} className="col-3 mb-3 text-center">
                    <h4>{prod.nombre}</h4>
                    <img src={prod.img} alt={prod.nombre}/>
                    <p className="producto__descripcion">Genero: {prod.categoria}</p>
                    <p>Precio: ${prod.precio}</p>
                    {/* <Link className="btn btn-primary" to={`/item/${prod.id}`}>Más info</Link> */}
                    </div>
                ))
            }


            </div>



        </div>

    )


}

export default ItemList