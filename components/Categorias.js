import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import {Categorias} from "./styles";

function Items(props){
    return (

        <TouchableOpacity onPress={ props.numero !== -1? ()=>props.onChange(props.numero):()=>{} }  style={[Categorias.itemContainer,props.colored == true?Categorias.imteContainerColored:{}]} >
            <Text style={{color:props.colored == true? '#fff':"gray",fontSize:12,fontWeight:"bold"}} >{props.texto}</Text>
        </TouchableOpacity>
    )
}

export default props=><View 
style={Categorias.Container}
>
    <Items onChange={props.onChange} numero={0} texto='Todos'  colored={ props.categoriaSeleccionada == 0?true:false }  />
    <Items onChange={props.onChange} numero={1} texto='Generadas'  colored={ props.categoriaSeleccionada == 1?true:false }  />
    <Items texto='Pendientes' numero={-1}   colored={false}  />
    <Items texto='Historico' numero={-1} colored={false}  />

    


    

</View>
