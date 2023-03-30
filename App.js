import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Pressable, Modal } from 'react-native';
import formulario from './src/style/estiloForm';
import Title from './src/componentes/titulo';
import Pagehist  from './src/pages/pagehist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function Main({navigation}) {

  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [nome, setNome] = useState(null);
  const [imc, setImc] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('Você tem esse IMC:');

  function imcCalculador(){
    return setImc((peso/(altura*altura)).toFixed(2))
  }
  function validadorImc(){
    if (peso != null && altura != null) {
      imcCalculador()
      mensagemIMC(nome+', seu IMC é:')                
      setPeso(null)
      setAltura(null)
      setNome(null)
    }
    else {
      mensagemIMC('Revise seus dados')
      setImc(null)
    }
  }
  function mensagemIMC(conteudo) {
    setModalVisible(true)
    setModalText(conteudo)
  }
  function mdMessage() {
    return(
        <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <View style={styles.modalView}>
                <View style={styles.modalMsg}>
                    <Text style={styles.modalMsgTxt}>{modalText}</Text>
                    <Text style={styles.modalMsgTxtImc}>{imc}</Text>
                    <Pressable onPress={() => setModalVisible(false)} style={styles.modalMsgBtm}>
                        <Text style={styles.modalMsgBtmTxt}>Fechar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
  }
  return (
    <View style={styles.container}>
      <Title/>
            <View style={formulario.frmContext}>
                <View style={formulario.frmForm}>
                    <Text style={formulario.frmTexto}>Nome</Text>
                    <TextInput onChangeText={(valor) => setNome(valor)} value={nome} placeholder="Ex. Otavio M. Rau" keyboardType="ascii-capable" style={formulario.frmEntrada}></TextInput>
                    <Text style={formulario.frmTexto}>Altura(M)</Text>
                    <TextInput onChangeText={(valor2) => setAltura(valor2)} value={altura} placeholder="Ex. 1.47" keyboardType="numeric" style={formulario.frmEntrada}></TextInput>                
                    <Text style={formulario.frmTexto}>Peso(Kg)</Text>
                    <TextInput onChangeText={(valor3) => setPeso(valor3)} value={peso} placeholder="Ex. 86.5" keyboardType="numeric" style={formulario.frmEntrada}></TextInput>
                    <Pressable onPress={() => validadorImc()} style={formulario.frmBotao}>
                        <Text style={formulario.frmTextoBotao}>Calcular</Text>
                    </Pressable>
                    <Pressable style={formulario.frmBotao} onPress={() => navigation.navigate('Historico', {nome, altura, peso})}>
                        <Text style={formulario.frmTextoBotao}>Histórico</Text>
                    </Pressable>
                </View>
            </View>
            {mdMessage()}
        </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Main} options={{headerShown: false}}/>
        <Stack.Screen name='Historico' component={Pagehist}/>
      </Stack.Navigator>
    </NavigationContainer>
  )};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcdcdc',
      paddingTop: 60,
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000066'
    },
    modalMsg: {
        height: '30%',
        width: '90%',
        marginTop: '60%',
        borderRadius: 20,
        backgroundColor: '#dcdcdc',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#5d5d5d'
    },
    modalMsgBtm: {
        height: '25%',
        width: '50%',
        borderRadius: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalMsgTxt: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5d5d5d'
    },
    modalMsgTxtImc: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red'
    },
    modalMsgBtmTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
  });
  const pgHist = StyleSheet.create({
    hsPage: {
      flex: 1,
      height: '100%',
    },
    hsList: {
      alignItems: 'center',
      height: '100%',
      paddingTop: 10,
      backgroundColor: 'white',
    },
  });