import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './Pantallas/Inicio';

const Stack = createStackNavigator()
export default function App(){
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="iniciopag" component={Inicio}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
