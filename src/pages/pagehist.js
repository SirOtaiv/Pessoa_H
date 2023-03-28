import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from "react-native";
import formulario from "../style/estiloForm";

export default function Pagehist() {
  return (
    <View style={pgHist.hsPage}>
        <Pressable style={formulario.frmBotaoHist} onPress={() => alert('TITULO DIFERENTE')}>
          <Text style={formulario.frmTextoBotao}>Botao</Text>
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
