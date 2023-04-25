import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, ScrollView } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <ScrollView horizontal={true} style={styles.scroll}>
          <Image style={styles.imagem} source={require('../assets/frasco.png')} />
         
          <Image style={styles.imagem} source={require('../assets/massagem.png')} />

          <Image style={styles.imagem} source={require('../assets/rosto.png')} />
      </ScrollView>
      <View style={styles.divisao}>

        <Image style={styles.imagem} source={require('../assets/aboutUs.png')} />
        <Text style={styles.title}>
          Sobre nós
        </Text>

        <Text style={styles.paragraph}>
          Olá, meu nome é Giulia Lanzelotti e sou uma uma profissional de estética e cosmetologia formada pelo Centro Universitário Senac.
Ofereço serviços de estética como limpeza de pele, drenagem linfática, massagem relaxanto e entre outros.
        </Text>

        <Button style={styles.button} title="Serviços" color="#E89EC3" accessibilityLabel="Botão Serviços"/>
      </View>
      
      <Text style={styles.title}> 
        Veja como é fácil fazer uma compra!
      </Text>

      <Image style={styles.imagem} source={require('../assets/form.png')} />

     /*<Text style={styles.passo}>
            1
          </Text>
          <Text style={styles.paragraph}>
            Escolha dos serviços mediante a conferência do catálogo
          </Text>*/
    </View>
  );
}

const styles = StyleSheet.create({

  scroll:{
    display: "flex",
    
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F2E0E6',
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    color:"black",
    marginBottom:10,
  },
  paragraph:{
    color:"#666",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width:150,
  },
  divisao:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFF',
    marginBottom:15,
  },
  imagem:{
    height: 101,
    width: 154,
    marginBottom: 30,
    marginRight:30,
    
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
    marginBottom: 0,
    position: "absolute",top: -100,
  },
  passo:{
    height:20,
    width: 20,
    backgroundColor:"#FFF",
    borderRadius:15,
  },

});