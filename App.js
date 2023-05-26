import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './Pantallas/Inicio';
import { Button } from 'react-native-web';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regis from './Pantallas/Registrarse';
import 'react-native-gesture-handler';
import React from 'react';


const Stack = createNativeStackNavigator();


export default class App extends React.Component {
  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Registrarse' component={Regis} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
}
