import * as SecureStore from "expo-secure-store";
import { asyncAlert } from "./device";

export const readUser = async (setUsername, setPassword, setSwitchValue) => {
  try {
    const credentials = await SecureStore.getItemAsync("usercredentials");
    if (!credentials) return;
    const myJson = JSON.parse(credentials);
    setUsername(myJson.username);
    setPassword(myJson.password);
    setSwitchValue(myJson.switchValue);
  } catch (e) {
    //console.log(e);
  }
};

export const readUserId = async () => {
  try {
    const credentials = await SecureStore.getItemAsync("usercredentials");
    if (!credentials) return;
    const myJson = JSON.parse(credentials);
    if (!myJson.id) return;
    return myJson.id;
  } catch (e) {
    asyncAlert("Storage", "User ID not found");
  }
};

export const rememberUser = async (id, username, password, switchValue) => {
  const credenditials = { id, username, password, switchValue };
  if (!switchValue) {
    credenditials.id = "";
    credenditials.username = "";
    credenditials.password = "";
    credenditials.switchValue = false;
    SecureStore.setItemAsync("usercredentials", JSON.stringify(credenditials));
    return;
  }
  SecureStore.setItemAsync("usercredentials", JSON.stringify(credenditials));
};
