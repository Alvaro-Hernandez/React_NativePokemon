import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatsPokemos(props) {
  const { stats } = props;

  //console.log(stats);
  const barStyle = (number) => {
    let bgColorNumber;
    if (number <= 25){
      bgColorNumber = "#F33704";
    }
    else if (number > 25 && number <50){
      bgColorNumber = "#F08700";
    }
    else if (number >=50 && number <75){
      bgColorNumber = "#2E86C1";
    }
    else if (number >=75){
      bgColorNumber = "#00F304";
    }

    return {
      backgroundColor:bgColorNumber,
      width: `${number}%`
    }
  }

  return (
    <View style={style.content}>
      <Text style={style.title}>Base Stats</Text>
      {stats.map((item) => (
        <View key={item.stat.url} style={style.block}>
          <View style={style.blockTitle}>
            <Text style={style.statName}>{item.stat.name}</Text>
          </View>
          <View style= {style.blockInfo}>
            <Text style={style.number}>{item.base_stat}</Text>
            <View style={style.bgBar}>
            <View style={[style.secondBar, barStyle(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom:40,
    marginLeft: "8%"
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#E74C3C",
    paddingBottom: 6,
  },

  block: {
    flexDirection: "row",
    paddingVertical: 6,
  },

  blockTitle: {
    width: "30%",
  },

  statName:{
    textTransform:"capitalize",
    fontSize: 18,
    color: "#212F3D",
  },
  
  blockInfo:{
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },

  number:{
    width: "15%",
    fontSize:16
  },

  bgBar:{
    backgroundColor:"#dedede",
    width:"70%",
    height:20,
    borderRadius:20,
    overflow: "hidden"
  },

  secondBar:{
    // backgroundColor:"tomato",
    // width:"50%",
    height:20,
    borderRadius:20
  },


});
