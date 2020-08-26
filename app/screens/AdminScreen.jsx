import React, { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { useEffect } from "react";

import AdminCard from "../components/Admin/AdminCard";

const AdminScreen = ({ admins }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <ActivityIndicator
      style={[
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
      size={"large"}
      color="red"
    />
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={admins}
        renderItem={({ item }) => (
          <AdminCard
            uri={item.uri}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        )}
        keyExtractor={(item) => item.id}
        initialNumToRender={8}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setIsFetching(true);
              setTimeout(() => {
                setIsFetching(false);
              }, 3000);
            }}
            title="Pull to refresh"
            tintColor="red"
            titleColor="red"
            colors={"red"}
            refreshing={isFetching}
          />
        }
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
