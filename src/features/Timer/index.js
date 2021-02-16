import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

export const Timer = ({focusSubject})=>{

    return <View styles={styles.container}>
        <View>
            <Text style={styles.title}>Focusing on</Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        color:colors.primary,
        textAlign:'center'
    },
    task:{
        marginTop:spacing.md,
        color:colors.black,
        fontWeight:"bold",
        textAlign:"center"
    }
})