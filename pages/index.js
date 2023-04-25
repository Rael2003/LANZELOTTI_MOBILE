import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <View style={styles.button}>
        <Button title="Sou Cliente" color="#E89EC3" accessibilityLabel="Botão sou cliente" />
      </View>
        <Button style={styles.button} title="Sou Administrador" color="#E89EC3" accessibilityLabel="Botão Sou Administrador"/>
      
      
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
  }

});
