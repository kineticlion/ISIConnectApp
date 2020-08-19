import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import configureStore from "./app/store/store";
import { userReceived, userLoaded } from "./app/store/user";
import { Provider } from "react-redux";

const store = configureStore();

const Stack = createStackNavigator();

store.dispatch(userLoaded({ id: 1 }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
