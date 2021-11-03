import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "produrl";

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// create a login function that takes in userInfo and returns the output of the /auth/login endpoint
export const login = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// logout does not need parameters (why?)
export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`);
  } catch (error) {
    console.error(error.message);
  }
}

// an exportable async function that gets all cartoons (apiURL/cartoons/)
export const getAllCartoons = async () => {
  try {
    const response = await axios.get(`${apiURL}/cartoons/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// called createCartoon or some name like that it should take in info on a new cartoon and use it for the data on a axios.post request to our POST /cartoons/ endpoint
export const createCartoon = async (newCartoon) => {
  try {
    await axios.post(`${apiURL}/cartoons/`, newCartoon);
  } catch (error) {
    console.error(error.message);
  }
}