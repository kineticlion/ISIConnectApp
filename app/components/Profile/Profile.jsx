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
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

const _pickImage = async () => {
  let result;
  try {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // console.log(result);
      //sendImage(result.uri);
      // console.log("not cancelled");
      // sendImage();
    }
  } catch (E) {
    // console.log(E);
  }
};

// const getPermission = async () => {
//   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//   return status === "granted" ? _pickImage() : await askPermission();
// };

const Profile = ({ uri }) => {
  const imageURI = { uri: "https://i.ibb.co/xmZGsky/portrait.jpg" };

  const setImage = async () => {
    const permission = getCameraRollPermission();
    if (!permission) return;
    const image = await pickImage();
    return image ? saveuri(image.uri) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row" }}>
          <Avatar.Image source={uri ? uri : imageURI} size={120} />
          <View
            style={{
              marginLeft: 10,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Title>Sufiyan Saboowala</Title>
            <Caption>ID : {Date.now()}</Caption>
            <Caption>Super Admin</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="email" size={20} color="black" />
            <Text style={styles.infoText}>EmailId@gmail.com</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" size={20} color="black" />
            <Text style={styles.infoText}>4387259295</Text>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker" size={20} color="black" />
            <Text style={styles.infoText}>H3N2L8</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({ uri: state.entities.user.data.uri });

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default connect(mapStateToProps)(Profile);
