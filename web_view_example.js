import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://cuckooapp.herokuapp.com/'}}
         />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})

//https://9bd25a45d8f3.ngrok.io
//https://meet.jit.si/
//https://163d4c2714ce.ngrok.io