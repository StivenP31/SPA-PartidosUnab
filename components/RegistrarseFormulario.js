const RegistrarseFormulario = () => {
  const formularioRegistro = `
    
    <form>

        <div class="mb-3 mb-lg-3 ">
            <label for="nombres" class="form-label" >Nombres</label>
            <input type="text" class="form-control" id="nombres" name="nombres" autocomplete="name" required>
        </div>

        <div class="mb-3">
            <label for="Apellidos" class="form-label" >Apellidos</label>
            <input type="text" class="form-control" id="Apellidos" name="Apellidos" required>
        </div>

        <div class="mb-3">
            <label for="tel" class="form-label" >Celular</label>
            <input type="tel" class="form-control" id="tel" name="tel" autocomplete="tel" required>
        </div>

        <div class="mb-3">
            <label for="correo" class="form-label" >Correo Electronico</label>
            <input type="email" class="form-control" id="correo" name="correo" autocomplete="email" required>
            <div id="emailHelp" class="form-text">Nunca se compartirá su correo electrónico.</div>
        </div>

        <div class="mb-3">
            <label for="password" class="form-label" >Contraseña</label>
            <input type="password" class="form-control" id="password" name="password"  required>
        </div>

        <button type="submit" class="btn btn-primary mt-3 " >Registrarse</button>
    </form>
    
    `;
  return formularioRegistro;
};

export { RegistrarseFormulario };
