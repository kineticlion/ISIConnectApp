import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row" }}>
          <Avatar.Image
            source={{
              uri:
                "https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 10, justifyContent: "center" }}>
            <Title>Super Admin</Title>
            <Caption>Id : 1</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="email" size={20} color="black" />
            <Text style={styles.infoText}>superadmin@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    margin: 20,
  },
  row: {
    flexDirection: "row",
  },
  infoText: {
    marginLeft: 10,
  },
});
export default Profile;
