import React,{useEffect,useState} from "react";
import { StyleSheet, View ,Text, Image, FlatList,DrawerLayoutAndroid,TouchableOpacity} from "react-native";
import ShowPosts from "../../components/ShowPosts";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Posts from "./Posts";
const ProfileScreen=({route})=>{
    const {userName}= route.params || 1;
    const {userId}=route.params || 1;
    const userImage = require("../../../assets/Profiles/profileImage.jpg")
    const coverImage = require("../../../assets/Profiles/coverImage.jpg")
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
          onPress={() => navigation.navigate('Profile',{userId:userId,userName: data[0].NombreCompleto})} // Reemplaza 'Profile' con el nombre de la pantalla de perfil
        >
          <Text style={styles.navigationText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Empleos')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
        >
          <Text style={styles.navigationText}>Nuevo empleo</Text>
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
    return(
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
            <Image source={coverImage} style={styles.coverImage}/>
            <View style={styles.profileContainer}>
                <Image source={userImage}style={styles.profileImage}/>
                <Text style={styles.userName}>{userName}</Text>
            </View>
        <View style={styles.containerPosts}>
            <FlatList
            data={Posts}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=><ShowPosts item={item}/>}
            />
        </View>
        </View>
        </DrawerLayoutAndroid>
    )
}

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
export default ProfileScreen