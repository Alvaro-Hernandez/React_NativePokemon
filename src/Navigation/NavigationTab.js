import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/FontAwesome5";
import AccountNavigation from "./AccountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();
// para poder llevar la practica en la version 6 el Stack se implementa solo
// Y al querer usarlo independiente por pantallas se duplica es por ello que se
// usa la propiedad screenOptions={{ headerShown: false }} en la etiqueta Tab.Navigator
export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#E74C3C",
          tabBarInactiveTintColor: "#F1C40F",
        }}
      />
      <Tab.Screen
        name="PokedexTab"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          tabBarInactiveTintColor: "#D35400",
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="user" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#F39C12",
          tabBarInactiveTintColor: "#7D3C98",
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 80,
        height: 80,
        top: -25,
      }}
    />
  );
}
