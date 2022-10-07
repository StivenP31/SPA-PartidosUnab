import {EliminarPartidoBoton} from "../components/EliminarPartidoBoton.js"

const partidoCard = (partido, miPartido)=>{

    const vistaPartidoCard=
    `
        <div class="card mt-3 mb-3 ">
            
                <div class="card-header mi-card">
                    <div>
                        ${partido.jugado ? `
                        <div class="mi-badge-jugado">Jugado</div>` : 
                        `<div class="mi-badge-pendiente">Pendiente</div>`}
                    </div>
                    ${ miPartido? 
                    `<div>
                        <a href="" class="btn btn-info btn-sm me-2">Editar</a>
                        ${EliminarPartidoBoton()}
                    </div>`:""}
                </div>

                <div class="card-body">
                    <div class="card-tiitle">
                        <a href="/partido/${partido.id}">
                        ${partido.equipolocal} vs ${partido.equipovisitante}
                        </a>
                    </div>
                    <div class="card-text">
                        fecha: ${partido.fecha}
                    </div>
                    <div class="card-text">
                        usuario: ${partido.usuario},${partido.creados}
                    </div>

                </div>
              
        </div>


    ` 

    return vistaPartidoCard    

}

export {partidoCard}