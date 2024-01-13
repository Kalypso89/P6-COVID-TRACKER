import "./NavbarMolecule.css"
import { Link, useLocation } from "react-router-dom"

export const NavbarMolecule = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
    return (
      <nav className="d-flex nav_tracker">
        <div className="d-flex flex-column">
          <Link to="/" className="p-3">
            <img className="coronavirus-img" src="./src/assets/images/coronavirus.png" width="50" height="50" alt="Coronavirus"></img>
          </Link>
          <ul className="nav nav-pills flex-column mb-auto text-center">
            <li className={`nav-item ${currentPath === '/tracker1' ? 'active' : ''}`}>
              <Link to="/tracker1" className="nav-link">
                <img src="./src/assets/icons/pie-chart.svg" width="24" height="24" alt="Tracker 1"></img>
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/tracker2' ? 'active' : ''}`}>
              <Link to="/tracker2" className="nav-link">
                <img src="./src/assets/icons/view-list.svg" width="24" height="24" alt="Tracker 2"></img>
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/tracker3' ? 'active' : ''}`}>
              <Link to="/tracker3" className="nav-link">
                <img src="./src/assets/icons/view-grid.svg" width="24" height="24" alt="Tracker 3"></img>
              </Link>
            </li>
          </ul>
          <div>
            <a href="#" className="d-flex align-items-center justify-content-center p-3">
              <img src="./src/assets/icons/flickr-alt.svg" width="24" height="24" alt="Logo Flickr"></img>
            </a>
          </div>
        </div>
      </nav>
    );
}
