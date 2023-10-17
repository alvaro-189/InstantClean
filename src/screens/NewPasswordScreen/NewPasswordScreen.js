import React, { useState } from "react";
import { View,Text , StyleSheet, useWindowDimensions, ScrollView} from "react-native"

import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native"
import { useForm } from "react-hook-form";
const NewPasswordScreen=()=>{

    const [code, setCode]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const {control,handleSubmit,formState:{errors}}=useForm();
    const navigation=useNavigation();
    const onSubmitPress=(data)=>{
        console.log(data);
        navigation.navigate("Home")
    }

    const onSingInPress=()=>{

        navigation.navigate("SingIn")
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reestablece tu contraseña</Text>

            <CustomInput 
            name="code"
            placeholder="Código" 
            control={control}
            
            rules={{required:'La Contraseña es obligatoria', minLength:{value:6, message:'La contraseña debe tener mínimo 6 caracteres'}}}/>
            <CustomInput
            name="password" 
            placeholder="Nueva Contraseña" 
            control={control}
            rules={{required:'La Contraseña es obligatoria', minLength:{value:6, message:'La contraseña debe tener mínimo 6 caracteres'}}}
            secureTextEntry={true}
            />
            <CustomButton text="ESTABLECER" onPress={handleSubmit(onSubmitPress)} type="PRIMARY"/>
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
