import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { getPokemonDetailsAPI} from '../Api/Pokemon';

export default function PokemosScreen(props) {
  const {route:{params}, navigation} = props;
  console.log(params.id);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async ()=>{
      try{
        const response = await getPokemonDetailsAPI(params.id);
        setPokemon(response);
      }
      catch(error){
        navigation.goBack();
      }
    })()

  }, [params]);

  if(!pokemon) return null;

  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  )
}