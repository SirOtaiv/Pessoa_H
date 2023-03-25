import React, { useState } from "react";
import { Touchable, View, Text, StyleSheet, ScrollView } from "react-native";
import formulario from "../style/estiloForm";

export default function PageHist() {
  return (
    <View style={pgHist.hsPage}>
        <Touchable style={formulario.frmBotaoHist}>
          <Text style={formulario.frmTextoBotao}>Botao</Text>
        </Touchable>
        <ScrollView>  
          <View style={pgHist.hsList}>
            <Text>Bem vindo a segunda tela</Text>
          </View>
        </ScrollView>
    </View>
  )
}

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
