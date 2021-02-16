import React from "react";
import {TouchableOpacity,Text,StyleSheet, TextInput} from "react-native";
import { colors } from "../../utils/colors";

export const RoundedButton=({
    style={},
    textStyle={},
    size=125,
    ...props
})=>{
    return <TouchableOpacity style={[styles(size).radius,style]} onPress={props.onPress}>
        <Text style={[styles(size).text
        ]}>{props.title}</Text>
    </TouchableOpacity>
}
const styles =(size)=> StyleSheet.create({
    radius:{
        borderRadius:size/2,
        width:size,
        height:size,
        alignItems:'center',
        alignItems: 'center',
        justifyContent: "center",
        borderColor:colors.black,
        borderWidth:2,
     },
     text:{color:colors.black,
     fontSize:size/2,

   }
})