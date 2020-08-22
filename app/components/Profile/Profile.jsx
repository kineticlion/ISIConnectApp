import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { pickImage, getCameraRollPermission } from "../../utils/device";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

const Profile = (props) => {
  const { uri, firstName, lastName, phone, email, zipcode, id, type } = props;

  const imageURI = { uri: "https://i.ibb.co/xmZGsky/portrait.jpg" };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image source={uri ? uri : imageURI} size={130} />
          <View
            style={{
              margin: 20,
              width: "60%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Title>{firstName}</Title>
            <Title>{lastName}</Title>
            <Caption>{id}</Caption>
            <Caption>{type}</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="email" size={20} color="black" />
            <Text style={styles.infoText}>{email}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" size={20} color="black" />
            <Text style={styles.infoText}>{phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker" size={20} color="black" />
            <Text style={styles.infoText}>{zipcode}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    uri: state.entities.user.data.uri,
    firstName: state.entities.user.data.firstName,
    lastName: state.entities.user.data.lastName,
    id: state.entities.user.data.id,
    phone: state.entities.user.data.phone,
    type: state.entities.user.data.type,
    zipcode: state.entities.user.data.zipcode,
    email: state.entities.user.data.email,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveuri: (uri) => dispatch({ type: "user/uriReceived", payload: { uri } }),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-around",
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
