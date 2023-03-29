import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import formulario from "../style/estiloForm";

export default function Pagehist({ route }) {
  const usuario = route.params
  const [pessoa, setPessoa] = useState(usuario.user.nome);

  function alteraNome() {
    setPessoa('Pessoa')
    alert(pessoa)
  }
  return (
    <View style={pgHist.hsPage}>
        <Pressable style={formulario.frmBotaoHist} onPress={() => alert(pessoa)}>
          <Text style={formulario.frmTextoBotao}>Nome: {usuario.user.nome}</Text>
        </Pressable>
        <ScrollView>  
          <View style={pgHist.hsList}>
            <Text>mdaiwldnlawndlanwdlanwduianwduoi\awbduia</Text>
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
})
