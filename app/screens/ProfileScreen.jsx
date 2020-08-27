import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Dashboard from "../components/Dashboard/Dashboard";
import Logout from "../components/Logout/Logout";
import VotingScreen from "./VotingScreen";
import AdminScreen from "./AdminScreen";
import FeedbackScreen from "./FeedbackScreen";

const Tab = createBottomTabNavigator();

export default ProfileScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Profile":
              iconName = "ios-home";
              break;
            case "Logout":
              iconName = "ios-log-out";
              break;
            case "Vote":
              iconName = "ios-hand";
              break;
            case "Admin":
              iconName = "ios-person";
              break;
            case "Feedback":
              iconName = "md-chatboxes";
              break;
          }
          return (
            <Icon name={iconName} size={30} color={focused ? "red" : "black"} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Profile" component={Dashboard} />
      <Tab.Screen name="Admin" component={AdminScreen} />
      <Tab.Screen name="Vote" component={VotingScreen} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};
