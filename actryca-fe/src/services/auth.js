import axios from "axios";

const url = process.env.NEXT_PUBLIC_HOST_API;
// https://actryca-backend.onrender.com

export const signUp = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(
      "http://35.179.163.92:8000/auth/register",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(
      `http://35.179.163.92:8000/auth/login`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
