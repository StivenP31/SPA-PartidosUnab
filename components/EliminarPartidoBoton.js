
const EliminarPartidoBoton=()=>{

    const BotonEliminar=
    `
    <a href="" class="btn btn-danger btn-sm me-2 "data-bs-toggle="modal" data-bs-target="#CrearAlerta">Eliminar</a>
    <div class="modal fade" id="CrearAlerta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar partido</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ¿ Desea elimiar el partido ?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">continuar</button>
              <button type="button" class="btn btn-primary">cancelar</button>
            </div>
          </div>
        </div>
      </div>
    
    `
    return BotonEliminar

}

export {EliminarPartidoBoton}