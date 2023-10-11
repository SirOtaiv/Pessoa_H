import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import formulario from "../style/estiloForm";
import { baseData, listarHist, addDados, rmvDados } from "../componentes/database";

export default function Pagehist() {
  const [histLista, setHistLista] = useState([]);
  
  //Carregar a lista de historico
  useEffect(() => bdList())

  //Funcao para fazer o SELECT, e devolver o componente em lista
  function bdList() {
    listarHist().then((resultado) => {
      const lista = resultado._array
      const histo = new Array(resultado.length).fill(null).map((_,index) => <Historico nome={lista[index].nome} peso={lista[index].peso} altura={lista[index].altura} imc={lista[index].imc} key={index}/>)
      setHistLista(histo)
    })
  }

  //Componente da lista
  function Historico(props) {
    return (
      <View style={pgHist.hsBloco}>
      <Text style={pgHist.hsItem}>{props.nome}</Text>
      <Text style={pgHist.hsItem}>Peso: {props.peso}</Text>
      <Text style={pgHist.hsItem}>Altura: {props.altura}</Text>
      <Text style={pgHist.hsItem}>IMC: {props.imc}</Text>
      </View>
    )
  }

  return (
    <View style={pgHist.hsPage}>
        <Pressable style={formulario.frmBotaoHist} onPress={() => rmvDados()}>
          <Text style={formulario.frmTextoBotao}>Limpar pesquisa</Text>
        </Pressable>
        <ScrollView>
          <View style={pgHist.hsList}>
            {histLista}
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
  hsBloco: {
    marginTop: 10,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
    backgroundColor: '#dbe1d9',
    borderRadius: 20
  },
  hsItem: {
    fontSize: 20,
    marginTop: 5,
    width: '80%',
    textAlign: 'center'
  },
})