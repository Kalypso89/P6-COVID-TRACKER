import "./NavbarMolecule.css"
import { Link } from "react-router-dom"

export const NavbarMolecule = () => {
  return (
    <nav className="d-flex">
            <div className="d-flex flex-column">
                <Link to="/" className="p-3">
                    <img className="coronavirus-img" src="./src/assets/images/coronavirus.png" width="50" height="50"></img>
                </Link>
                <ul className="nav nav-pills flex-column mb-auto text-center">
                    <li className="nav-item">
                        <Link to="/tracker1" className="nav-link active" aria-current="page">
                            <img src="./src/assets/icons/pie-chart.svg" width="24" height="24"></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tracker2" className="nav-link">
                            <img src="./src/assets/icons/view-list.svg" width="24" height="24"></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tracker3" className="nav-link">
                            <img src="./src/assets/icons/view-grid.svg" width="24" height="24"></img>
                        </Link>
                    </li>

                </ul>
                <div>
                    <a href="#" className="d-flex align-items-center justify-content-center p-3">
                        <img src="./src/assets/icons/flickr-alt.svg" width="24" height="24"></img>
                    </a>
                </div>
            </div>
        </nav>
  )
}
