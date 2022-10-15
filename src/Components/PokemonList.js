import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  //Vamos hacer un Object Destructuring de los pokemon
  const { pokemons, loadPokemons, isNext } = props;
  //Esta funcion me permitira cargar mas pokemon
  const loadMore = () =>{
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item}/>}
      contentContainerStyle = {styles.flatListContentContainer}
      onEndReached = {isNext && loadMore}
      onEndReachedThreshold = {0.1}
      ListFooterComponent = {
        isNext &&(
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#8001D8"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal:5
    },

    spinner:{
      marginTop:30,
      marginBottom:50,
    }
});