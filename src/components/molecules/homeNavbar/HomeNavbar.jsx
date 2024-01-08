import "./homeNavbar.css"

export const HomeNavbar = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-light h-25">
        <div class="container-fluid">
        <a class="navbar-brand logo-dark" href="index.html">
          <img src="/src/assets/images/logo.png" alt="logo" class="img-fluid w-90" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
          <div class="container">
            <div class="row">
                <div class="col-xl-12 navigation">
                          <ul class="navbar-nav me-auto mb-1 mb-lg-0 flex-row-reverse d-flex justify-content-evenly">
                            <li class="nav-item1">
                              <a class="nav-link h6 mark active" aria-current="page" href="#">
                                <medium>Tracker</medium>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><medium>Help</medium></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><medium>About</medium></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#">
                                <medium>Pages</medium>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><medium>Quarentine</medium></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><medium>Prevention</medium></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><medium>Home</medium></a>
                            </li>
                          </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </nav>
      
  )}