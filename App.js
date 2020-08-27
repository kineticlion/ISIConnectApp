import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { Provider } from "react-redux";

import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import EditProfile from "./app/components/Profile/EditProfile";
import CreateVote from "./app/components/Vote/CreateVote";
import VotingScreen from "./app/screens/VotingScreen";
import configureStore from "./app/store/store";
import { generateStackHeaders } from "./app/utils/component";
import CreateAdmin from "./app/components/Admin/CreateAdmin";
import FeedbackScreen from "./app/screens/FeedbackScreen";

const store = configureStore();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerTransparent: true,
            headerTintColor: "red",
            headerBackground: () => (
              <BlurView tint="dark" intensity={100} style={styles.header} />
            ),
          }}
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="FeedBackScreen" component={FeedbackScreen} />
          <Stack.Screen name="Voting Screen" component={VotingScreen} />
          <Stack.Screen name="Create Vote" component={CreateVote} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => generateStackHeaders(route)}
          />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="Create Admin" component={CreateAdmin} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    ...StyleSheet.absoluteFill,
    position: "absolute",
    backgroundColor: "black",
  },
});
