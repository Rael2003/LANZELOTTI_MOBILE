import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <TextInput style={styles.text} placeholder = "Digite seu nome de usuário"/>
      <TextInput style={styles.text} placeholder = "Digite sua senha"/>

      <Button style={styles.button} title="Login" color="#E89EC3" accessibilityLabel="Botão Login"/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F2E0E6',
  },
  text:{
    backgroundColor:"white",
    width:300,
    marginBottom:15,
    borderRadius:15,
    color:"#666",
  },
  button:{
    backgroundColor:'#E89EC3',
    marginBottom: 15,
    borderRadius:100,
    color:'#E89EC3',

  },
  logo: {
    height: 40,
    width: 120,
    marginBottom: 30,
    position: "absolute",top: -150,
  }

});
