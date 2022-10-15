import React from "react";
import { StyleSheet, View, Text } from "react-native";
import getColorByPokemonType from "../../Utils/getColorByPokemonType";

export default function TypePokemon(props) {
  const { types } = props;
  //console.log(types);

  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.url}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.text}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: -15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },

  text:{
    textTransform: 'capitalize',
    color: '#FDFEFE',
    fontSize: 18,
    fontWeight: 'italic',
  }
});
