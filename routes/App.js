// nav
import { Nav } from "../layouts/Nav.js";
//Main-pages
import { PartidosCreados } from "../pages/partidosCreados.js";
import { Registrarse } from "../pages/Registrarse.js";
import { IniciarSesion } from "../pages/IniciarSesion.js";
import { PartidosUsuario } from "../pages/PartidosUsuarios.js";
import { CrearPartido } from "../pages/CrearPartido.js";
import { Footer } from "../layouts/Footer.js";
// error, getHash and routes
import { Error404 } from "../pages/Error404.js";
import { getHash } from "../Connections/helpers/getHash.js";
import resolverRutas from "../Connections/helpers/resolverRutas.js";

const Rutas = {
  "/": PartidosCreados,
  "/registrarse": Registrarse,
  "/iniciarsesion": IniciarSesion,
  "/mispartidos": PartidosUsuario,
  "/crearpartido": CrearPartido,
};

const App = async () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  header.innerHTML = await Nav();
  footer.innerHTML = await Footer();

  let ruta = await resolverRutas(getHash());
  let pagina = Rutas[ruta] ? Rutas[ruta] : Error404;

  main.innerHTML = await pagina();
};
export { App };
