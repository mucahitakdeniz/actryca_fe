import axios from "axios";
import useAuthStore from "@/store/auth-store";

const url = process.env.NEXT_PUBLIC_HOST_API;
const { tokens } = useAuthStore.getState(); 

export const register = async (userData) => {
  try {
    const response = await axios.post(`${url}auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${url}auth/login`, userData);
    console.log(response.data.accessToken);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const selectStatus = async (status) => {
  try {
    const response = await axios.post(
      `${url}auth/selectstatus`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${tokens}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
