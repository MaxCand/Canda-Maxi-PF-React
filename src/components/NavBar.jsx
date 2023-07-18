import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { GiAbstract006 } from "react-icons/gi";

const NavBar = () => {
    return (
            <header className="header">
                <div className="header__container">
                    <div className="header__Brand">
                    <Link className="iconoPP" to="/"> <GiAbstract006/> </Link>
                    </div>
                    <div>
                    <nav className="header__navBar">
                        <Link to="/categorias/plataformas">Plataformas</Link>
                        <Link to="/categorias/RPG">RPG</Link> 
                        <Link to="/categorias/carreras">Carreras</Link> 
                        <Link to="/categorias/shooter">Shooter</Link>
                        <Link to="/categorias/deportes">Deportes</Link>
                    </nav>
                    </div>
                    </div>
                    <CartWidget />
            </header>
            
    )
}

export default NavBar
