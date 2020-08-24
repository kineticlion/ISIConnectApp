import * as React from "react";
import {
  Card,
  Title,
  Caption,
  Avatar,
  Paragraph,
  Text,
} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const AdminCard = ({ firstName, lastName }) => {
  const imageURI = { uri: "https://i.ibb.co/GpmHSDd/avatar.jpg" };
  return (
    <Card
      style={{
        width: "40%",
        marginVertical: "5%",
        marginHorizontal: "5%",
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity style={{ marginVertical: "0%" }}>
        <Card.Content style={{ alignItems: "center" }}>
          <Avatar.Image source={imageURI} size={130} />
          <Caption style={{ fontSize: 14 }}>
            {firstName} {lastName}
          </Caption>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

export default AdminCard;
