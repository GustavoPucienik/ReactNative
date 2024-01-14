import react from "react";
import { ScrollView, StyleSheet, Dimensions, View, FlatList } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";

const width = Dimensions.get("screen").width;

export default function Cesta({topo, detalhes, itens}){
  return <ScrollView>
  
  <FlatList
      data={itens.lista}
      renderItem={Item} 
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo}/>
          <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>
        </>
      }}
    />

    
  </ScrollView>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
