import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Avatar, Title, Caption, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { useEffect } from "react";

import { readUserId } from "../../utils/storage";
import Api from "../../api/Api";
import { asyncAlert } from "../../utils/device";
import Config, { getUserType } from "../../../config";

const Profile = (props) => {
  const {
    uri,
    firstName,
    lastName,
    phone,
    email,
    zipcode,
    id,
    type,
    saveUser,
    requestUser,
    isLoading,
  } = props;

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userId = await readUserId();
      requestUser();
      const data = await Api.fetchUserData(userId);
      saveUser(data[0]);
    };
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    const userId = await readUserId();
    const data = await Api.fetchUserData(userId);
    saveUser(data[0]);
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  };

  return isLoading ? (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      color="red"
      size="large"
    />
  ) : (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              source={
                !uri || uri === "undefined" || uri === "null"
                  ? Config.images.profile
                  : { uri }
              }
              size={130}
            />
            <View
              style={{
                margin: 20,
                width: "50%",
                maxWidth: "50%",
              }}
            >
              <Title>
                {firstName} {lastName}
              </Title>
              <Caption>ID : {id}</Caption>
              <Caption>{getUserType(type)}</Caption>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="email" size={20} color="black" />
              <Text style={styles.infoText}>
                {!email || email === "undefined" || email === "null"
                  ? "No record found"
                  : email}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.infoText}>
                {!phone || phone === "undefined" || phone === "null"
                  ? "No record found"
                  : phone}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="map-marker" size={20} color="black" />
              <Text style={styles.infoText}>
                {!zipcode || zipcode === "undefined" || zipcode === "null"
                  ? "No record found"
                  : zipcode}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    uri: state.entities.user.data.uri,
    firstName: state.entities.user.data.f_name,
    lastName: state.entities.user.data.l_name,
    id: state.entities.user.data.id,
    phone: state.entities.user.data.phone,
    type: state.entities.user.data.u_type,
    zipcode: state.entities.user.data.zip,
    email: state.entities.user.data.email,
    isLoading: state.entities.user.loading,
  };
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    marginTop: "25%",
  },
  userInfoSection: {
    margin: 15,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  infoText: {
    marginLeft: 10,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
