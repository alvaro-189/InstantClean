import React, { useState } from "react";
import { View,Text ,TextInput,Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import Logo from '../../../assets/images/logo.png'
import BgImage from '../../../assets/images/blur.jpeg'
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from '@react-navigation/native'
import {useForm,Controller} from "react-hook-form";
const SingInScreen=()=>{

    const {height}=useWindowDimensions();
    const navigation =useNavigation();
    
    const{control,handleSubmit,formState:{errors}}=useForm();
    const onSingInPress=(data)=>{
        console.log(data)
        //validate user

        navigation.navigate('Home');
    }
    const onForgotPress=()=>{

        //validate user

        navigation.navigate('ForgotPassword');
    }
    const onSingUpPress=()=>{
 
        //validate user

        navigation.navigate('SingUp');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            {/* <Image source={BgImage} style={styles.backgrounImage}></Imaee> */}
            <Image source={Logo} style={[styles.logo,{height:height*0.2}]} resizeMode="contain"/>
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
                }}/>
            <CustomInput 
            name="password" 
            placeholder="Contraseña" 
            control={control} 
            secureTextEntry={true} 
            rules={{required:'La Contraseña es obligatoria', minLength:{value:6, message:'La contraseña debe tener mínimo 6 caracteres'}}}/>
            <CustomButton text="INICIAR" onPress={handleSubmit(onSingInPress)} type="PRIMARY"/>
            <CustomButton text="¿Olvidaste tu contraseña?" onPress={onForgotPress} type="TERTIARY"/>
            <CustomButton text="Registrarse" onPress={onSingUpPress} />
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:50,
        flex:1,
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    backgrounImage:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
    logo:{
       width:'70%',
       maxWidth:500,
       maxHeight:200,
    }
})
export default SingInScreen