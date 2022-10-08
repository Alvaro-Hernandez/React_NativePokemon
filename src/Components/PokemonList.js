import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";
export default function PokemonList(props) {
  //Vamos hacer un Object Destructuring de los pokemon
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item}/>}
      contentContainerStyle = {styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal:5
    }
});
