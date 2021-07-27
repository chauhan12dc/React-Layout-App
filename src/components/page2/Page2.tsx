import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

function Page2() {
  return(
    <SafeAreaView style = {styles.wrapper}>
        <View style = {[styles.boxStyle, styles.box1]}>
            <View style = {styles.defaultContainer}>
               
            </View>
        </View>
        <View style = {[styles.boxStyle, styles.box2]}>
        <View style = {styles.defaultContainer}>
               
            </View>
        </View>
        <View style = {[styles.boxStyle,styles.box3]}>
        <View style = {styles.defaultContainer}>
               
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'column',
        paddingTop: Platform.OS === 'android' ? 25 : 0
        
    },
    boxStyle:{
        width:'100%',
        height:50,
        padding:20
    },
    box1:{      
        flex:0.6
    },
    box2:{
        flex:3
    },
    box3:{
        flex:0.6
    },
    defaultContainer:{
        flex:1,
        backgroundColor: '#ededed'
    }
});

export default Page2;
