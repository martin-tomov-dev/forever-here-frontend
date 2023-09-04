import axios from "axios";

const API_URL = `http://35.173.182.90`;

const config = {
  headers: {
    "Content-Type": "application/json",
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

export const userService = {
  foreverMessage,
};
