import React, {Component} from 'react';
import {AppNavigator} from './route/homeStack';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationNativeContainer} from '@react-navigation/native';


export default function App(){
      
      return(
        <AppNavigator />
      )
    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
