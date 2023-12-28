import "./homeNavbar.css"

export const HomeNavbar = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
        <div class="container-fluid justify-content-center">
        <a class="navbar-brand logo-dark" href="index.html">
          <img src="/src/assets/images/logo.png" alt="logo" class="img-fluid w-50" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
          <div class="container">
            <div class="row">
                <div class="col-xl-12 navigation">
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link h6 mark active" aria-current="page" href="#">
                                <small>Home <img src="/src/assets/icons/angle-down.svg" class='down' /></small>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><small>Prevention</small></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><small>Qurantine</small></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#">
                                <small>Pages <img src="/src/assets/icons/angle-down.svg" class='down' /></small>
                                
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><small>About</small></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link h6 mark" href="#"><small>Help</small></a>
                            </li>
                            <li class="nav-item">
                            <div class="signin-btn">
                            <button type="button" class="btn btn-primary btn-sm rounded">Tracker</button>
                              </div>
                            </li>
                          </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </nav>
  )}