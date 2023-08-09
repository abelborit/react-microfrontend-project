// este archivo va a montar el componente Cards.vue a nivel de aplicación
/* ************************************************************************************ */
import { createApp } from "vue";
// createApp es una función que nos permite montar aplicaciones de vue tal cual

// importante colocar la extensión .vue porque sino no funciona
import Cards from "./components/Cards.vue";

// importante que sea la exportación por defecto
export default function palceCards(element) {
  // ejecutar createApp quien mandará el componente principal que en este caso es Cards y luego lo va a montar en el element. Este element (en vue) es el id que le colocamos a nuestra aplicación donde se monta todo ("#app"). En este caso es como que lo va a montar en un <div></div> una aplicación de Vue.
  createApp(Cards).mount(element);
}
