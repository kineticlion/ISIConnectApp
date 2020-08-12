import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Profile from "../Profile/Profile";
export default Dashboard = ({ navigation, route }) => {
  return <Profile></Profile>;
};

const styles = StyleSheet.create({
  header: {
    color: "#1d1d1d",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
