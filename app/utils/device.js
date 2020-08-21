import Config from "../../config";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";
export const pickImage = async () => {
  let result;
  try {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!result.cancelled) {
      return result;
    }
    return undefined;
  } catch (error) {
    alert(error);
  }
};

export const displayAlert = (title, msg, buttons = []) => {
  return Alert.alert(title, msg);
};

export const getCameraRollPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  return status === "granted";
};

export const sendImage = async (tag, file, fileName) => {
  const url = Config.routes.postImage;
  const data = new FormData();
  data.append(tag, {
    uri: file.uri,
    type: file.type,
    name: fileName,
  });
  return await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
