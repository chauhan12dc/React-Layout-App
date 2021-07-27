import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

function Page4() {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style = {styles.view1}>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
        <View style = { styles.box1}></View>
      </View>
      <View style={styles.view2}>
        <View style = { [styles.box1,styles.box2]}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    wrapper:{
        flex: 1,
        marginTop: Platform.OS === "android" ? 30 : 0,
        padding:10,
        
    },
    view1:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:40
    },
    view2:{
        justifyContent:'flex-end',
        flex:1
        
    },
    box1:{
        width : 120,
        height : 120,
        backgroundColor:'black',
        margin:5
    },
    box2:{
        width:80,
        height:80,
        alignSelf:'flex-end'
    }
});



export default Page4;
