import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsAPI } from "../Api/Pokemon";
import HeaderPokemon from "../Components/Components_Pokemon/HeaderPokemon";
import TypePokemon from "../Components/Components_Pokemon/TypePokemon";
import StatsPokemos from "../Components/Components_Pokemon/StatsPokemos";

export default function PokemosScreen(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Ionicons
          name="arrow-left"
          color="tomato"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsAPI(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <HeaderPokemon
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <TypePokemon types={pokemon.types} />
      <StatsPokemos stats={pokemon.stats} />
    </ScrollView>
  );
}
