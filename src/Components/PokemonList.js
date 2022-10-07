import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export default function PokemonList(props) {
  //Vamos hacer un Object Destructuring de los pokemon
  const { pokemons } = props;
  
  return (
    <FlatList
      data={pokemons}
      numColumns={1}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle = {styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal:5
    }
});
