import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View,Platform } from 'react-native';

import {Focus} from "./src/features/Focus"
import {Timer} from "./src/features/Timer"
import {spacing} from "./src/utils/sizes"
import {colors} from "./src/utils/colors"


export default function App() {

  const [focusSubject ,setFocusSubject]=useState("TIMER");

  return (
    <View style={styles.container}>
     {focusSubject ?
     <Timer focusSubject={focusSubject}/>:
      <Focus addSubject={setFocusSubject}/>
     }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:"center",
    alignItems:"center",
    paddingTop:Platform.OS==="ios"?spacing.md:spacing.lg,
    backgroundColor:colors.secondary,
  },
});
