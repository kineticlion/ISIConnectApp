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
}
