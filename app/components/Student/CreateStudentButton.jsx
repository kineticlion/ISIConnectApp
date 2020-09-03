import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateStudentButton = () => {
  const navigation = useNavigation();

  return (
    <Text
      style={{ fontSize: 18, color: "red", fontWeight: "500" }}
      onPress={() => navigation.navigate("Create Student")}
    >
      Create
    </Text>
  );
};

export default CreateStudentButton;
