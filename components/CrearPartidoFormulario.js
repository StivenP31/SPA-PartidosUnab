const CrearPartidoFormulario = () => {
  const formularioCrearPartido = `
      
      <form>

        <div class="row">
            <div class="col col-md-12 col-lg-12">
                <label for="fecha" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="fecha" name="fecha" required> 
            </div>
        </div>
        
        <div class="row">
            <div class="col col-sm-12 col-md-6 col-lg-12">
                <div class="mb-3 mb-lg-3">
                    <label for="equipoLocal" class="form-label">Equipo local</label>
                    <select name="equipoLocal" id="equipoLocal" class="form-select">
                        <option value="0">Seleccione</option>
                        <option value="1">Cúcuta Deportivo</option>
                        <option value="2">Millonarios FC</option>
                        <option value="3">Atlético Nacional</option>
                        <option value="4">Atlético Bucaramanga</option>
                        <option value="5">Deportivo Cali</option>
                    </select>
                </div>    
            </div>
            <div class="col col-sm-12 col-md-6 col-lg-12">
                <div class="mb-3 mb-lg-3">
                    <label for="equipoVisitante" class="form-label">Equipo visitante</label> 
                    <select name="equipoVisitante" id="equipoVisitante" class="form-select">
                        <option value="0">Seleccione</option>
                        <option value="1">Cúcuta Deportivo</option>
                        <option value="2">Millonarios FC</option>
                        <option value="3">Atlético Nacional</option>
                        <option value="4">Atlético Bucaramanga</option>
                        <option value="5">Deportivo Cali</option>
                    </select>
                </div>    
            </div>               
        </div>



        <div class="row">
            <div class="col col-sm-12 col-md-6 col-lg-12">
                <div class="mb-3">
                    <label for="golesLocal" class="form-label" >Goles equipo local</label>
                    <input type="number" class="form-control" id="golesLocal" name="golesLocal" required>
                </div>
            </div>      
            <div class="col col-sm-12 col-md-6 col-lg-12">    
                <div class="mb-3">
                    <label for="golesVisitante" class="form-label" >Goles equipo visitante</label>
                    <input type="number" class="form-control" id="golesVisitante" name="golesVisitante" required>
                </div>
            </div>
        </div>                

          <button type="submit" class="btn btn-primary mt-3 " >Crear Partido</button>
      </form>
      
      `;
  return formularioCrearPartido;
};

export { CrearPartidoFormulario };
