import axios from "axios";

const url = process.env.NEXT_PUBLIC_HOST_API;
// https://actryca-backend.onrender.com

export const signUp = async (data) => {
  try {
    console.log(data);
    const response = await axios.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(
      `https://actryca-backend.onrender.com/auth/login`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
