// este store.jsx es quien tendrá todo el provider. Se crea este componente extra por si más adelante lo necesito exponer en los microfrontends para realizar algún comportamiento o alguna lógica que necesite pero en este caso solo se utilizará en este microfrontend store
import { Provider } from "react-redux";
// aquí se está usando el index (archivo de barril) porque hay un choque entre el nombre el componente y el nombre con el que se exporta entonces para que sea más explícito se coloca el store/index
import { store } from "./store/index";

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
