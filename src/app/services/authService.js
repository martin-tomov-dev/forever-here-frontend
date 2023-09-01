import axios from "axios";

const API_URL = `http://35.173.182.90`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Login User
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData, config);
  return response.data;
};

// Register User
const createAccount = async (userData) => {
  const response = await axios.post(`${API_URL}/add`, userData, config);
  return response.data;
};

// Logout
const logout = async () => {
  const response = await axios.get(`${API_URL}/logout`);
  return response.data;
};

export const authService = {
  createAccount,
  logout,
  login,
};