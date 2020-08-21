import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { pickImage } from "../../utils/device";
import axios from "axios";
export default Dashboard = ({ navigation, route }) => {
  // const ImageButton = () => {
  //   const [image, setImage] = useState(null);

  //   const sendImage = async (file) => {
  //     const url = "https://connect-isi.herokuapp.com/insertuser";
  //     const data = new FormData();
  //     data.append("fileData", {
  //       uri: file.uri,
  //       type: file.type,
  //       name: "test",
  //     });
  //     // await fetch("https://connect-isi.herokuapp.com/insertuser", {
  //     //   method: "POST",
  //     //   body: data,
  //     //   headers: {
  //     //     "content-type": "multipart/form-data",
  //     //   },
  //     // });

  //     //   await axios.post(url, data, {
  //     //     headers: { "Content-Type": "multipart/form-data" },
  //     //   });
  //     // };
  //   };
  //   const getPermission = async () => {
  //     const askPermission = async () =>
  //       await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     const { status } = await askPermission();
  //     status === "granted" ? _pickImage() : await askPermission();
  //   };

  //   const makeBlob = async (uri) => {
  //     const localFile = await fetch(uri);
  //     const fileBlob = await localFile.blob();
  //     await sendImage(fileBlob);
  //   };

  //   return (
  //     <>
  //       <Button title="Upload Image" onPress={getPermission} />
  //       <Button title="Send Image" onPress={sendImage} />
  //     </>
  //   );
  // };

  return (
    <>
      <Profile navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#1d1d1d",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
