import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import Logout from "../components/Logout/Logout";
import VotingScreen from "./VotingScreen";
import AdminScreen from "./AdminScreen";
import FeedbackScreen from "./FeedbackScreen";
import Profile from "../components/Profile/Profile";
import { getUserType } from "../../config";
import { generateTabScreens } from "../utils/component";
import { readUserId } from "../utils/storage";
import Api from "../api/Api";
import { Text, View } from "react-native";
import { useState } from "react";

const ProfileScreen = ({ route }) => {
  const userId = route.params[0].u_type;
  const [screens, setScreens] = useState(
    generateTabScreens(getUserType(userId))
  );

  const Tab = createBottomTabNavigator();

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
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component}
        />
      ))}
      {/* <Tab.Screen name="Admin" component={AdminScreen} />
      <Tab.Screen name="Vote" component={VotingScreen} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
      <Tab.Screen name="Logout" component={Logout} /> */}
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => ({
  userId: state.entities.user.data.u_type,
});

const mapDispatchToProps = (dispatch) => ({
  saveUser: (data) =>
    dispatch({
      type: "user/userReceived",
      payload: data,
    }),
  requestUser: () =>
    dispatch({
      type: "user/userRequested",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
