import React, { useState } from "react";
import { View,Text , StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native"
import { useForm } from "react-hook-form";
const ConfirmEmailScreen=()=>{
    const [email,setEmail]=useState('');
    const [code,setCode]=useState('');
    const {height}=useWindowDimensions();
    const navigation = useNavigation();
    const {control, handleSubmit,formState:{errors}}=useForm();
    const onConfirmPress=()=>{

        navigation.navigate("Home")
    }
    const onResendPress=()=>{

    }
    const onSingInPress=()=>{

        navigation.navigate("SingIn")
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirma tu Correo</Text>

            <CustomInput placeholder="Correo Electrónico" 
            control={control}
            rules={{
                required:'El Correo electrónico es obligatorio',
                pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ingresa una dirección de correo electrónico válida',
                }
            }}
            />
            <CustomInput placeholder="Introduce el código de confirmación"
            control={control} 
            secureTextEntry={true} 
            rules={{required:'El código debe de ser de 4 caracteres', minLength:{value:6, message:'La contraseña debe tener mínimo 6 caracteres'}}}
            />

            <CustomButton text="CONFIRMAR CORREO" onPress={onConfirmPress} type="PRIMARY"/>
            <CustomButton text="Reenviar Código" onPress={onResendPress}type="TERTIARY"/>
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
export default ConfirmEmailScreen