console.log("Corriendo primer Script...")

import {App} from "./routes/App.js"


window.addEventListener("load", App)
window.addEventListener("hashchange", App)
