import axios from "axios";

const url = process.env.NEXT_PUBLIC_HOST_API;

export const getCode = async (userData) => {
  try {
    const response = await axios.post(`${url}forgotpassword/getcode`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyCode = async (userData) => {
  try {
    const response = await axios.post(
      `${url}forgotpassword/verifyCode`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const renewPassword = async (userData, token) => {
  try {
    const response = await axios.post(
      `${url}forgotpassword/renewpassword`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
