import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const ItemList = ({items}) => {

    return (
        <div>

<h2 className="text-center">LISTA DE JUEGOS</h2>
            <hr />
            <div className="containter-fluid row just-center my-5">

            {
                items.map((prod)  => (
                    <Card key={prod.id} className="col-3 mb-3 text-center margin-left">
                    <Card.Header>{prod.nombre}</Card.Header>
                    <Card.Img variant="top" src={prod.img} alt={prod.nombre}/>
                    <Card.Body>
                    <Card.Subtitle className="producto__descripcion">Genero: {prod.categoria}</Card.Subtitle>
                    <Card.Text>Precio: ${prod.precio}</Card.Text>
                    <hr />
                    <Link className="btn btn-primary" to={`/item/${prod.id}`}>Más info</Link>
                    </Card.Body>
                    </Card>
                ))
            }


            </div>



        </div>

    )


}

export default ItemList