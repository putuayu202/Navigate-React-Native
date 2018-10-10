import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './screen/Login';
import Home from './screen/Home';
import {StackNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>

      );
  }
}

const AppStackNavigator = new StackNavigator({
  Login :{screen: Login},
  Home :{screen: Home},
})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  }
})