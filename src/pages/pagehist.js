import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import formulario from "../style/estiloForm";
import { baseData, listarHist, addDados, rmvDados } from "../componentes/database";

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
  function bdLog() {
    //listarHist().then((resultado) => console.log(resultado))
    baseData()
  }
  return (
    <View style={pgHist.hsPage}>
        <Pressable style={formulario.frmBotaoHist} onPress={() => rmvDados()}>
          <Text style={formulario.frmTextoBotao}>Limpar pesquisa</Text>
        </Pressable>
        <Pressable style={formulario.frmBotaoHist} onPress={() => bdLog()}>
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
    textAlign: 'center',
    borderRadius: 20,
  },
})
