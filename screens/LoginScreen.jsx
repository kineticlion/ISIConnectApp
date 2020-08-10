import React, { useState } from "react";
import Login from "../components/LoginScreen/LoginScreen";
import { Image, Alert } from "react-native";
export default LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [switchValue, setSwitchValue] = useState(true);
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  const handleSendRequest = async () => {
    const response = await fetch(
      `http://connect-isi.herokuapp.com/isvaliduser`,
      {
        method: "POST",
        body: JSON.stringify({
          email: username.toLocaleLowerCase(),
          pwd: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  };

  const handleVerification = async () => {
    try {
      setSpinnerStatus(true);
      const data = await handleSendRequest();
      data.msg === "valid user"
        ? navigation.replace("Dashboard")
        : displayAlert("Login Error", "Please check your Email or Password.");
    } catch (err) {
      alert(err);
    }
    setSpinnerStatus(false);
  };

  const displayAlert = (title, msg) => {
    const alertButtons = [{ text: "OK" }, { cancelable: false }];
    return Alert.alert(title, msg, alertButtons);
  };

  return (
    <Login
      source={require("../assets/connectBg.jpg")}
      spinnerEnable={true}
      spinnerVisibility={spinnerStatus}
      spinnerSize="large"
      switchValue={switchValue}
      onSwitchValueChange={() => setSwitchValue(!switchValue)}
      onPressLogin={handleVerification}
      usernameOnChangeText={(username) => setUsername(username)}
      passwordOnChangeText={(password) => setPassword(password)}
      loginText="Login"
      loginButtonTextStyle={{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        paddingTop: "5%",
        textTransform: "capitalize",
      }}
      disableSettings={true}
      loginButtonBackgroundColor="#1d1d1d"
    />
  );
};
