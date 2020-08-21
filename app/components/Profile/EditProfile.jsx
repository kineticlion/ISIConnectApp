import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { pickImage, getCameraRollPermission } from "../../utils/device";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

const EditProfile = ({ uri, saveuri }) => {
  const imageURI = { uri: "https://i.ibb.co/xmZGsky/portrait.jpg" };

  const setImage = async () => {
    const permission = getCameraRollPermission();
    if (!permission) return;
    const image = await pickImage();
    return image ? saveuri(image.uri) : null;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={setImage}>
          <Avatar.Image source={uri ? uri : imageURI} size={250} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({ uri: state.entities.user.data.uri });

const mapDispatchToProps = (dispatch) => ({
  saveuri: (uri) => dispatch({ type: "user/uriReceived", payload: { uri } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  userInfoSection: {
    margin: 25,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  infoText: {
    marginLeft: 10,
  },
});
