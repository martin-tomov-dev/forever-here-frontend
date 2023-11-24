import axios from "axios";

// const API_URL = `http://localhost:3001`;
const API_URL = "http://3.8.212.120:3001";
//
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const uploadConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const foreverMessage = async (userData) => {
  console.log("uiserdata", userData);
  const response = await axios.post(
    `${API_URL}/forever-message`,
    userData,
    config
  );
  return response.data;
};

const uploadPicture = async (data) => {
  console.log("config========>", data);
  const response = await axios.post(
    `${API_URL}/users/forever-message-upload`,
    data,
    uploadConfig
  );
  return response;
};

const getMessageById = async (id) => {
  console.log("message id", id);
  const response = await axios.get(`${API_URL}/users/forever-message/${id}`);
  return response;
};

export const userService = {
  foreverMessage,
  uploadPicture,
  getMessageById,
};
