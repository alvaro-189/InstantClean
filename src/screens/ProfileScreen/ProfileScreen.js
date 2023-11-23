import React from "react";
import { StyleSheet, View ,Text, Image, FlatList} from "react-native";
import ShowPosts from "../../components/ShowPosts";
import Posts from "./Posts";
const ProfileScreen=({route})=>{
    const {userName}= route.params;

    const userImage = require("../../../assets/Profiles/profileImage.jpg")
    const coverImage = require("../../../assets/Profiles/coverImage.jpg")
    return(
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
  });
export default ProfileScreen