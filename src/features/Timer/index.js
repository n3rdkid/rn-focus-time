import React,{useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import {Countdown} from "../../components/Countdown"
import { RoundedButton } from "../../components/RoundedButton";
import {useKeepAwake} from "expo-keep-awake";
import { ProgressBar } from "react-native-paper";
export const Timer = ({focusSubject})=>{
    useKeepAwake();
    const [isStarted,setIsStarted]=useState(false)
    const [progress,setProgess]=useState(1)
   
    const onProgress=(progress)=>{
      setProgess(progress);
    }
   
   return <View styles={styles.container}>
          <View style={styles.countdown}>
            <Countdown onProgress={onProgress} isPaused={!isStarted}/>
          </View>
          <View style={{ paddingTop: spacing.xxxl }}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
          </View>
          <View style={{paddingTop:spacing.xxl}}>
            <ProgressBar style={styles.progressBar} progress={progress}  color={colors.primary}/>
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
      fontSize:fontSizes.xxl,
        color:colors.primary,
        textAlign:'center'
    },
    task:{
      fontSize:fontSizes.xl,
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
    },
    progressBar:{
      height:16,
      borderRadius:8
    }
})