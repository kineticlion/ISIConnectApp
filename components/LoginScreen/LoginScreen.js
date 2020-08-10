import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import Spinner from "react-bootstrap/Spinner";
/**
 * ? Local Imports
 */
import Logo from "../Logo/Logo";
import styles, { container } from "./LoginScreen.style";
import BottomContainer from "../BottomContainer/BottomContainer";

const LoginScreen = (props) => {
  const {
    source,
    children,
    spinnerEnable,
    spinnerVisibility,
    spinnerColor,
    spinnerSize,
    loginText,
    onPressLogin,
    loginButtonTextStyle,
    loginButtonBackgroundColor,
  } = props;

  renderSpinner = () => (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator color={spinnerColor} size={spinnerSize} />
    </View>
  );

  renderLoginButton = () => (
    <TouchableOpacity style={styles.loginButtonStyle} onPress={onPressLogin}>
      <Text style={loginButtonTextStyle}>{loginText}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={container(loginButtonBackgroundColor)}
    >
      <View style={container(loginButtonBackgroundColor)}>
        <ImageBackground
          source={source}
          borderRadius={24}
          resizeMode="cover"
          style={styles.imagebackgroundStyle}
        >
          <View style={styles.blackoverlay}>
            <SafeAreaView style={styles.safeAreaViewStyle}>
              <View style={styles.loginContainer}>
                <Logo {...props} />
              </View>
              {children}
              <BottomContainer {...props} />
            </SafeAreaView>
          </View>
        </ImageBackground>
        {spinnerEnable && spinnerVisibility
          ? renderSpinner()
          : renderLoginButton()}
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.propTypes = {
  loginText: PropTypes.string,
  spinnerEnable: PropTypes.bool,
  spinnerSize: PropTypes.string,
  spinnerColor: PropTypes.string,
  spinnerVisibility: PropTypes.bool,
  loginButtonBackgroundColor: PropTypes.string,
};

LoginScreen.defaultProps = {
  spinnerSize: "small",
  loginText: "LOGIN",
  spinnerEnable: false,
  spinnerColor: "#fdfdfd",
  spinnerVisibility: false,
  source: { uri: null },
  loginButtonBackgroundColor: "#282828",
  loginButtonTextStyle: styles.loginButtonTextStyle,
};

export default LoginScreen;
