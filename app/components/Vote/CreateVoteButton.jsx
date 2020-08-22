import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateVoteButton = () => {
  const navigation = useNavigation();
  return (
    <Text
      style={{ fontSize: 18, color: "red", fontWeight: "500" }}
      onPress={() => navigation.navigate("Create Vote")}
    >
      Create
    </Text>
  );
};
export default CreateVoteButton;
