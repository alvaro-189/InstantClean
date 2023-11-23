import React, { useReducer, useState } from "react";
import { View,Text , StyleSheet, useWindowDimensions, ScrollView,SafeAreaView,Image,Alert} from "react-native"
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native"
import { useForm } from "react-hook-form";
import BgImage from '../../../assets/blur.jpeg'
import axios from "axios";
const ForgotPasswordScreen=()=>{
    const navigation=useNavigation();
    const{control,handleSubmit,formState:{errors},reset}=useForm();
    
    const onSendPress=async(data)=>{
        console.log(data)
        //navigation.navigate('NewPassword');
        try {
            const response = await axios.post('http://192.168.1.103:3001/email/sendEmail',{
            to: data.email,
            subject:'Recuperar la contraseña',
            text:'Este es el contenido del mensaje de texto para enviar el codigo para reestablecer la contraseña',
            })
            
            Alert.alert("Correo enviado con éxito");
            
        } catch (error) {
            console.error("error al enviar el correo desde la aplicación",error)
        }
    }

    const onSingInPress=()=>{

        navigation.navigate("SingIn")
    }
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'transparent'}}>
            <Image source={BgImage} style={styles.backgroundImage}/> 
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>¿Olvidaste tu constaseña?</Text>

            <CustomInput 
            name="email"
            placeholder="Correo Electrónico" 
            control={control}
            rules={{
                required:'El Correo electrónico es obligatorio',
                pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ingresa una dirección de correo electrónico válida',
                }
                }}
            />
            <CustomButton text="ENVIAR" onPress={handleSubmit(onSendPress)} type="PRIMARY"/>
            <CustomButton text="Iniciar Sesión"onPress={onSingInPress} />
        </View>
        </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        // backgroundColor:'black',
        padding:50,
        flex:1,
        justifyContent:'center',
        backgroundColor:'transparent'
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
    },
    backgroundImage:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
})
export default ForgotPasswordScreen