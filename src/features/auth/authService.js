import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/loginUser", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  console.log(res.data);
  return res.data;
};

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/users/logoutUser", {
    headers: { authorization: user.token },
  });
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};
const authService = {
  login,
  logout,
};
export default authService;
