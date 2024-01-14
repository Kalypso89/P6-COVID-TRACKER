import "./NavbarMolecule.css"
import { Link, useLocation } from "react-router-dom"

export const NavbarMolecule = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav_tracker">
      <div className="d-flex flex-column">
        <Link to="/" className="p-4">
          <img className="coronavirus-img" src="./src/assets/images/coronavirus.png" width="50" height="50" alt="Coronavirus"></img>
        </Link>
        <ul className="nav nav-pills flex-column mb-auto text-center">
          <li className={`nav-item ${currentPath === '/tracker1' ? 'active' : ''}`}>
            <Link to="/tracker1" className="nav-link">
              <i className="bi bi-pie-chart-fill"></i>
            </Link>
          </li>
          <li className={`nav-item ${currentPath === '/tracker2' ? 'active' : ''}`}>
            <Link to="/tracker2" className="nav-link">
              <i className="bi bi-list"></i>
            </Link>
          </li>
          <li className={`nav-item ${currentPath === '/tracker3' ? 'active' : ''}`}>
            <Link to="/tracker3" className="nav-link">
              <i className="bi bi-grid"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
