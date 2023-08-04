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

## Sintaxis para commit

- [create]
- [add]
- [update]
- [fix]

---

## Herramientas

1. Para crear un estructura básica para microfrontend usando module federation: npx create-mf-app

   1.1 Module federation permite crear varios tipos de aplicación: Aplicación web (frontend), API Server (backend) y una librería.
   1.2 Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18.
