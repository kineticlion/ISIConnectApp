import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet } from "react-native";

const AdminScreen = ({ admins }) => {
  return (
    <SafeAreaView style={style.container}>
      <Text>HI</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    admins: state.entities.admins,
  };
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
});

export default AdminScreen;
