import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput, ThemeProvider} from "react-native-paper";
import {RoundedButton} from "../../components/RoundedButton"
import { colors } from '../../utils/colors';
import {fontSizes,spacing} from "../../utils/sizes"
export const Focus = ({addSubject})=> {
  const [subjectText,setSubjectText] =useState();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex:1,borderColor:colors.primary}} onSubmitEditing={({nativeEvent})=>setSubjectText(nativeEvent.text)}></TextInput>
          <RoundedButton onPress={()=>addSubject(subjectText)} style={{marginLeft:spacing.sm}} size={50} fontSize={"xxl"} title="+"/>
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
    padding:spacing.md,
    justifyContent:"center",
  },
  title:{
    color:colors.black,
    fontSize:fontSizes.xl,
    fontWeight:"bold"
  },
  inputContainer:{
    paddingTop:spacing.xl,
    flexDirection:"row",
    alignItems:"center"
  }
});
