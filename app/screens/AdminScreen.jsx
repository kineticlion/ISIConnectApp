import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import AdminCard from "../components/Admin/AdminCard";
import { connect } from "react-redux";

const AdminScreen = ({ admins }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={admins}
        renderItem={({ item }) => (
          <AdminCard firstName={item.firstName} lastName={item.lastName} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    admins: state.entities.admin,
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: "21%",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps)(AdminScreen);
