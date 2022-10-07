import { CrearPartidoFormulario } from "../components/CrearPartidoFormulario.js";

const CrearPartido = () => {
  const vistaCrearPartidos = ` 

    <div class="container mt-3 mb-3">
      <div class="row justify-content-md-center">
          <div class="col col-sm-12 col-md-8 col-lg-6">
              <div class="card-body">
                  <h3 class="text-center">Crear Partido</h3>
                  ${CrearPartidoFormulario()}
              </div>       
          </div>

      </div>
    </div>

  

      `;
  return vistaCrearPartidos;
};

export { CrearPartido };
