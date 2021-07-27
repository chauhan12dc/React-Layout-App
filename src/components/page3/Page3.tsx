import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

function Page3() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.view1}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <View style={styles.view2}>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  boxStyle: {},
  view1: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  view2: {
    flex: 2,
    padding:10,
    justifyContent:"flex-end",
    
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: '#ededed',
    margin: 10,
    alignSelf: "flex-end",
  },
  box2: {
    width: "100%",
    height: 100,
    backgroundColor: '#ededed',
  },
  box3:{
    backgroundColor: '#ededed',
    width:"100%",
    height:100,
    marginBottom:20
  },
  box4:{
    backgroundColor: '#ededed',
    width:"100%",
    height:50
  }
});

export default Page3;
