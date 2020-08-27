import * as React from "react";
import { Card, Caption, Avatar, Button, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { asyncAlert } from "../../utils/device";
import { Modal, StyleSheet, View } from "react-native";
import { useState } from "react";

const AdminCard = (props) => {
  const image = uri ? uri : "https://i.ibb.co/GpmHSDd/avatar.jpg";
  const { uri, firstName, lastName, displayCard, isCardVisible } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderProfile = () => (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Avatar.Image
        source={{ uri: image }}
        size={130}
        style={{ backgroundColor: "transparent" }}
      />
      <Text>
        {firstName} {lastName}
      </Text>
    </View>
  );

  const renderCard = () => (
    <Card
      style={{
        width: "40%",
        marginVertical: "5%",
        marginHorizontal: "5%",
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
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

  return (
    <>
      <Modal visible={isModalVisible} transparent={false}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {renderProfile()}
          <Button
            color="red"
            onPress={() => setIsModalVisible(!isModalVisible)}
          >
            Close
          </Button>
        </View>
      </Modal>
      {renderCard()}
    </>
  );
};

export default AdminCard;
