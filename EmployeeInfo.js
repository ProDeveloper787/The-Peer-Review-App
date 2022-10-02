import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default class EmployeeInfo extends Component {
  render() {
    return (
      // <View
      //     style={{
      //         flex: 1,
      //         justifyContent: "center",
      //         alignItems: "center"
      //     }}>
      //     <Text>Employee Information</Text>
      // </View>
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Employee Information</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 container:{
   flex:1
 },
 appTitle:{
   fontWeight:"bold"
 },
 appTitleTextContainer:{
   flex:0.5
 },
 appTitleText:{
   color:"black"
 } 
});
