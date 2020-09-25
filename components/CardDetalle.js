import React from "react";
import {View,Text,Image} from "react-native";
import {CardStyles, SecodaryView} from "./styles";
import IcUser from "../assets/img/user.png";
import IcCalendar from "../assets/img/calendar.png";
import IcCar from "../assets/img/shopping_cart.png";
import IcCheck from "../assets/img/check.png";

export default ()=>
<View style={SecodaryView.ContainerOrangered} >


    <View style={SecodaryView.textContainer} >
        <Text style={SecodaryView.TextTitle} >Pedido: #10</Text>
    </View>

        <View style={SecodaryView.ContainerInfo} >
            <View style={{flexDirection:"row"}} >

                <Image  source={IcUser} style={{width:25,height:25,marginRight:10}}  />
                <Text style={SecodaryView.TextSubtitle} >Cliente: Invercomer</Text>

               

            </View>
         
            <View style={SecodaryView.HorizontalSeparador} />
            <View style={{flexDirection:"row"}} >

                <Image  source={IcCalendar} style={{width:25,height:25,marginRight:10}}  />
                <Text style={SecodaryView.TextSubtitle} >Fecha de entrega</Text>

                </View>
            <View style={{flexDirection:"row"}} >
                <View  >
                    <Text style={SecodaryView.TextSecondary} >07/0/2020</Text>
                </View>
                <View style={SecodaryView.VeticalLine}  />
                <View  >
                    <Text style={SecodaryView.TextSecondary} >10:30 am</Text>
                </View>

            </View>  
            <View style={SecodaryView.HorizontalSeparador} />  

            <View style={{flexDirection:"row"}} >

                <Image  source={IcCar} style={{width:25,height:25,marginRight:10}}  />
                <Text style={SecodaryView.TextSubtitle} >Productos :7</Text>

            </View>

         



        </View>

        <View style={SecodaryView.BlackContainer} >
             

                <View style={{alignSelf:"center",flexDirection:"row"}} >
                <View style={SecodaryView.ImageContainer} >
                    <Image source={IcCheck} style={{width:12,height:12,alignSelf:"center"}}  />
                </View>
                <Text style={SecodaryView.TextEstado} >Estado: Generado </Text>
                </View>
            </View>




</View>
