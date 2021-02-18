import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View,Platform } from 'react-native';

import {Focus} from "./src/features/Focus"
import {FocusHistory} from "./src/features/FocusHistory"
import {Timer} from "./src/features/Timer"
import {spacing} from "./src/utils/sizes"
import {colors} from "./src/utils/colors"

const STATUS = {
  COMPLETE:1,
  CANCELLED:2
}


export default function App() {

  const [focusSubject ,setFocusSubject]=useState("");
  const [focusHistory,setFocusHistory]=useState([]);

  const addFocusSubjectWithStatus = (subject,status)=>{
    setFocusHistory(previousHistory=>[...previousHistory,{subject,status}])
  }
  const onClear=()=>{
    setFocusHistory([]);
  }

  return (
    <View style={styles.container}>
     {focusSubject ? 
     <Timer clearSubject={()=>{
      addFocusSubjectWithStatus(focusSubject,STATUS.CANCELLED)
      setFocusSubject()}} focusSubject={focusSubject} onTimerEnd={()=>{
      addFocusSubjectWithStatus(focusSubject,STATUS.COMPLETE)
      setFocusSubject("");
     }}/>:
     <>
      <Focus addSubject={setFocusSubject}/>
      <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
     </>
     }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:"center",
    alignItems:"center",
    paddingTop:Platform.OS==="ios"?spacing.xl:spacing.xxl,
    backgroundColor:colors.secondary,
  },
});
