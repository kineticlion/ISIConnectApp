import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import styles from "./Logo.style";

const Logo = (props) => {
  const { logoText, logoComponent } = props;
  return (
    <View style={styles.container}>
      {logoComponent || (
        <View style={styles.row}>
          <View style={styles.logoStyle}>
            {/* <Icon
              size={30}
              name="github"
              color="white"
              type="AntDesign"
              {...props}
            /> */}
            <Image
              source={require("../../assets/connectBg.jpg")}
              style={{ marginTop: "60%", resizeMode: "cover" }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string,
};

Logo.defaultProps = {
  logoText: "GITHUB",
};

export default Logo;
