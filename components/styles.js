import {StyleSheet,Dimensions } from "react-native";


export const BaseWidth = Dimensions.get("screen").width;
export const BaseHeight = Dimensions.get("screen").height;
//color #1273EB

export function CalculateValue (porcentaje,value){

    return value * (porcentaje/100 );

}


const BarWidth = CalculateValue(85,BaseWidth);
export const BarStyles = StyleSheet.create({

    container:{
        width:BaseWidth,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center"
    },
    barContent:{
        width:BarWidth,
        alignSelf:"center",
        backgroundColor:"#efeff0",
        flexDirection:"row",
        borderRadius:25
    },
    IcSearch : {
        width:16,
        height:16,
        alignSelf:"center"
        
    },
    textInput:{
        width:CalculateValue(80,BarWidth),
        paddingLeft:20,
        fontSize:14,
        fontWeight:"bold"


    }
});

export const Categorias = StyleSheet.create({

    Container:{
        backgroundColor:"#efeff0",
        flexDirection:"row",
        marginTop:20,
        marginLeft:CalculateValue(25,BaseWidth)/3,
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12


    },
    itemContainer:{
        textAlign:"center",
        paddingLeft:8,
        paddingRight:8,
        paddingTop:2,
        paddingBottom:2,
        borderRadius:12

    },
    imteContainerColored:{
        backgroundColor:"#00dc7f",
       
    }

});

export const CardStyles = StyleSheet.create({

    ContainerCard:{
        borderRadius:15,
        elevation:5,
        flexDirection:"column",
        width:BarWidth/2 -5 ,
        backgroundColor:"#ff844d",
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10
        
    
      
    },
   
    TextColored:{
        color:"#006c62"
    },
    ContainerCardColored:{
        backgroundColor:"#efeff0"
    },
    Row:{
        alignSelf:"center",
        width:BarWidth,
        flexDirection:"row",
        marginTop:20


    },
    titleCard:{
        color:"white",
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    },
    subtitleCard:{
        color:"white",
        textAlign:"center",
        fontSize:11,
        fontWeight:"bold"
    },
    SecodaryText:{
color:"white",
        textAlign:"center",
        fontSize:12,
        fontWeight:"bold",
        marginLeft:4

    },
    HorizontalSeparador:{
        height:0.3,
        backgroundColor:"white",
        marginTop:5,
        marginBottom:5
    },
    timeDate:{
        width:( BarWidth/2 -5  )/2

    },
    timeTime:{
        width:( BarWidth/2 -5  )/2,
        borderLeftWidth:1,
        borderLeftColor:'white',
        paddingLeft:5
    
        

    },
    timeText:{
        color:"white",
        fontSize:10,
        fontWeight:"bold"
      
    },
    BtnCard:{
        backgroundColor:"white",
        textAlign:"center",
        borderRadius:8,
        marginTop:5,
        paddingTop:1,
        paddingBottom:1
       // marginBottom:10
    },
    BtnCardColored:{
        backgroundColor:"#00dc7f",
    },
    BtnText:{
        color:"#ff844d",
        textAlign:"center",
        //backgroundColor:"#ff844d",
        fontSize:10,
        fontWeight:"bold"

    }


    


});


export const SecodaryView =StyleSheet.create({


    ContainerOrangered:{
        backgroundColor:"#ff844d",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      
        flex:1,
        flexDirection:"column",
        marginTop:20
    },
    ContainerInfo:{
        paddingLeft:CalculateValue(20,BaseWidth),
        paddingRight:CalculateValue(20,BaseWidth),

    },
    textContainer:{
      paddingTop:5,
      marginTop:CalculateValue(10,BaseHeight),
      
      paddingBottom:5,
      marginLeft:CalculateValue(20,BaseWidth),
      marginRight:CalculateValue(20,BaseWidth),
      paddingLeft:15,
      borderRadius:16,
     // alignSelf:"center",
    
      backgroundColor:"white",
      marginBottom:CalculateValue(10,BaseHeight),
    },
    TextTitle:{
        fontSize:22,
        color:"#ff844d",
        fontWeight:"bold"
    },
    TextSubtitle:{

        fontSize:18,
        color:"white",
        fontWeight:"bold"

    },
    HorizontalSeparador:{
        //width:CalculateValue(70,BaseWidth),
        backgroundColor:"white",
        height:1,
        marginTop:10
    },
    TextSecondary:{

        fontSize:16,
        color:"white",
        fontWeight:"bold"

    },
    VeticalLine:{
        width:1,
        backgroundColor:"white",
        marginLeft:7,
        marginRight:7

    },
    HorizontalSeparador:{
        //width:CalculateValue(70,BaseWidth),
        backgroundColor:"white",
        height:1,
        marginTop:10,
        marginBottom:10
    },
    BlackContainer:{
        backgroundColor:"white",
        flex:1,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    ImageContainer:{
        width:20,
        justifyContent:"center",
        height:20,
        backgroundColor:"#00dc7f",
        borderRadius:10
    },
    TextEstado:{
        color:"#00dc7f",
        fontWeight:"bold",
        fontSize:18,
        marginLeft:10
    }




});