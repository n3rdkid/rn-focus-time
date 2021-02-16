import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Focus} from "./src/features/focus"

export default function App() {
  // const [focusSubject,setFocusSubjet]=useState(null);

  return (
    <View style={styles.container}>
      <Focus/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: '#252250',
  },
});
