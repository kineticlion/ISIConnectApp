import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateAdminButton = () => {
  const navigation = useNavigation();
  return (
    <Text
      style={{ fontSize: 18, color: "red", fontWeight: "500" }}
      onPress={() => navigation.navigate("Create Admin")}
    >
      Create
    </Text>
  );
};
export default CreateAdminButton;
