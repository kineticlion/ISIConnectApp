import * as SecureStore from "expo-secure-store";

export const read = async (setUsername, setPassword, setSwitchValue) => {
  try {
    const credentials = await SecureStore.getItemAsync("usercredentials");
    if (!credentials) return;
    const myJson = JSON.parse(credentials);
    setUsername(myJson.username);
    setPassword(myJson.password);
    setSwitchValue(myJson.switchValue);
  } catch (e) {
    console.log(e);
  }
};

export const rememberUser = async (username, password, switchValue) => {
  const credenditials = { username, password, switchValue };
  if (!switchValue) {
    credenditials.username = "";
    credenditials.password = "";
    credenditials.switchValue = false;
    SecureStore.setItemAsync("usercredentials", JSON.stringify(credenditials));
    return;
  }
  SecureStore.setItemAsync("usercredentials", JSON.stringify(credenditials));
};
