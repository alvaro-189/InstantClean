import React from "react";
import { View,Text,StyleSheet, Pressable} from "react-native";

const CustomButton=({onPress,text,type})=>{
return(
    <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`]]}>
        <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
)
}
const styles = StyleSheet.create({
    container:{
        //backgroundColor:'#c2cc02',
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:8,
    },
    container_PRIMARY:{
        backgroundColor:'#c2cc02',
    },
    container_TERTIARY:{
      // borderColor:'#c2cc02',
       backgroundColor:'#c3cc02',
       //borderWidth:2,
    },
    text:{
        fontWeight:'bold',
        color:'white'
    }, 
    text_SECONDARY:{
        color:'#c2cc02'
    },
    text_TERTIARY:{
       // color:'#c2cc02'
       color:'white'
    },

})
export default CustomButton;