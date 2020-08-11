import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Dashboard from "../components/Dashboard/Dashboard";
import Logout from "../components/Logout/Logout";

const Tab = createBottomTabNavigator();

export default DashboardScreen = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Dashboard":
              iconName = "ios-home";
              break;
            case "Logout":
              iconName = "ios-log-out";
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
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};
