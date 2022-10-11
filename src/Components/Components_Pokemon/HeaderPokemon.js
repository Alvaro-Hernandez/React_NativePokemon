import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import getColorByPokemonType from "../../Utils/getColorByPokemonType";

export default function HeaderPokemon(props) {
  const {name, id, image, type} = props;
  const color = getColorByPokemonType(type);
  //Con este console podemos ver el color hexadecimal por el tipo de pokemon 
  console.log(color);
  
  //Con este console podemos ver todos los parametros que estamos esperando 
  console.log(props);
  const bgStyle = [{backgroundColor: color, ...styles.bgHeader}]

  return (
    <>
        <View style={bgStyle}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.number}>#{`${id}`.padStart(3, 0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <Image source={{uri:image}} style={styles.image}/>
            </View>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

    bgHeader:{
        width: '100%',
        height: 500,
        position: 'absolute',
        borderBottomRightRadius: '90%',
        borderBottomLeftRadius: '90%',
    },

    content:{
        marginHorizontal:20,
        marginTop:30
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingTop:20
    },

    name:{
        color: "#F4F6F7",
        fontWeight: "bold",
        fontSize: 30,
        textTransform: 'capitalize',
    },

    number:{
        color: "#F4F6F7",
        fontWeight: "bold",
        fontSize: 30,
    },

    contentImg:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top:30
    },

    image: {
        width:350,
        height:350
    }

});
