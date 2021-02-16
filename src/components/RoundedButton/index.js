import React from "react";
import {TouchableOpacity,Text,StyleSheet, TextInput} from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes } from "../../utils/sizes";

export const RoundedButton=({
    style={},
    textStyle={},
    size=125,
    fontSize,
    ...props
})=>{
    return <TouchableOpacity style={[styles({size}).radius,style]} onPress={props.onPress}>
        <Text style={[styles({fontSize}).text
        ]}>{props.title}</Text>
    </TouchableOpacity>
}
const styles =({size,fontSize})=> StyleSheet.create({
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
     fontSize:fontSizes[`${fontSize}`],

   }
})