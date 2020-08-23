import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import {
  pickImage,
  getCameraRollPermission,
  asyncAlert,
} from "../../utils/device";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect } from "react";
import { useIsMount } from "../../utils/component";
const EditProfile = (props) => {
  const {
    uri,
    firstName,
    lastName,
    phone,
    email,
    zipcode,
    saveuri,
    updateUser,
    navigation,
  } = props;

  const [formuserName, setUserName] = useState(firstName);
  const [formLastName, setLastName] = useState(lastName);
  const [formPhone, setPhone] = useState(phone);
  const [formZipcode, setZipcode] = useState(zipcode);
  const [formEmail, setEmail] = useState(email);
  const [formUpdated, setFormUpdated] = useState(false);
  const imageURI = { uri: "https://i.ibb.co/xmZGsky/portrait.jpg" };
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) return;
    if (formUpdated) return;
    setFormUpdated(true);
  }, [formuserName, formLastName, formPhone, formZipcode, formEmail]);

  const handleImage = async () => {
    const permission = getCameraRollPermission();
    if (!permission) return;
    const image = await pickImage();
    return image ? saveuri(image.uri) : null;
  };

  const handleData = async () => {
    await updateUser(
      formuserName,
      formLastName,
      formPhone,
      formEmail,
      formZipcode
    );
    await asyncAlert("Profile", "Information Saved Successfully.");
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <View style={styles.imageSection}>
        <TouchableOpacity onPress={handleImage}>
          <Avatar.Image source={uri ? uri : imageURI} size={200} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          mode="outlined"
          value={formuserName}
          onChangeText={(formuserName) => setUserName(formuserName)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          value={formLastName}
          onChangeText={(formLastName) => setLastName(formLastName)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          onChangeText={(formPhone) => setPhone(formPhone)}
          value={formPhone + ""}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          value={formEmail}
          onChangeText={(formEmail) => setEmail(formEmail)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          value={formZipcode}
          onChangeText={(formZipcode) => setZipcode(formZipcode)}
          style={styles.input}
        />
        <View style={{ alignItems: "center" }}>
          <Button
            dark={true}
            style={styles.saveBtn}
            color="red"
            mode="contained"
            onPress={handleData}
            disabled={!formUpdated}
          >
            Save
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
  updateUser: (firstName, lastName, phone, email, zipcode) =>
    dispatch({
      type: "user/userUpdated",
      payload: { firstName, lastName, phone, email, zipcode },
    }),
  saveuri: (uri) => dispatch({ type: "user/uriReceived", payload: { uri } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const styles = StyleSheet.create({
  container: {
    margin: "10%",
    justifyContent: "center",
  },
  imageSection: {
    alignItems: "center",
    marginTop: "25%",
  },
  input: {
    marginTop: 15,
  },
  infoText: {
    marginLeft: 10,
  },
  saveBtn: {
    marginTop: 30,
    height: 50,
    width: 100,
    justifyContent: "center",
  },
});
