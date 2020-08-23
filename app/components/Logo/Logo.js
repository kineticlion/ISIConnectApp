import React from "react";
import { View, Image } from "react-native";

import styles from "./Logo.style";

const Logo = (props) => {
  const { logoComponent } = props;
  return (
    <View style={styles.container}>
      {logoComponent || (
        <View style={styles.row}>
          <View style={styles.logoStyle}>
            <Image
              source={require("../../assets/appimages/applogo.png")}
              style={{ marginTop: "5%", resizeMode: "center" }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Logo;
