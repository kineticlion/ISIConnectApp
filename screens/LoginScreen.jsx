import React, { useState, useEffect } from "react";
import Login from "../components/LoginScreen/LoginScreen";
import { Alert } from "react-native";
import { read, rememberUser } from "../utils/storage";
export default LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [switchValue, setSwitchValue] = useState(true);
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  useEffect(() => {
    read(setUsername, setPassword, setSwitchValue);
  }, []);

  const handleSendRequest = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        email: username.toLocaleLowerCase(),
        pwd: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `http://connect-isi.herokuapp.com/isvaliduser`,
      options
    );
    const data = await response.json();
    return data;
  };

  const handleVerification = async () => {
    try {
      setSpinnerStatus(true);
      const data = await handleSendRequest();
      if (data.msg === "valid user") {
        rememberUser(username, password, switchValue);
        navigation.replace("Dashboard");
        return;
      }
      displayAlert("Login Error", "Please check your Email or Password.");
    } catch (err) {
      alert(err);
    }
    setSpinnerStatus(false);
  };

  const displayAlert = (title, msg) => {
    return Alert.alert(title, msg);
  };

  return (
    <Login
      source={require("../assets/background.jpg")}
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
