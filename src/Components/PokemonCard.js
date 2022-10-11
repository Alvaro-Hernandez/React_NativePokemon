import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import getColorByPokemonType from "../Utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  //Para evaluar si estamos reciebiendo las props de cada pokemon
  //Lo hacemos atraves de un console
  //console.log(props);
  //Vamos a revisar por consola los tipos de pokemon que resivimos
  //console.log(pokemon.type);

  const pokemonColor = getColorByPokemonType(pokemon.type);

  //Vamos a ver por consola los tipos de pokemon y sus colores
  //console.log(pokemonColor);

  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    //con este console podemos ver el id del pokemon que selecionamos
    //console.log(pokemon.id);
    //Con este console puedo ver todas las props de mi pokemon
    //console.log(pokemon);
    //con navigation solo podemos navegar y enviar datos planos nada de funciones
    navigation.navigate('Pokemon', {id:pokemon.id});
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
  },

  spacing: {
    flex: 1,
    padding: 5,
  },

  bgStyles: {
    flex: 1,
    borderRadius: 15,
    paddingTop: 15,
  },

  name: {
    color: "#F4F6F7",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 8,
    paddingLeft: 7,
    textTransform: "capitalize",
  },

  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#FFFFFF",
    fontSize: 15,
  },

  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 120,
    height: 120,
  },
});
