import React from "react";
import { View, Text } from "react-native";
import titulo from "../style/estiloTitulo"; 

export default function Title(){
    return(
        <View style={titulo.caixaMenu}>
            <Text style={titulo.menu}>PESSOA H</Text>
        </View>
    );
}