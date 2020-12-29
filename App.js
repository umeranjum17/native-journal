import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieList from "./Components/MovieList";
import Details from "./Components/Details";

const Stack = createStackNavigator();

export default function App() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="list" headerMode="none">
        <Stack.Screen
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
          name="details"
          component={Details}
        ></Stack.Screen>
        <Stack.Screen name="list" component={MovieList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
