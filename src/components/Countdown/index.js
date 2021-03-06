import React,{useEffect, useState} from "react";
import {Text,StyleSheet} from "react-native";
import {fontSizes,spacing} from "../../utils/sizes"
import {colors} from "../../utils/colors"

const minutesToMilli = (min)=>min*1000 *60;
const formatTime= (time)=>time<10?`0${time}`:time;

export const Countdown=({
    minutes,
    isPaused,
    onProgress,
    onEnd
})=>{
    const [timeLeft,setTimeLeft]=useState(minutesToMilli(minutes));
    const [isEnded,setIsEnded]=useState(false)
    const countDown = ()=>{
        setMillis(time =>{
            if(time===0){
                clearInterval(interval.current)
                setIsEnded(true)
                return time;
            }
            const timeRemaining=time-1000;
            setTimeLeft(timeRemaining)
            return timeRemaining;
        })
    }
    useEffect(()=>{
        onProgress(timeLeft/minutesToMilli(minutes))
    },[timeLeft])
    const interval= React.useRef(null);
    const [millis,setMillis]=useState(minutesToMilli(minutes));

    useEffect(()=>{
        if(isEnded)
        onEnd();
    },[isEnded])

    useEffect(()=>{
        setMillis(minutesToMilli(minutes))
    },[minutes])
    useEffect(()=>{
        if(isPaused){
            return;
        }
        interval.current=setInterval(countDown,1000)
        return ()=>clearInterval(interval.current)
    },[isPaused])

    const minute = Math.floor(millis/1000/60)%60;
    const seconds = Math.floor(millis/1000)%60;
    return <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
}

const styles= StyleSheet.create({
    text: {
        fontSize: fontSizes.xxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: colors.primary,
    },
})