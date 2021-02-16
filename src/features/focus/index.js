import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from "react-native-paper";
import {RoundedButton} from "../../components/RoundedButton"
export const Focus = ()=> {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex:1}}></TextInput>
          <RoundedButton style={{marginLeft:8}} size={50} title="+"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer:{
    flex:0.5,
    padding:16,
    justifyContent:"center",
  },
  title:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  inputContainer:{
    paddingTop:20,
    flexDirection:"row",
    alignItems:"center"

  }
});
