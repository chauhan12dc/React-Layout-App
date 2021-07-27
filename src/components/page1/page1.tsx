import React from "react";
import { Platform, SafeAreaView, StyleSheet, View,Text } from "react-native";


function Page1(){
    return(
        <SafeAreaView style = {style.wrapper}>
            <View style = {style.view1}></View>
               
            <View style = {style.view2}>
              <View style = {style.box1}></View>
              <View style = {style.view3}>
                  <View style = {style.box2}></View>
                  <View style = {style.box3}></View>
              </View>
            </View>
        </SafeAreaView>
    );
}
const style = StyleSheet.create(
    {
        wrapper:{
            flex:1,
            marginTop: Platform.OS === 'android' ? 30 : 0
      
        },
        view1:{
            width:"100%",
            height:100,
            flex:1
        },
        view2:{
            width:"100%",
            height:100,
            flex:2,
            padding:10
        },
        view3:{
            flex:1,
            justifyContent:'flex-end'
        },
        box1:{
            height:80,
            backgroundColor: 'black'
        },
        box2:{
            height:80,
            backgroundColor: 'black',
            marginBottom:10
        },
        box3:{
            height:80,
            backgroundColor: 'black'
            ,marginBottom:10
        }

    }
);

export default Page1;