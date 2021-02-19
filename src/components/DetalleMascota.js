import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Linking, Button } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
/**
 * Se utiliza para separar cada mascota
 */
const Separator = () => (
    <View style={styles.separator} />
  );
/**
 * Componente funcional que retorna toda la información de la mascota pasada por parametro
 *
 * @param {*} props Objeto json con la información de la mascota
 * @return {*} componente 
 */
const DetalleMascota = (props) => {
    return (
        <SafeAreaView  style={styles.container}>
            <SafeAreaView>
                <View >
                    <Text style={styles.estiloTexto}>{props.mascotas.nombre}</Text>
                    <Text style={styles.estiloTexto}>{props.mascotas.raza}</Text>
                </View>
            </SafeAreaView>
            <SafeAreaView>
                <Image  style={styles.estiloImagen}                    
                    source={{
                        uri: props.mascotas.imagen,
                    }}
                />
            </SafeAreaView>
            <SafeAreaView>
                <Button 
                title="Mas información"
                onPress={() => { Linking.openURL(props.mascotas.informacion); }}/>
            </SafeAreaView>
            <Separator />
        </SafeAreaView >
    );

};

const styles = StyleSheet.create({
    estiloContenedor:{
        flexDirection: "column",
        justifyContent: "space-between"
    },
    estiloImagen:{
        height: 300,
        width:"100%"    
    },
    estiloTexto:{
        fontSize: 18,
        fontWeight: '100',
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default DetalleMascota;