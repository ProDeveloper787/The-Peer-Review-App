import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from "./navigation/TabNavigator"

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}