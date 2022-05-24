import { LoginStart, LoginFail, LoginDone, Logout } from "../action/types";
import axios from "axios";

const checkLogedIN = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    // if tocken not exist redirect user to login
    if (window.location.pathname !== "/") {
      window.location.assign("/");
    }
  } else {
    // if tocken exist redirect user homepage
    if (window.location.pathname === "/") {
      window.location.assign("/home");
    }

    return { Authorization: `Token ${token}` };
  }
};

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: checkLogedIN(),
});

export function login(data) {
  return async (dispatch) => {
    dispatch({ type: LoginStart });
    try {
      const response = await API.post("login/", data);
      dispatch({ type: LoginDone, payload: {...response.data, 'username':data.username }});
      localStorage.setItem("token", response.data.token);
      window.location.assign("/home");
    } catch (error) {
      alert("Fail to login");
      console.log(error);
    }
  };
}
