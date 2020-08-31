import { useRef, useEffect } from "react";
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import EditProfileButton from "../components/Profile/EditProfileButton";
import CreateVoteButton from "../components/Vote/CreateVoteButton";
import CreateAdminButton from "../components/Admin/CreateAdminButton";
import Dashboard from "../components/Dashboard/Dashboard";
import Logout from "../components/Logout/Logout";
import VotingScreen from "../screens/VotingScreen";
import AdminScreen from "../screens/AdminScreen";
import FeedbackScreen from "../screens/FeedbackScreen";

export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export const generateTabScreens = (userType) => {
  const profileScreen = { id: 1, name: "Profile", component: Dashboard };
  const adminScreen = { id: 2, name: "Admin", component: AdminScreen };
  const voteScreen = { id: 3, name: "Vote", component: VotingScreen };
  const feedbackScreen = { id: 4, name: "Feedback", component: FeedbackScreen };
  const logoutScreen = { id: 5, name: "Logout", component: Logout };

  if (userType === "Super Admin") {
    return [
      profileScreen,
      adminScreen,
      voteScreen,
      feedbackScreen,
      logoutScreen,
    ];
  }
  if (userType === "Admin") {
    return [profileScreen, voteScreen, feedbackScreen, logoutScreen];
  }
  if (userType === "Student") {
    return;
  }
};

export const generateStackHeaders = (route) => {
  return {
    title: !route.state ? "Profile" : route.state.routeNames[route.state.index],
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
        case "Admin":
          return (
            <View style={{ marginRight: 40 }}>
              <CreateAdminButton />
            </View>
          );
        case "Feedback":
          return (
            <View style={{ marginRight: 40 }}>
              <CreateAdminButton />
            </View>
          );
      }
    },
  };
};
