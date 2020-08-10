import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Dashboard = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
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
