import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView,Button, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Regis({navigate})
{
    return( 


      <View style={styles.container}>
        <Button 
          
        />
      </View> 
    )


}

const styles = StyleSheet.create({
    container: 
    {
      padding: 450,
      flexDirection:"column",
      flex: 1,
      backgroundColor: '#EEC3FF',
      alignItems:"center",
      justifyContent: "center",
      position:"absolute"
    },
    title:
    {
      color: "#2C3E50" ,
      fontStyle: "italic",
      fontSize: 60
    },
    Image:
    {
      width:150,
      height: 150,
      top:-207,
      position: "relative"
  
    },
    imagen: {
      width:450,
      height: 950,
      position:"absolute"
    },
    boton1: {
      border : -2,
      width: 200,  
      borderColor: "#ffffff",
      lineHeight: -25,
      padding:10,
      fontSize: 18,
      textAlign: "center",
      color:"#ffffff",
      borderRadius: 30,
      marginBottom: -110,
      backgroundColor:"transparent",
      position:"absolute",
    },
    boton2: {
      border : -2,
      width: 200,  
      borderColor: "#004290",
      lineHeight: -25,
      padding:10,
      fontSize: 18,
      textAlign: "center",
      color:"#004290",
      borderRadius: 30,
      marginBottom: -10,
      backgroundColor:"white",
      position:"absolute"
    },
    circulo:{
      height:150,
      width:150,
      backgroundColor:"white",
      borderRadius:100,
      margin:210,
      marginTop:-208,
      position: "relative"
    }
   
  });

  export default Regis