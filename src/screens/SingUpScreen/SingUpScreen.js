import React, { useState } from "react";
import { View,Text , StyleSheet, useWindowDimensions, ScrollView, Alert,Image} from "react-native"
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm,Controller} from "react-hook-form";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import BgImage from '../../../assets/blur.jpeg'
const SingUpScreen=()=>{

    const navigation = useNavigation();
    const {control,handleSubmit,formState:{errors},watch}=useForm();

    const pwd =watch('password');
    const registerPress=(data)=>{
        console.log(data);
        navigation.navigate("ConfirmEmail")
    }
    const onSingInPress=()=>{

        navigation.navigate("SingIn")
    }
    const onSingUpPress=(data)=>{
        console.log(data);
        axios.post("http://192.168.1.31:3001/users/createUser",data)
        .then(response=>{
            console.log(response.data);
            Alert.alert("Usuario creado con éxito");
            navigation.navigate("SingIn")
        })
        .catch(error=>{
            console.log('Error al crear el usuario',error);
            if(error.response){
                console.log(error.response.data);
                Alert.alert('Error','no se pudo crear al usuario')
            }
        })
    }


    return(
        <SafeAreaView style={{flex:1, backgroundColor:'transparent'}}>
            <Image source={BgImage} style={styles.backgrounImage}></Image>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Nueva Cuenta</Text>
            <CustomInput
            name="nombreCompleto" 
            placeholder="Nombre Completo" 
            control={control}
            rules={{required:'Ingresa tu nombre completo'}}
            />
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
            <CustomInput
            name="password" 
            placeholder="Contraseña" 
            control={control}
            secureTextEntry
            rules={{required:'La Contraseña es obligatoria', minLength:{value:6,message:'La contraseña debe tener mínimo 6 caracteres'}}}/>
            <CustomInput
            name="passwordRepeat" 
            placeholder="Confirmar contraseña" 
            control={control}
            secureTextEntry
            rules={{
                required:'Confirma tu contraseña', 
                minLength:{
                    value:6,
                    message:'La contraseña debe de ser igual al campo anterior'},
                validate: value=>value===pwd || 'Las contraseñas no coinciden',
            }}/>
            <CustomInput 
            name="city"
            placeholder="Ciudad"
            control={control}
            rules={{required:'Ingresa tu Ciudad'}}
            />
            <CustomButton 
            text="CREAR CUENTA" onPress={handleSubmit(onSingUpPress)} type="PRIMARY"/>
            <CustomButton text="Ya tengo una cuenta" type="TERTIARY"onPress={onSingInPress} />
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
    backgrounImage:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
})
export default SingUpScreen