/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//IMPORTAR COMPONENTES, LIBRERIAS REQUERIDAS

import React from "react";
import { View } from "react-native";
import DetalleMascota from "./src/components/DetalleMascota";
import Header from "./src/components/Header";
import ListaMascotas from "./src/components/ListaMascotas";

//CUERPO DEL COMPONENTE
/**
 * Componente funcional que despliega todo el contenido de la app
 *
 * @return {*} componente
 */
const App = () => {
  return (
    <View style={styles.estiloContenedor}>
      <Header titulo={"Tienda de mascotas"} />
      <ListaMascotas />
    </View>
  );
};

const styles = {
  estiloContenedor: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
};
//EXPORTAR EL COMPONENTE
export default App;
