import Config from "../../config";

export default class Api {
  static async login(username, password) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        u_name: username,
        u_pwd: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(Config.routes.isvaliduser, options);
    const data = await response.json();
    return data;
  }

  static async fetchUserData(id) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(Config.routes.getUserById, options);
    const data = await response.json();
    return data;
  }

  static async insert(
    imageURI,
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
        uri: imageURI + "",
        f_name: firstName,
        l_name: lastName,
        email,
        zip: zipcode,
        u_name: userName.toLowerCase(),
        u_pwd: password,
        u_type: userType,
        phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${Config.routes.insertUser}`, options);
  }

  static async updateUser(id, f_name, l_name, image, zip, phone, email) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        id,
        uri: image,
        f_name,
        l_name,
        email,
        zip,
        phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${Config.routes.updateuser}`, options);
    const data = await response.json();
    return data;
  }

  static async fetchUsersByType(typeID) {
    const response = await fetch(`${Config.routes.getusersbytype}${typeID}`);
    const data = await response.json();
    return data;
  }

  static async deleteUserById(userId) {
    const options = {
      method: "DELETE",
      body: JSON.stringify({
        id: userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${Config.routes.deleteuserbyid}`, options);
    const data = await response.json();
    return data;
  }

  static async insertPoll(title) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        question: title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(Config.routes.insertPoll, options);
    const data = await response.json();
    return data;
  }

  static async addOptionToQuestion(questionId, answer) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        answer,
        question_id: questionId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(Config.routes.insertPoll, options);
    const data = await response.json();
  }
}
