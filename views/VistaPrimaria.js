import React,{useState} from "react";
import {View,Image,ScrollView} from "react-native";
import SearchBar from "../components/searchBar";
import Categorias from "../components/Categorias";
import CardComponent from "../components/CardComponent";
import CardDetalle from "../components/CardDetalle";

export default function VistaPrimaria(){

    let [Cat,setCategoria] = useState(0);


    function OnChangeCategoria(numero){
        setCategoria(numero);
        console.log("Cambio de categoria");
    }

    return (
    <View style={{flex:1,backgroundColor:"#fff"}} >

            <SearchBar  />
            <Categorias onChange={OnChangeCategoria}  categoriaSeleccionada={Cat}  />

        {
            Cat === 0?
            <ScrollView>

            
            <CardComponent />

        </ScrollView>:
        <CardDetalle />

    
        }

        




    </View>)

}
