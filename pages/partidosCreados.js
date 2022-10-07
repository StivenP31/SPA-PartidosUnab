import {partidoCard} from "../components/PartidoCard.js"
import getPartidos from "../Connections/helpers/getPartidos.js";


const PartidosCreados = async () => {

  const partidos = await getPartidos();
  
  const vistaPartidosCreados = `    
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
          <div class="col col-sm-12 col-md-8 col-lg-6">
            <div class="card-body">
                <h3 class="text-center">Partidos Creados</h3>

                
                ${ 
                  partidos.map(  
                    partido=>partidoCard(partido, true)
                    
                    
                    ) 
                }
                  <div class="mt-3 ">
                    <div class="text-center">
                      <a href="#/iniciarsesion" >¿Ya tienes una cuenta? Iniciar sesión aquí.</a>
                    </div>    
                  </div>
              </div>
          </div>  
        </div>
    </div>

    `;
  return vistaPartidosCreados;
};

export { PartidosCreados };
