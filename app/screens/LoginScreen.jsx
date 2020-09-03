import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

import Login from "../components/LoginScreen/LoginScreen";
import { read, rememberUser, readUser } from "../utils/storage";
import Api from "../api/Api";
import { asyncAlert } from "../utils/device";

export default LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [switchValue, setSwitchValue] = useState(true);
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  useEffect(() => {
    readUser(setUsername, setPassword, setSwitchValue);
  }, []);

  const handleVerification = async () => {
    try {
      setSpinnerStatus(true);
      const data = await Api.login(username, password);
      if (data === "Wrong credential") {
        await asyncAlert("Login", "Please check your username and password");
        setSpinnerStatus(false);
        return;
      }
      if (data.id) {
        rememberUser(data.id, username, password, switchValue);
        const userData = await Api.fetchUserData(data.id);
        setSpinnerStatus(false);
        navigation.replace("Profile", userData);
      }
    } catch (err) {
      const response = await asyncAlert("Login Error", "Server Error");
      if (response) return;
      setSpinnerStatus(false);
    }
  };

  return (
    <Login
      source={null}
      spinnerEnable={true}
      spinnerVisibility={spinnerStatus}
      spinnerSize="large"
      spinnerColor="red"
      switchValue={switchValue}
      onSwitchValueChange={() => setSwitchValue(!switchValue)}
      onPressLogin={handleVerification}
      usernameOnChangeText={(username) => setUsername(username.toLowerCase())}
      passwordOnChangeText={(password) => setPassword(password.toLowerCase())}
      loginButtonTextStyle={{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        paddingTop: "5%",
        textTransform: "capitalize",
      }}
      disableSettings={true}
      usernameDefaultValue={username}
      passwordDefaultValue={password}
      loginButtonBackgroundColor="#000"
    />
  );
};
