/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import  VistaPrimaria from "./views/VistaPrimaria";
import ImageIcon from "./assets/img/menu.png";

function  App(){

return (
  <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home"
   component={VistaPrimaria}
   options={{
    title: 'Ordenes de compra',
    headerStyle: {
      backgroundColor: '#fff',
      borderWidth:0,
      borderStartWidth:0,
      elevation:0
    
    
     // textAlign:"center"
    },
    headerTintColor: '#00dc7f',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:20,
      justifyContent:"center"
    },
    headerLeft: () => (
    <View style={{width:40,height:40,alignSelf:"center",justifyContent:"center",alignItems:"center",paddingLeft:10}} >
       <Image source={ImageIcon} style={{width:24,height:24,alignSelf:"center"}} />
    </View>
    ),
  }}
   
   />
</Stack.Navigator>
</NavigationContainer>
)

}

export default App;
