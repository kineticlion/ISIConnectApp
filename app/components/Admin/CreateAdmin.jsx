import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Caption, TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";

import {
  pickImage,
  getCameraRollPermission,
  asyncAlert,
} from "../../utils/device";
import { useIsMount } from "../../utils/component";
import Api from "../../api/Api";
import Config from "../../../config";

const URI = "https://i.ibb.co/GpmHSDd/avatar.jpg";

const CreateAdmin = ({ addAdmin, navigation }) => {
  const [formFirstName, setFirstName] = useState("");
  const [formLastName, setLastName] = useState("");
  const [formPhone, setPhone] = useState(null);
  const [formZipcode, setZipcode] = useState(null);
  const [formEmail, setEmail] = useState("");
  const [formUpdated, setFormUpdated] = useState(false);
  const [formUsername, setUsername] = useState("");
  const [formPassword, setPassword] = useState("");
  const [imageURI, setImageUri] = useState(URI);
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) return;
    if (formUpdated) return;
    if (
      !formLastName ||
      !formFirstName ||
      !formUsername ||
      !formPassword ||
      !formEmail
    )
      return;
    setFormUpdated(true);
  }, [formFirstName, formLastName, formEmail, formUsername, formPassword]);

  const handleImage = async () => {
    const permission = getCameraRollPermission();
    if (!permission) return;
    const { uri } = await pickImage();
    if (uri) setImageUri(uri);
  };

  const handleSubmit = async () => {
    await addAdmin(imageURI, formFirstName, formLastName);
    await asyncAlert("Admin", "Admin successfully created.");
    navigation.goBack();
  };

  const handleInsert = async () => {
    await Api.insert(
      formFirstName,
      formLastName,
      formEmail,
      formZipcode,
      formUsername,
      formPassword,
      Config.userTypes.admin,
      formPhone
    );
    await asyncAlert("Admin", "Admin Created Successfully");
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <View style={styles.imageSection}>
        <TouchableOpacity onPress={handleImage}>
          <Avatar.Image
            source={{ uri: imageURI }}
            size={200}
            style={{ backgroundColor: "transparent" }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          mode="outlined"
          placeholder="First Name"
          value={formFirstName}
          onChangeText={(formFirstName) => setFirstName(formFirstName)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          placeholder="Last Name"
          value={formLastName}
          onChangeText={(formLastName) => setLastName(formLastName)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          placeholder="Phone"
          value={formPhone}
          onChangeText={(formPhone) => setPhone(formPhone)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={formEmail}
          onChangeText={(formEmail) => setEmail(formEmail)}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          placeholder="Zipcode"
          value={formZipcode}
          onChangeText={(formZipcode) => setZipcode(formZipcode)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          placeholder="Username"
          value={formUsername}
          onChangeText={(formUsername) => setUsername(formUsername)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          placeholder="Password"
          value={formPassword}
          onChangeText={(formPassword) => setPassword(formPassword)}
          style={styles.input}
        />
      </View>
      {/*
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
      */}
      <View style={{ alignItems: "center" }}>
        <Button
          dark={true}
          style={styles.saveBtn}
          color="red"
          mode="contained"
          disabled={!formUpdated}
          onPress={handleInsert}
        >
          Save
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    votes: state.entities.vote,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addAdmin: (uri, firstName, lastName) =>
    dispatch({
      type: "admin/adminCreated",
      payload: { id: Date.now(), uri, firstName, lastName },
    }),
  //   updateUser: (firstName, lastName, phone, zipcode) =>
  //     dispatch({
  //       type: "user/userUpdated",
  //       payload: { firstName, lastName, phone, zipcode },
  //     }),
  //   saveuri: (uri) => dispatch({ type: "user/uriReceived", payload: { uri } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "10%",
    justifyContent: "center",
  },
  imageSection: {
    alignItems: "center",
    marginTop: "20%",
  },
  input: {
    marginTop: "2%",
    height: 50,
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
