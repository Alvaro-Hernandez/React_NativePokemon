import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi } from "../Api/Pokemos";

export default function PokedexScreen() {

  useEffect(() => {
    //Aqui crearemos una funcion anonima del pokemon con la siguiente instancia
    //(async () => {
    //  await loadPokemons();
    //})();
    const loadPokemons = async() => {
      try {
        const response = await getPokemonsApi();
        console.log(response);
      }
      catch(error){
        console.error(error);
      }
    }
    return loadPokemons();
  }, []);

  //Esto es cuando usamos una funcion anonima el cual ocupara la respuesta de la api
  /*const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };*/

  return (
    <SafeAreaView>
      <Text>PokedexScreen</Text>
    </SafeAreaView>
  );
}
