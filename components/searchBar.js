import React from "react";
import {View,Image,TextInput,Text} from "react-native";
import {BarStyles} from "./styles"; 
import IconLupa from "../assets/img/loupe.png";

export default ()=>
<View style={BarStyles.container} >

    <View style={BarStyles.barContent} > 

         <TextInput style={BarStyles.textInput}  placeholder='Buscar' placeholderTextColor='gray'  />
         <Image  style={BarStyles.IcSearch} source={IconLupa}  />
         


    </View>

</View>