const Nav = () => {
  const vista = `
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" >
            <figure>
                <img id="logo" src="../assets/img/android-chrome-512x512.png" alt="Logo Vive tu exp">
            </figure>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/crearpartido/">Crear Partido</a>
                  </li>
            </ul>    


            <ul class="navbar-nav ms-auto mb-lg-0">    
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/registrarse/">Registrarse</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/iniciarsesion/">Iniciar Sesión</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#/mispartidos/">Mis partidos</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                    </ul>
                </li>

            </ul>

          </div>
        </div>
      </nav>
    `;

  return vista;
};

export { Nav };
