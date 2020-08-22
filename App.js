import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import EditProfile from "./app/components/Profile/EditProfile";
import EditProfileButton from "./app/components/Profile/EditProfileButton";
import configureStore from "./app/store/store";
import { Provider } from "react-redux";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import CreateVoteButton from "./app/components/Vote/CreateVoteButton";
import CreateVote from "./app/components/Vote/CreateVote";
import VotingScreen from "./app/screens/VotingScreen";
const store = configureStore();
console.log("STORE VALUE", store.getState());
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
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({
              title: !route.state
                ? "Profile"
                : route.state.routeNames[route.state.index],
              headerRight: () => {
                let headerTitle = !route.state
                  ? "Profile"
                  : route.state.routeNames[route.state.index];
                switch (headerTitle) {
                  case "Profile":
                    return (
                      <View style={{ marginRight: 40 }}>
                        <EditProfileButton />
                      </View>
                    );
                  case "Vote":
                    return (
                      <View style={{ marginRight: 40 }}>
                        <CreateVoteButton />
                      </View>
                    );
                }
              },
            })}
          />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="Create Vote" component={CreateVote} />
          <Stack.Screen name="Voting Screen" component={VotingScreen} />
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
