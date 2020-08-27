import * as React from "react";
import { Modal, View } from "react-native";
import { Card, Title, Button, Paragraph, Caption } from "react-native-paper";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { render } from "react-dom";

const VoteCard = ({ title, author, date }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderCard = () => {
    return (
      <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
        <Card style={{ margin: "5%" }}>
          <Card.Content>
            <Title>{title}</Title>
            <Caption>Created By : {author}</Caption>
            <Caption>Date : {date}</Caption>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Modal visible={isModalVisible} transparent={false}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {renderCard()}
        </View>
      </Modal>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {renderCard()}
      </View>
    </>
  );
};
export default VoteCard;
