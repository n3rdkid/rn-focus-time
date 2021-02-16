import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Focus} from "./src/features/focus"
import {colors} from "./src/utils/colors"
export default function App() {
  const [focusSubject ,setFocusSubject]=useState();

  return (
    <View style={styles.container}>
     {focusSubject ?
     <Text>Timer</Text>:
      <Focus addSubject={setFocusSubject}/>
     }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:colors.secondary,
  },
});
