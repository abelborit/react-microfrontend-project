# Micro-Frontend: Arquitectura de Aplicaciones Web Escalables

---

El Microfrontend es una arquitectura de desarrollo web moderna que nació en el año 2016, con la cual podemos hacer aplicaciones altamente escalables y llevar la abstracción de código a otro nivel, ya no basando aplicaciones en módulos, ni componentes, si no en Microfrontends que no son mas que sub-aplicaciones web completamente autónomas, independientes y reutilizables, permitiéndonos también escalar de formas increíbles.

Hay una arquitectura de la mano con React y Webpack Module Federation, que son tecnologías que se integran a la perfección entre sí y nos permiten llevar este concepto a una realidad que puede trabajar en proyectos reales.

---

## Reglas del Micro-Frontend:

1. La tecnología debe ser agnóstica, es decir, independientemente la tecnología que se utilice al final deben integrarse todos.
2. Cada equipo debe tener su propio código y este debe estar aislado, es decir, cada equipo de trabajo va a tener su propio código fuente.
3. Priorizar las funciones nativas del navegador antes de crear funciones personalizadas. Por ejemplo: Cómo comunicar un componente con otro, para esto se podría utilizar Local Storage, Session Storage o cookies del navegador, que son API's nativas del navegador antes de empezar a crear una función que se maneje, por ejemplo, por web sockets y que esa sea consumida tanto por un cliente o por un micro micrófono y por otro que si en uno se actualiza en el otro también o situaciones similares.
4. Los micrófonos deben ser resilientes, es decir, que si un micro-frontend falla el resto de micro-frontend debe permanecer estable y funcionando con normalidad.

## Ventajas y Desventajas:

- ### Ventajas

  1. Tenemos repositorios altamente cohesivos, fáciles de mantener y con menor cantidad de código necesario para realizar una acción.
  2. Tenemos equipos de acoplados y escalables.
  3. Podemos, literalmente, hacer cambios en la interfaz gráfica de una forma muy específica y rápida, sin descuidar toda mi aplicación a nivel de cómo se ve visualmente. Si cambiamos cualquier cosa de la interfaz gráfica, sabemos a qué micro-fronted vamos a movernos.

- ### Desventajas
  1. Gran reto al eliminar dependencias de nuestra aplicación y para comunicar los micro-fronted.
  2. Duplicidad de dependencias porque al tener varios micro-frontend cada uno utilizará X dependencias las cuales se pueden duplicar porque cada uno va a tener su propio compilado de esas librerías/dependencias.
  3. Hay una mayor cantidad de archivos que el cliente necesita descargar, porque cada micro-fronted va a tener sus dependencias, sus archivos CSS, sus archivos HTML, sus archivos de JavaScript y literalmente todo eso lo tiene que descargar el cliente porque al final el frontend se descarga y lo monta el cliente.
  4. Añade complejidad al ciclo de integración y despliegue continuo (un despliegue continuo es creamos un repositorio de Git. Tenemos un repositorio que se auto compila y publica las aplicaciones en automático. Si algo falla también me lo notifica y demás) Es decir, vamos subiendo el código fuente, este se compila y se expone la aplicación final y esto llega a tardar unos segundos y el problema sería cuando tenemos una gran cantidad de micro-fronted porque sería repetir el mismo procedimiento por cada uno.
  5. Requiere un especialista en micro-fronted.

---

## Nomenclatura para los commit

- [create]
- [add]
- [update]
- [fix]

---

## Herramientas

- React versión +18
- npx create-mf-app
- Normalizar estilos del css (https://necolas.github.io/normalize.css/)
- Estilos con Emotion (https://emotion.sh/docs/introduction) (counter-mf-project)
- Estilos con Bootstrap (https://getbootstrap.com/docs/5.3/getting-started/introduction/) (colors-picker-mf-project) Se está utilizando solo en el host-app de colors-picker-mf-project para que este use los estilos de bootstrap y sus microfronend tendrán un estilo muy vago y simple ya que no tienen bootstrap.
- Para levantar servidores de prueba de producción: `npx serve` (cada vez que se coloque este comando me dará un puerto distinto, para yo colocar un puerto en específico es colocar `npx serve -l ####`). Se puede entrar a la carpeta donde se quiere levantar el puerto y colocar `npx serve -l ####` o sino desde su carpeta padre colocar `npx serve -l #### nombre_carpeta`. También se puede colocar el mismo puerto que se definió al principio (por ejemplo 3001) y seguir usando ese, pero la diferencia es que ahora se tendría que levantar el servidor con ese puerto usando `npx serve -l 3000 dist/build`
- Para hacer un deploy en servidor de internet se está usando: Netlify (hacer del build de las aplicaciones con las URL que te da Netflify para poder deployarlo)
- Alertas o notificaciones dinámicas con Sweetalert2 (https://sweetalert2.github.io/)

1. Para crear un estructura básica para microfrontend usando module federation: npx create-mf-app

   1.1 Module federation permite crear varios tipos de aplicación: Aplicación web (frontend), API Server (backend) y una librería.
   1.2 Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18.

---

## Comentarios

- Al hacer microfrontend en cuanto a los estilos pueden haber conflictos o que no se muestren desde un microfrontend secundario al microfrontend principal (host u orquestador el cual será el microfrontend que cargará los demás módulos). Estos estilos pueden tener conflictos con clases iguales tanto en los módulos como en el orquestador principal, se pueden usar técnicas como prefijos antes de las clases o module css pero para esto, es muy común usar Styled Components en vez de usar importaciones de hojas de estilos css, para hacer más facil esta comunicación y que no hayan problemas de estilos.

- Al hacer cambios o refactorizar código en las configuraciones de Webpack es necesario tumbar y volver a cargar el servidor desde la terminal para que pueda actualizarse y tomar los últimos cambios realizados.

- Es importante exponer por defecto el componente que se está federando para que el orquestador o microfrontend principal pueda renderizarlo
