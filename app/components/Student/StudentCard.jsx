import * as React from "react";
import { Card, Caption, Avatar, Button, Text, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { asyncAlert } from "../../utils/device";
import { Modal, StyleSheet, View } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { getUserType } from "../../../config";
import DataIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Api from "../../api/Api";

const StudentCard = ({
  id,
  uri,
  firstName,
  lastName,
  removeAdmin,
  userType,
  phone,
  zip,
  email,
  studentDeleted,
}) => {
  const image = uri ? uri : "https://i.ibb.co/GpmHSDd/avatar.jpg";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = async () => {
    const response = await asyncAlert(
      "Confirm Delete",
      "Are you sure you want to delete?",
      {
        text: "cancel",
        onPress: () => {
          return null;
        },
      }
    );
    if (!response) return;
    await Api.deleteUserById(id);
    studentDeleted(true);
    setIsModalVisible(!isModalVisible);
  };

  const renderProfile = () => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5%",
      }}
    >
      <Avatar.Image
        source={{ uri: image }}
        size={200}
        style={{ backgroundColor: "transparent" }}
      />
      <View style={{ marginTop: "3%", alignItems: "center" }}>
        <Title style={{ fontSize: 23 }}>
          {firstName} {lastName}
        </Title>
        <Caption style={{ fontSize: 17 }}>{getUserType(userType)}</Caption>
        <View style={styles.infoSection}>
          <View style={styles.info}>
            <DataIcon
              name="email"
              size={25}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.info}>
              {email === "null" || email === "undefined" ? "No record" : email}
            </Text>
          </View>
          <View style={styles.info}>
            <DataIcon
              name="phone"
              size={20}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.info}>
              {phone === "null" || phone === "undefined" ? "No record" : phone}
            </Text>
          </View>
          <View style={styles.info}>
            <DataIcon
              name="map-marker"
              size={25}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.info}>
              {zip === "null" || zip === "undefined" ? "No record" : zip}
            </Text>
          </View>
        </View>
      </View>
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
        <View style={{ marginTop: "20%" }}>
          <Card
            style={{
              margin: "10%",
              shadowRadius: "5%",
            }}
          >
            {renderProfile()}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "15%",
              }}
              onPress={handleDelete}
            >
              <Icon name="ios-trash" size={70} color="red" />
            </TouchableOpacity>
          </Card>
          <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
            <Button color="black">Close</Button>
          </TouchableOpacity>
        </View>
      </Modal>
      {renderCard()}
    </>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  info: {
    marginTop: 5,
    fontSize: 17,
    alignItems: "center",
    flexDirection: "row",
  },
  infoSection: {
    margin: "5%",
    alignItems: "center",
    marginRight: 20,
    justifyContent: "center",
  },
  buttonSection: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "32%",
  },
});
