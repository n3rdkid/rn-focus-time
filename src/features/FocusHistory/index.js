import React from "react";

import {View,StyleSheet,SafeAreaView,FlatList,Text} from "react-native"

import {fontSize,fontSizes,spacing} from "../../utils/sizes";
import {RoundedButton} from "../../components/RoundedButton"

const renderHistoryItem = ({item,index})=>{
    return <Text style={styles.title}>{item.subject}</Text>
}

export const FocusHistory =({focusHistory,onClear})=>{
    const clearHistory=()=>{
        onClear();
    };

    return <>
    <SafeAreaView style={{flex:1}}>
        {focusHistory.length>0 &&
        <><Text style={{fontSize:fontSizes.xxl}}>Tasks you've focused on</Text>
        <FlatList 
            style={{flex:1}}
            contentContainerStyle={{flex:1,alignItems:"center"}}
            data={focusHistory}
            keyExtractor={(item,idx)=>item.subject+idx}
            renderItem={renderHistoryItem}
        />
            <View style={styles.clearContainer}>
        <RoundedButton size={75} title="Clear" onPress={clearHistory}/>
    </View>
        </>

     }
    </SafeAreaView> 

    </>
}

const styles=StyleSheet.create({
    historyItem:(status)=>({
        color: status>1?'red': 'green',
        fontSize:fontSizes.xl
    }),
    title:{
        fontSize:fontSizes.xl
    },
    clearContainer:{
        alignItems:"center",
        padding:spacing.md

    }
})