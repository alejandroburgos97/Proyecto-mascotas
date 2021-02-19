import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
/**
 * Componente funcional para mostrar un boton
 *
 * @param {*} props propiedades del boton
 * @return {*} componente
 */
const Button = (props) =>{
    return (
        <TouchableOpacity onPress={props.botonPresionado} style={styles.estiloBoton}>
                <Text style={styles.estiloTexto}>Mas información</Text>
        </TouchableOpacity>
    );
};

const styles={
    estiloTexto:{
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 3,
        color: '#008080'
    },
    estiloBoton:{
        alignSelf: 'stretch',
        backgroundColor: '#D5D8DB',
        alignItems: 'center',
        borderWidth: .5,
        paddingTop: 2,
        marginTop:10,
        marginLeft:7,
        marginRight: 7,
        marginBotton:15
    }
}

export default Button;