import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import formulario from "../style/estiloForm";

export default function Pagehist({ route }) {
  const usuario = route.params
  const [pessoa, setPessoa] = useState(usuario.nome);

  function log() {
    console.log(usuario)
    console.log(usuario.nome)
    console.log(usuario.altura)
    console.log(usuario.peso)
    console.log(typeof(usuario.nome))
    console.log(typeof(usuario.altura))
    console.log(typeof(usuario.peso))
  }
  return (
    <View style={pgHist.hsPage}>
        <Pressable style={formulario.frmBotaoHist} onPress={() => alert(pessoa)}>
          <Text style={formulario.frmTextoBotao}>Limpar pesquisa: {usuario.nome}</Text>
        </Pressable>
        <Pressable style={formulario.frmBotaoHist} onPress={() => log()}>
          <Text style={formulario.frmTextoBotao}>Gerar Log</Text>
        </Pressable>
        <ScrollView>  
          <View style={pgHist.hsList}>
            <Text style={pgHist.hsItem}>Usuário: {usuario.nome}</Text>
            <Text style={pgHist.hsItem}>Peso: {usuario.peso}</Text>
            <Text style={pgHist.hsItem}>Altura: {usuario.altura}</Text>
          </View>
        </ScrollView>
    </View>
  );
};

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
  hsItem: {
    fontSize: 20,
    marginTop: 5,
    width: '40%',
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 20,
  },
})
