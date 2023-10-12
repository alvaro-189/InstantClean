import React, { useState } from "react";
import { View,Text , StyleSheet, useWindowDimensions, ScrollView} from "react-native"

import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native"
const NewPasswordScreen=()=>{

    const [code, setCode]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const navigation=useNavigation();
    const onSubmitPress=()=>{

        navigation.navigate("Home")
    }

    const onSingInPress=()=>{

        navigation.navigate("SingIn")
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reestablece tu contraseña</Text>

            <CustomInput placeholder="Código" value={code}setValue={setCode}/>
            <CustomInput placeholder="Nueva Contraseña" value={newPassword}setValue={setNewPassword}/>
            <CustomButton text="ESTABLECER" onPress={onSubmitPress} type="PRIMARY"/>
            <CustomButton text="Iniciar Sesión"onPress={onSingInPress} />
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        // backgroundColor:'black',
        padding:50,
    },
    logo:{
       width:'70%',
       maxWidth:500,
       maxHeight:200,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        margin:30,
    },
    text:{
        color:'white'
    },
    bold:{
        
        color:'#c2cc02'
    }
})
export default NewPasswordScreen