import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

function Page5() {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style = {styles.view1}>
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
        marginTop:40
    },
    view2:{
        justifyContent:'flex-end',
        flex:1
        
    },
    box1:{
        width : "100%",
        height : 100,
        backgroundColor:'black',
        marginTop:10
    },
    box2:{
        width:80,
        height:80,
        alignSelf:'flex-end'
    }
});



export default Page5;
