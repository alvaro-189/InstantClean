import React from "react";
import { View,Text,FlatList } from "react-native";
import ShowPosts from "../../components/ShowPosts";

const HomeScreen =()=>{
    return(
        <View>
            {/* <Text style={{fontSize:24,alignSelf:'center'}}> Home, sweet home</Text> */}
            <FlatList 
            data={Posts}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> <ShowPosts item={item}/>}
            />
        </View>
    )
}
export default HomeScreen;