import Config from "../../config";

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
    userName,
    password,
    userType
  ) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        fname: firstName,
        lname: lastName,
        email,
        u_name: userName.toLowerCase(),
        pwd: password,
        type: userType,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${Config.routes.insertUser}`, options);
    const data = await response.json();
  }
}
