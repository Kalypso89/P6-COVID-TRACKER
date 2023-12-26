import "./NavbarMolecule.css"

export const NavbarMolecule = () => {
  return (
    <nav className="d-flex">
            <div className="d-flex flex-column bg-body-tertiary">
                <a href="/" className="p-3">
                    <img className="coronavirus-img" src="./src/assets/images/coronavirus.png" width="50" height="50"></img>
                </a>
                <ul className="nav nav-pills flex-column mb-auto text-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link active py-3 border-bottom" aria-current="page">
                            <img src="./src/assets/icons/pie-chart.svg" width="30" height="30"></img>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 border-bottom">
                            <img src="./src/assets/icons/view-list.svg" width="30" height="30"></img>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 border-bottom">
                            <img src="./src/assets/icons/view-grid.svg" width="30" height="30"></img>
                        </a>
                    </li>

                </ul>
                <div className="border-top">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3">
                        <img src="./src/assets/icons/flickr-alt.svg" width="24" height="24"></img>
                    </a>
                </div>
            </div>
        </nav>
  )
}
