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
                </ul>
            </nav>            
        </header>
        </>
    )
}

export default Header