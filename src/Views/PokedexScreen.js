import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { getPokemonsApi, getPokemonsDeatilsByUrlApi } from "../Api/Pokemon";
import PokemonList from "../Components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setpokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  //Co este console podemos observar la data de los pokemons
  //console.log("pokemon -------->", pokemons);
  useEffect(() => {
    //Aqui crearemos una funcion anonima del pokemon con la siguiente instancia
    (async () => {
      await loadPokemons();
    })();
    /*const loadPokemons = async() => {
      try {
        const response = await getPokemonsApi();
        console.log(response);
      }
      catch(error){
        console.error(error);
      }
    }
    return loadPokemons();*/
  }, []);

  //Esto es cuando usamos una funcion anonima el cual ocupara la respuesta de la api
  const loadPokemons = async () => {
    try {
      //Vamos a crear un for asincrono que nos permite traer la informacion uno por uno
      //pero este no trae otra la informacion sin acabar la anterior
      const response = await getPokemonsApi(nextUrl);
      //Esto me permite a mi traer la siguiente lista de Pokemon
      setNextUrl(response.next);

      const pokemonArray = [];
      //Vamos a crear un bucle para controlar la interaccion de los pokemon
      //atraves de un bucle asincrono
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonsDeatilsByUrlApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      //Aqui hacemos uso de Spread Operator
      /*El Spread Operator corresponde a un operador el cuál 
      distribuye los elementos de un arreglo u objeto, para asignarlos a 
      alguna variable/constante/función.*/

      setpokemons([...pokemons, ...pokemonArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PokemonList
      pokemons={pokemons}
      loadPokemons={loadPokemons}
      isNext={nextUrl}
    />
  );
}

//En Android, el tag SafeAreaView no funciona igual que en ios.
//StyleSheet,Platform, StatusBar
/*const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});*/
