import React,{useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import {Countdown} from "../../components/Countdown"
import { RoundedButton } from "../../components/RoundedButton";

export const Timer = ({focusSubject})=>{
    const [isStarted,setIsStarted]=useState(false)
    return <View styles={styles.container}>
          <View style={styles.countdown}>
            <Countdown isPaused={!isStarted}/>
          </View>
          <View style={{ paddingTop: spacing.xxxl }}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <RoundedButton title={isStarted?"Stop":"Start"} fontSize={"md"} size={75} onPress={()=>setIsStarted(!isStarted)}/>
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
    },
    buttonWrapper:{
        flex:1,
        paddingTop:spacing.xxxl,
        alignItems:"center",
        justifyContent:"center"
    }
})