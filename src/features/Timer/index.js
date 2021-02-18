import React,{useState} from "react";
import {StyleSheet, Text, View,Vibration,Platform} from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import {Countdown} from "../../components/Countdown"
import { RoundedButton } from "../../components/RoundedButton";
import {useKeepAwake} from "expo-keep-awake";
import { ProgressBar } from "react-native-paper";
import {Timing} from "../Timing"
export const Timer = ({focusSubject,onTimerEnd,clearSubject})=>{
    useKeepAwake();
    const [minutes,setMinutes]=useState(.1);
    const [isStarted,setIsStarted]=useState(false)
    const [progress,setProgess]=useState(1)
   
    const onProgress=(progress)=>{
      setProgess(progress);
    }

    const onEnd = ()=>{
      vibrate();
      setMinutes(1);
      setProgess(1);
      setIsStarted(false);
      onTimerEnd();
    }
    const vibrate = ()=>{
      if(Platform.OS==="ios")
      {
        const interval= setInterval(()=>Vibration.vibrate
        (),1000);
        setTimeout(()=>clearInterval(interval),3000)
      }else{
        Vibration.vibrate(3000);
      }
    }
    const changeTime=(min)=>{
      setProgess(1);
      setMinutes(min);
      setIsStarted(false);
    }
   
   return <View styles={styles.container}>
          <View style={styles.countdown}>
            <Countdown onEnd={onEnd} minutes={minutes} onProgress={onProgress} isPaused={!isStarted}/>
          </View>
          <View style={{ paddingTop: spacing.xxxl }}>
            <Text style={styles.title}>Focusing on</Text>
            <Text style={styles.task}>{focusSubject}</Text>
          </View>
          <View style={{paddingTop:spacing.xxl}}>
            <ProgressBar style={styles.progressBar} progress={progress}  color={colors.primary}/>
          </View>
          <View style={styles.buttonWrapper}>
            <Timing onChangeTime={changeTime}/>
          </View>
          <View style={styles.buttonWrapper}>
            <RoundedButton title={isStarted?"Stop":"Start"} fontSize={"md"} size={75} onPress={()=>setIsStarted(!isStarted)}/>
          </View>
          <View style={styles.clearSubject}>
            <RoundedButton title={"-"} fontSize={"md"} size={75} onPress={()=>clearSubject()}/>
          </View>
        </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:spacing.xxl
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
        flexDirection:'row',
        paddingTop:spacing.xxxl,
        alignItems:"center",
        justifyContent:"center"
    },
    progressBar:{
      height:16,
      borderRadius:8
    },
    clearSubject:{
      paddingBottom:25,
      paddingLeft:25
    }
})