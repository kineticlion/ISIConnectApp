import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import EditProfile from "./app/components/Profile/EditProfile";
import EditProfileButton from "./app/components/Profile/EditProfileButton";
import configureStore from "./app/store/store";
import { userReceived, userLoaded, loadUser } from "./app/store/user";
import { Provider } from "react-redux";
import { View, Button } from "react-native";

const store = configureStore();

const Stack = createStackNavigator();

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
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              headerRight: () => {
                return (
                  <View style={{ marginRight: 30 }}>
                    <EditProfileButton />
                  </View>
                );
              },
            }}
          />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
