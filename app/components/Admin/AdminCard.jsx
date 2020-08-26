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

const AdminCard = ({ uri, firstName, lastName }) => {
  const image = uri ? uri : "https://i.ibb.co/GpmHSDd/avatar.jpg";
  return (
    <Card
      style={{
        width: "40%",
        marginVertical: "5%",
        marginHorizontal: "5%",
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity>
        <Card.Content style={{ alignItems: "center" }}>
          <Avatar.Image
            source={{ uri: image }}
            size={130}
            style={{ backgroundColor: "transparent" }}
          />
          <Caption style={{ fontSize: 14 }}>
            {firstName} {lastName}
          </Caption>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

export default AdminCard;
