export default Config = {
  BASEURL: "https://connect-isi.herokuapp.com",
  routes: {
    insertUser: "https://connect-isi.herokuapp.com/insertuser",
    getUserById: "https://connect-isi.herokuapp.com/getuserbyid",
    isvaliduser: "https://connect-isi.herokuapp.com/isvaliduser",
    updateuser: "https://connect-isi.herokuapp.com/updateuser",
    getusersbytype: "https://connect-isi.herokuapp.com/getuserbytype?u_type=",
    deleteuserbyid: "https://connect-isi.herokuapp.com/deleteuserbyid",
    insertPoll: "https://connect-isi.herokuapp.com/addquestion",
    addOption: "h",
  },
  userTypes: {
    superAdmin: 1,
    admin: 2,
    student: 3,
  },
  images: {
    profile: {
      uri: "https://i.ibb.co/GpmHSDd/avatar.jpg",
    },
  },
};

export const getUserType = (id) => {
  if (id === 1) return "Super Admin";
  if (id === 2) return "Admin";
  if (id === 3) return "Student";
  return "Invalid ID";
};
