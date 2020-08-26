import { useRef, useEffect } from "react";
import React from "react";
import { View } from "react-native";

import EditProfileButton from "../components/Profile/EditProfileButton";
import CreateVoteButton from "../components/Vote/CreateVoteButton";
import CreateAdminButton from "../components/Admin/CreateAdminButton";

export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
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
      }
    },
  };
};
