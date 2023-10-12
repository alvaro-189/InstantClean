import React from "react";
import { View,Text,TextInput,StyleSheet} from "react-native";
import { Controller } from "react-hook-form";

const CustomInput=({control,name,placeholder,rules={},secureTextEntry})=>{
    return (
       
            <Controller 
                control={control}
                name={name}
                rules={rules}
                render={({field:{value,onChange,onBlur},fieldState:{error}})=>(
                    <>
                     {error &&(
                    <Text style={{color:'red', alignSelf:'stretch'}}>{error.message ||'Error'}</Text>)}
                    <View style={[styles.container,{borderColor:error?'red':'#e8e8e8'}]}>
                    <TextInput 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    value={value}
                    />
                    </View>
                   
                    </>
                )}
            />
        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:8,
        paddingHorizontal:10,
        marginVertical:10
    },
    input:{},
})
export default CustomInput;