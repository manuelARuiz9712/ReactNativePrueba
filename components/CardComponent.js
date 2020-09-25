import React from "react";
import {View,Text,Image} from "react-native";
import {CardStyles } from "./styles";
import IcCalendar from "../assets/img/calendar.png";
import IcCalendarColored from "../assets/img/calendarColored.png";


function ItemCard (props){

  return  <View style={[CardStyles.ContainerCard,CardStyles.titleCard,props.selected == true?CardStyles.ContainerCardColored:{}]} >
    <Text  style={[CardStyles.titleCard,props.selected == true?CardStyles.TextColored:{}]} >#{props.number}</Text>
    <Text numberOfLines={1}   style={[CardStyles.subtitleCard,props.selected == true?CardStyles.TextColored:{}]} >Cliente: Invercomer</Text>

    <View style={CardStyles.HorizontalSeparador} ></View>
    <View style={{flexDirection:"row",alignSelf:"center",justifyContent:"center",alignItems:"center"}} >

        <Image source={ props.selected == true? IcCalendarColored:IcCalendar} style={{width:12,height:12,marginLeft:10}}  />
        <Text numberOfLines={1}  style={[CardStyles.SecodaryText,props.selected == true?CardStyles.TextColored:{}]} >Fecha de entrega </Text>
    

    </View>
    <View style={{flexDirection:"row",borderBottomColor:"white"}} >

        <View style={CardStyles.timeDate} >
            <Text numberOfLines={1} style={[CardStyles.timeText,props.selected == true?CardStyles.TextColored:{}]}  >07/07/2020:00</Text>
        </View>
        <View style={CardStyles.timeTime} >
            <Text numberOfLines={1}  style={[CardStyles.timeText,props.selected == true?CardStyles.TextColored:{}]}   >10:00 am</Text>
        </View>

    </View>
    <View style={CardStyles.HorizontalSeparador} ></View>
    <View style={[CardStyles.BtnCard,props.selected == true?CardStyles.BtnCardColored:{}]} >
        <Text numberOfLines={1}  style={[CardStyles.BtnText,props.selected == true?{color:"white"}:{}]} >Estado: Generado</Text>
    </View>

</View>
}



export default ()=><View  >

<View style={CardStyles.Row} >

<ItemCard selected={false} number='10' />
<View style={{width:10}} ></View>
<ItemCard selected={false} number='13'  />

</View>
<View style={CardStyles.Row} >

<ItemCard selected={false} number='15' />
<View style={{width:10}} ></View>
<ItemCard selected={true} number='16'  />

</View>

<View style={CardStyles.Row} >

<ItemCard selected={false} number='21' />
<View style={{width:10}} ></View>
<ItemCard selected={false} number='28'  />

</View>



</View>