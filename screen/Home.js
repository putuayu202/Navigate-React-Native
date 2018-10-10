import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {StackNavigator} from 'react-navigation'

export class Home extends Component {
  render() {
    return (
      <View>
      <Image
       style={{width: 120, height: 120,marginLeft:110,marginTop:30}}
       source={{ uri: 'https://lh3.googleusercontent.com/11xVPa1_LElBKIKoUc6JVh_eStVAaszzp0ajCDF15KX7HUU03u6cKKgl-T5V4Sx7dU7EWw=s132' }}
       /> 
        <Text style={styles.instructions}>WELCOME TO MY PROFILE</Text>
        <Text style={styles.nulis}>DWIKYDANOV ISWARDANU</Text>
        <Text style={styles.nulis}>XI RPL 3</Text>
        <Text style={styles.nulis}>16</Text>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25
  },
  nulis: {
  	fontSize: 18,
  	textAlign: 'center',
  	color: '#000000',
  	marginTop: 10
  }
});