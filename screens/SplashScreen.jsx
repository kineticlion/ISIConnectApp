import React, { useEffect } from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 1800);
  }, []);
  return (
    <View style={(styles.container, styles.splash)}>
      <View
        style={{
          backgroundColor: "#1d1d1d",
          height: windowHeight,
          width: windowWidth,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/isilogo.png")}
          style={{
            resizeMode: "center",
            height: "20%",
            width: "20%",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "#1d1d1d",
  },
  header: {
    color: "#1d1d1d",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
