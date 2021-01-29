import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Book from "../Components/Book";

const HomeStack = createStackNavigator();

const MainStack = () => {
    return (
        <HomeStack.Navigator
        screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name="Login" component={Login} />
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Book" component={Book} />
        </HomeStack.Navigator>
    )
}

const Navigation = () => {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
};
  
export default Navigation;