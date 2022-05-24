import { LoginStart, LoginFail, LoginDone, Logout } from "../action/types";
import { FeachOne, FeachAll, Edit, Delete, Create,documentLoading} from "../action/types";


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

// Auth actions 
export function login(data) {
  return async (dispatch) => {
    dispatch({ type: LoginStart });
    try {
      const response = await API.post("login/", data);
      dispatch({ type: LoginDone, payload: {...response.data, 'username':data.username }});
      localStorage.setItem("token", response.data.token);
      // window.location.assign("/home");
    } catch (error) {
      alert("Fail to login");
      console.log(error);
    }
  };
}

export function register(data, navigate) {
  return async (dispatch) => {
    dispatch({ type: LoginStart });
    try {
      const response = await API.post("register/", data);
      navigate('/')
      alert('register user sucsessfully')
    } catch (error) {
      alert("Fail to login");
      console.log(error);
    }
  };
}


// Document actions
export function getOne(id) {
  return async (dispatch) => {
    dispatch({ type: documentLoading });
    try {
      const response = await API.get(`api/employee/${id}/`);
      dispatch({ type: FeachOne, payload: response.data});
    } catch (error) {
      alert("Fail to load data from server");
      console.log(error);
    }
  };
}

export function getAll(page) {
  return async (dispatch) => {
    dispatch({ type: documentLoading });
    try {
      const response = await API.get(`api/employee/?page=${page}`);
      dispatch({ type: FeachAll, payload: response.data});
    } catch (error) {
      alert("Fail to load data from server");
      console.log(error);
    }
  };
}


export function createEntry(data) {
  return async (dispatch) => {
    dispatch({ type: documentLoading });
    try {
      const response = await API.post(`api/employee/`, data);
      const GealldataAgain = await API.get(`api/employee/`);
      dispatch({ type: FeachAll, payload: GealldataAgain.data});
    } catch (error) {
      alert("Fail to load data from server");
      console.log(error);
    }
  };
}



export function editEnry(id, data) {
  return async (dispatch) => {
    dispatch({ type: documentLoading });
    try {
      const response = await API.patch(`api/employee/${id}/`, data);
      const GealldataAgain = await API.get(`api/employee/`);
      dispatch({ type: FeachAll, payload: GealldataAgain.data});
    } catch (error) {
      alert("Fail to load data from server");
      console.log(error);
    }
  };
}



export function deleteEntry(id) {
  return async (dispatch) => {
    dispatch({ type: documentLoading });
    try {
      const response = await API.delete(`api/employee/${id}/`);
      const GealldataAgain = await API.get(`api/employee/`);
      dispatch({ type: FeachAll, payload: GealldataAgain.data});
    } catch (error) {
      alert("Fail to load data from server");
      console.log(error);
    }
  };
}