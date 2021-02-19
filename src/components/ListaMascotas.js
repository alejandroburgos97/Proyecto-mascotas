import React,{ Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import DetalleMascota from './DetalleMascota';
/**
 * Componente basado en clases que despliega la lista de mascotas
 *
 * @class ListaMascotas
 * @extends {Component}
 */
class ListaMascotas extends Component{
    state = { ListaMascotas:[] };
/**
 * Se invoca inmediatamente después de que se monta un componente 
 *
 * @memberof ListaMascotas
 */
componentDidMount(){
        /* Se realiza petición get para consumir servicio rest */ 
        axios.get("http://169.254.5.133:8080/WSRESTMASCOTAS/webresources/mascotas.mascotas") 
        .then(response => {
            /* Se guarda objeto json en variable response.data */
            this.setState({ListaMascotas: response.data });
        })
        .catch(error => {
            /* En caso de error imprimirlo en la consola */
            console.log(error);
        });    
    }
    /**
     * Retorna el componente detallemascotas
     *
     * @memberof ListaMascotas
     */
    listaAMostrar = () => {
        return this.state.ListaMascotas.map(mascotas => {
            return <DetalleMascota key={mascotas.nombre} mascotas={mascotas}></DetalleMascota>
        })

    };
    /**
     * Renderiza la lista completa de mascotas dentro de un componente scrollview 
     *
     * @return {*} 
     * @memberof ListaMascotas
     */
    render(){
        console.log(this.state);
       return <ScrollView>{this.listaAMostrar()}</ScrollView>; 
    } 
}



export  default ListaMascotas;
