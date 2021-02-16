import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import {Countdown} from "../../components/Countdown"

export const Timer = ({focusSubject})=>{

    return <View styles={styles.container}>
          <View style={styles.countdown}>
            <Countdown/>
          </View>
          <View style={{ paddingTop: spacing.xxxl }}>
            <Text style={styles.title}>Focusing on:</Text>
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
    },
    countdown:{
        flex:.5,
        alignItems:"center",
        justifyContent:"center"
    }
})