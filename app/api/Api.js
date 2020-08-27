import Config from "../../config";
import { asyncAlert } from "../utils/device";

export default class Api {
  static async login(username, password) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        email: username.toLocaleLowerCase(),
        pwd: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${Config.BASEURL}isvaliduser`, options);
    const data = await response.json();
    return data;
  }

  static async insert(
    firstName,
    lastName,
    email,
    zipcode,
    userName,
    password,
    userType,
    phone
  ) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        f_name: firstName,
        lname: lastName,
        email,
        phone,
        zip: zipcode,
        u_name: userName.toLowerCase(),
        u_pwd: password,
        u_type: userType,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${Config.routes.insertUser}`, options);
    const data = await response.json();
  }
}
