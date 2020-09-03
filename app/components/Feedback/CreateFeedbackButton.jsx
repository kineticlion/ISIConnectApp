import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

const CreateFeedbackButton = ({ userType }) => {
  const navigation = useNavigation();
  return userType === Config.userTypes.superAdmin ||
    userType === Config.userTypes.student ? null : (
    <Text
      style={{ fontSize: 18, color: "red", fontWeight: "500" }}
      onPress={() => navigation.navigate("Create Feedback")}
    >
      Create
    </Text>
  );
};

const mapStateToProps = (state) => {
  return {
    userType: state.entities.user.data.u_type,
  };
};

export default connect(mapStateToProps)(CreateFeedbackButton);
