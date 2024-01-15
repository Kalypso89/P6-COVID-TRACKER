import "./homeNavbar.css"
import { Link } from "react-router-dom"

export const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light h-25 bg-white">
      <div className="container-fluid">
        <a className="navbar-brand logo-dark" href="index.html">
          <img src="/images/logo.png" alt="logo" className="img-fluid w-90" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 navigation">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0 d-flex justify-content-evenly align-items-center">
                  <li className="nav-item">
                    <a className="nav-link h6 mark medium" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h6 mark medium" href="#">Prevention</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h6 mark medium" href="#">Quarantine</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h6 mark medium" href="#">Pages</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h6 mark medium" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h6 mark medium" href="#">Help</a>
                  </li>
                  <li className="nav-item1">
                    <Link to="/tracker1" className="nav-link h6 mark active text-white medium" aria-current="page">Tracker</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}