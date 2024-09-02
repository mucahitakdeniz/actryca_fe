import axios from "axios";

const url = process.env.NEXT_PUBLIC_HOST_API;
// https://actryca-backend.onrender.com

export const getCode = async (userData) => {
  try {
    const response = await axios.post(
      "http://35.179.163.92:8000/forgotpassword/getcode",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyCode = async (userData) => {
  try {
    const response = await axios.post(
      "http://35.179.163.92:8000/forgotpassword/verifycode",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const renewPassword = async (userData) => {
  try {
    const response = await axios.post(
      "http://35.179.163.92:8000/forgotpassword/renewpassword",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};