import { LoginStart, LoginFail, LoginDone, Logout } from "../action/types";
import { FeachOne, FeachAll, Edit, Delete, Create,documentLoading} from "../action/types";


import axios from "axios";

const checkLogedIN = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    // if tocken not exist redirect user to login
    if (!((window.location.pathname === "/")| (window.location.pathname === '/register')) ){
      console.log('redirecting')
      window.location.assign("/");
    }
  } else {
    // if tocken exist redirect user homepage
    if ((window.location.pathname === "/")| (window.location.pathname === '/register')) {
      window.location.assign("/home");
    }

    return { Authorization: `Token ${token}` };
  }
};

const getInstance = ()=>{
  const API = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: checkLogedIN(),
  });
  return API
}



// Auth actions 
export function login(data) {
  return async (dispatch) => {
    dispatch({ type: LoginStart });
    try {
      const response = await getInstance().post("login/", data);
      dispatch({ type: LoginDone, payload: {...response.data, 'username':data.username }});
      localStorage.setItem("token", response.data.token);
      // window.location.assign("/home");
    } catch (error) {
      alert("Fail to login");
      console.log(error);
    }
  };
}

export function register(data, success) {
  return async (dispatch) => {
    dispatch({ type: LoginStart });
    try {
    
      const response = await getInstance().post("register/", data);
      success()
      // alert('register user sucsessfully')
      // navigate('/')
    } catch (error) {
      alert("Fail to register user");
      console.log(error);
    }
  };
}


// Document actions
export function getOne(id) {
  return async (dispatch) => {
    dispatch({ type: documentLoading });
    try {
      const response = await getInstance().get(`api/employee/${id}/`);
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
      const response = await getInstance().get(`api/employee/?page=${page}`);
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
      const response = await getInstance().post(`api/employee/`, data);
      const GealldataAgain = await getInstance().get(`api/employee/`);
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
      const response = await getInstance().patch(`api/employee/${id}/`, data);
      const GealldataAgain = await getInstance().get(`api/employee/`);
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
      const response = await getInstance().delete(`api/employee/${id}/`);
      const GealldataAgain = await getInstance().get(`api/employee/`);
      dispatch({ type: FeachAll, payload: GealldataAgain.data});
    } catch (error) {
      alert("Fail to load data from server");
      console.log(error);
    }
  };
}