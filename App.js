import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Rect, Circle, TextInput, SafeAreaView, React,Button , html, ImageBackground} from 'react-native';
import img from "./assets/Logo.png";
import  "./estilo.css";
import imagen from "./assets/fondo.png";

export default function App() {

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Image
          source={imagen}
          style={styles.imagen}
        />


          <button class="boton1" type="button">
                    Registrarse
          </button>
          <button class="boton2" type="button">
                    Inciar Sesión
          </button>      

        <html>

          <div id="circulo"></div>

        </html>
        <Image
          source={img}
          style={styles.Image}
        />

        </View>



     
  );
  

}

const styles = StyleSheet.create({
  container: 
  {
    padding: 450,
    flexDirection:"column",
    flex: 1,
    backgroundColor: '#010B1C',
    alignItems:"center",
    justifyContent: "center"
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
    top:-507,
    position: "relative"

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imagen: {
    width:450,
    height: 950,
    position:"absolute"
  }

 
});
