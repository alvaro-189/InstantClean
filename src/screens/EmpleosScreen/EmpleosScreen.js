// Importa las bibliotecas necesarias
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView,DrawerLayoutAndroid,TouchableOpacity,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
// Componente principal
const EmpleosScreen = () => {
  // Estado para almacenar la lista de empleos
  const [empleos, setEmpleos] = useState([]);
  
  // Estados para almacenar temporalmente la información del nuevo empleo
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState('');
  const [descripcion, setDescripcion] = useState('');
    useEffect(()=>{
        const cargarEmpleos=async ()=>{
            try {
                const empleosguardados = await AsyncStorage.getItem('empleos');
                if(empleosguardados){
                    setEmpleos(JSON.parse(empleosguardados));
                }
            } catch (error) {
                console.error('Error al cargar los empleos de Asyn Storage',error)
            }
        }
        cargarEmpleos()
    },[])
  // Función para manejar el evento de guardar empleo
  const guardarEmpleo =async () => {
    // Validación básica de campos
    if (nombre.trim() === '' || horas.trim() === '' || descripcion.trim() === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    // Crear un nuevo empleo
    const nuevoEmpleo = {
      nombre: nombre,
      horas: horas,
      descripcion: descripcion,
    };

    // Agregar el nuevo empleo a la lista
    setEmpleos([...empleos, nuevoEmpleo]);
 try {
    await AsyncStorage.setItem('empleos',JSON.stringify([...empleos,nuevoEmpleo]))
 } catch (error) {
    console.error('Error al guardar los empleos en AsyncStorage',error);
 }
    // Limpiar los campos de entrada
    setNombre('');
    setHoras('');
    setDescripcion('');
    
    // Mostrar una alerta de éxito
    Alert.alert('Éxito', 'El empleo se ha guardado correctamente');
  };

  const navigationView=(
    <View style={styles.navigationContainer}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Empleos')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Mis empleos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Configuration')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SingIn')} // Reemplaza 'Login' con el nombre de la pantalla de inicio de sesión
      >
        <Text style={styles.navigationText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
  const [data,setData]=useState(null);
const navigation = useNavigation();
let drawer;
const openDrawer=()=>{
  drawer.openDrawer();
}
  return (
    <DrawerLayoutAndroid
    ref={_drawer => (drawer = _drawer)}
    drawerWidth={300}
    drawerPosition={"left"}
    renderNavigationView={() => navigationView}
    >
    <View style={{width:300, height:40}}>
    <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
    </View>
    <View style={{ padding: 20 }}>
      {/* Campos de entrada para el nuevo empleo */}
      <TextInput
        placeholder="Nombre del empleo"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        placeholder="Horas de trabajo"
        value={horas}
        onChangeText={(text) => setHoras(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />

      {/* Botón para guardar el empleo */}
      <Button title="Guardar Empleo" onPress={guardarEmpleo} />

      {/* Lista de empleos */}
      <ScrollView style={{ marginTop: 20 }}>
        {empleos.map((empleo, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>{`Nombre: ${empleo.nombre}`}</Text>
            <Text>{`Horas: ${empleo.horas}`}</Text>
            <Text>{`Descripción: ${empleo.descripcion}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerPosts:{
        top:"15%",
    },
    coverImage: {
      width: "100%",
      height: 200,
    },
    profileContainer: {
      position: "absolute",
      top: "15%",
      left: "50%",
      transform: [{ translateX: -75 }], // La mitad del ancho de la imagen de perfil
      alignItems: "center",

    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth:3,
      borderColor:'white'
    },
    userName: {
      fontSize: 24,
      fontWeight: "bold",
      marginVertical: 10,
    },
    details: {
      fontSize: 16,
    },
    welcomeText: {
      fontSize: 20,
      paddingBottom:20
    },
    bold: {
      fontWeight: 'bold',
    },
    menuButton: {
      position: 'absolute',
      top: 30,
      left: 10,
      zIndex: 1,
    },
    menuButtonText: {
      fontSize: 18,
      color: 'blue',
    },
    navigationContainer: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      margin:20
    },
    navigationText: {
      fontSize: 20,
      marginBottom: 10,
    },
  });
export default EmpleosScreen;
