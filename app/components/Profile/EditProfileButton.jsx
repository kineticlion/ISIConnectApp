import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EditProfileButton = () => {
  const navigation = useNavigation();
  return (
    <Button title="Edit" onPress={() => navigation.navigate("Edit Profile")} />
  );
};
export default EditProfileButton;
