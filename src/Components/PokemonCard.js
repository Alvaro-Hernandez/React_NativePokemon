import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;
  //Para evaluar si estamos reciebiendo las props de cada pokemon
  //Lo hacemos atraves de un console
  //console.log(props);

  const goToPokemon = () => {
    console.log(`Vamos al Pokemon: ${pokemon.name}`);
    console.log(pokemon);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyle}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
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

  bgStyle: {
    backgroundColor: "#AEB6BF",
  },
  
  name:{
    color: "#F4F6F7",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 8,
  },
  number: {
    position: "absolute",
    right:10,
    top:10,
    color: "#FFFFFF",
    fontSize: 15,
  },
  
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 120,
    height: 120,
  }

});
