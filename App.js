import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './Pantallas/Inicio';
import { Button } from 'react-native-web';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
