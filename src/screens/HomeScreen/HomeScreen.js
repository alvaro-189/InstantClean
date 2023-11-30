import React ,{useEffect,useState}from "react";
import { View,Text,FlatList,Button,StyleSheet,TouchableOpacity,DrawerLayoutAndroid } from "react-native";
import axios from "axios";
import Posts from './Posts'
import ShowPosts from '../../components/ShowPosts'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
const HomeScreen =({route})=>{
  const {userId}=route.params || 1;
  const [data,setData]=useState(null);
  const navigation = useNavigation();

  let drawer;
  useEffect(()=>{
    console.log(userId)
    axios.get(`http://192.168.1.19:3001/users/getUserById/${userId}`)
    .then(response=>{
      console.log(response.data)
      setData(response.data);
    })
    .catch(error=>{
      console.error('Error getting users',error)
    })
  },[])
  const openDrawer=()=>{
    drawer.openDrawer();
  }
  const navigationView=(
    <View style={styles.navigationContainer}>
      {data && data.map((user, index) => (
        <View key={index} style={{ marginTop: 20 }}>
          <Text style={styles.welcomeText}>Bienvenido <Text style={{fontWeight:'bold'}}>{user.NombreCompleto}</Text>
          </Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={
          () => navigation.navigate('Profile',{userId:userId,userName: data[0].NombreCompleto})} // Reemplaza 'Profile' con el nombre de la pantalla de perfil
      >
        <Text style={styles.navigationText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JobSearch')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Buscar empleo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Empleos')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Nuevo empleos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Empleos')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Mis empleos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuyMembership')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Membresia Premium</Text>
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
    return(
      <>
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
      <View style={styles.container}>
        
        
      <FlatList
      data={Posts}
      showVerticalScrollIndicator={false}
      renderItem={({item})=> <ShowPosts item={item}/>}
      />
      </View>
      </DrawerLayoutAndroid>
      </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
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
export default HomeScreen