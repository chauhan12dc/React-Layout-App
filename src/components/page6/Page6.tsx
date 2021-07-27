import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

function Page6() {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style = {styles.view1}>
        <View style = { styles.box1}></View>
       
      </View>
      <View style={styles.view2}>
        <View style = { [styles.box1,styles.box2]}></View>
        <View style = { [styles.box1,styles.box2]}></View>
        <View style = { [styles.box1,styles.box2]}></View>
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
        marginTop:40,
        flex:3
    },
    view2:{
        flexDirection:'row',
        marginTop:20,
        padding:20,
        backgroundColor:'black'
        
        
    },
    box1:{
        width : "100%",
        height : "100%",
        backgroundColor:'black',
        marginTop:10
    },
    box2:{
        width:70,
        height:70,
        marginRight:22 ,
        backgroundColor:"#ededed"
    }
});



export default Page6;
