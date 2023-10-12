import React, { useState } from "react";
import { View,Text , StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm,Controller} from "react-hook-form";
const SingUpScreen=()=>{

    const navigation = useNavigation();
    const {control,handleSubmit,formState:{errors},watch}=useForm();

    const pwd =watch('password');
    const registerPress=(data)=>{
        console.log(data);
        navigation.navigate("ConfirmEmail")
    }
    const onSingUpPress=()=>{

        navigation.navigate("SingIn")
    }


    return(
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
            text="CREAR CUENTA" onPress={handleSubmit(registerPress)} type="PRIMARY"/>
            <CustomButton text="Ya tengo una cuenta" type="TERTIARY"onPress={onSingUpPress} />
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
export default SingUpScreen