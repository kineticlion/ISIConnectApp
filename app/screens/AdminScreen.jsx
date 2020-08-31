import React, { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Modal, Portal, Provider, Text, Button } from "react-native-paper";

import AdminCard from "../components/Admin/AdminCard";
import Api from "../api/Api";
import config from "../../config";
const AdminScreen = ({ admins, removeAdmin, fetchAdmins, saveAdmins }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [adminDeleted, setAdminDeleted] = useState(false);
  const fetchAdminsFromServer = async () => {
    const adminsData = await Api.fetchUsersByType(2);
    saveAdmins(adminsData);
  };

  useEffect(() => {
    fetchAdmins();
    fetchAdminsFromServer();
    setIsLoading(false);
    if (adminDeleted) setAdminDeleted(false);
  }, [adminDeleted]);

  const getUri = (uri) => {
    if (uri === "undefined" || uri === "null") {
      return config.images.profile.uri;
    }
    return uri;
  };

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
            adminDeleted={setAdminDeleted}
            id={item.id}
            uri={getUri(item.uri)}
            firstName={item.f_name}
            lastName={item.l_name}
            displayCard={setModalVisible}
            isCardVisible={modalVisible}
            removeAdmin={removeAdmin}
            userType={item.u_type}
            phone={item.phone}
            email={item.email}
            zip={item.zip}
          />
        )}
        keyExtractor={(item) => item.id}
        initialNumToRender={8}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setIsFetching(true);
              setTimeout(async () => {
                await fetchAdminsFromServer();
                setIsFetching(false);
              }, 500);
            }}
            title="Pull to refresh"
            tintColor="red"
            titleColor="#FF0000"
            colors={["#FF0000"]}
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

const mapDispatchToProps = (dispatch) => ({
  fetchAdmins: () =>
    dispatch({
      type: "admin/adminsRequested",
    }),
  saveAdmins: (data) => {
    dispatch({
      type: "admin/adminsReceived",
      payload: {
        data,
      },
    });
  },
  removeAdmin: (id) =>
    dispatch({
      type: "admin/adminRemoved",
      payload: {
        id,
      },
    }),
});

const styles = StyleSheet.create({
  container: {
    marginTop: "21%",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
