import { Link } from "react-router-dom"
import "../../assets/style/Layout.css"

function Header() {
    return (
        <>
        <header>
            
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/secure">Page sécurisée</Link></li>
                    <li><Link to="/vunerable">Page vulnérable</Link></li>
                    <li><Link to="/exo1">Exo1 - Rapelle</Link></li>
                    <li><Link to="/calculator">Exo2 - Calculatrice</Link></li>
                    <li><Link to="/exo3">Exo3 - Props</Link></li>
                </ul>
            </nav>            
        </header>
        </>
    )
}

export default Header