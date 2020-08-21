import React, { useState, useEffect } from "react";
import Login from "../components/LoginScreen/LoginScreen";
import { Alert } from "react-native";
import { read, rememberUser } from "../utils/storage";
import Api from "../api/Api";
export default LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [switchValue, setSwitchValue] = useState(true);
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  useEffect(() => {
    read(setUsername, setPassword, setSwitchValue);
  }, []);

  const handleVerification = async () => {
    try {
      setSpinnerStatus(true);
      setTimeout(() => {
        rememberUser(username, password, switchValue);
        navigation.replace("Dashboard");
        setSpinnerStatus(false);
        return;
      }, 400);
      // const data = await Api.login(username, password);
      // if (data.msg === "valid user") {
      //   rememberUser(username, password, switchValue);
      //   navigation.replace("Dashboard");
      //   return;
      //displayAlert("Login Error", "Please check your Email or Password.");
    } catch (err) {
      // console.log(err);
    }
  };

  const displayAlert = (title, msg, buttons = []) => {
    return Alert.alert(title, msg);
  };

  return (
    <Login
      source={require("../assets/appimages/background.jpg")}
      spinnerEnable={true}
      spinnerVisibility={spinnerStatus}
      spinnerSize="large"
      switchValue={switchValue}
      onSwitchValueChange={() => setSwitchValue(!switchValue)}
      onPressLogin={handleVerification}
      usernameOnChangeText={(username) => setUsername(username)}
      passwordOnChangeText={(password) => setPassword(password)}
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
