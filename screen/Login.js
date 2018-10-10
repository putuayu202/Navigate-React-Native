import React, {Component} from 'react';
import {OnPress, AppRegistry, Button, View, TextInput, StyleSheet, Image, Style, Text} from 'react-native';
import {StackNavigator} from 'react-navigation'

class Login extends Component{
  
  render() {
    return (
      <View>
      <Text style={styles.instructions}>Facebook</Text>
            <Image
       style={{width: 120, height: 120,marginLeft:110}}
       source={{ uri: 'https://png.pngtree.com/svg/20170123/fb_601351.png'}}
       /> 
      <Text style>Username</Text>
      <TextInput
        style={{marginBottom: 5,height: 50, borderColor: 'black', borderWidth: 1}}
        placeholder='Insert Your Username'
        onChangeText={(text) => this.setState({text})}
      />
      <Text style>Password</Text>
      <TextInput
        style={{marginBottom: 5,height: 50, borderColor: 'black', borderWidth: 1}}
        secureTextEntry
        onChangeText={(text) => this.setState({text})}
        placeholder='Insert Your Password'
      />

      <Button 
        style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
        onPress={() => this.props.navigation.navigate('Home')} title="Home"
        title="LOGIN"
        color="#BBBBBB"
      />

      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BCFFA',
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#BBBBBB',
    marginBottom: 100,
    fontWeight: 'bold'
  },
});
