import axios from "axios";
import useAuthStore from "@/store/auth-store";

const url = process.env.NEXT_PUBLIC_HOST_API;

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
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const selectStatus = async (status) => {
  try {
    const { tokens } = useAuthStore.getState();
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

export const registerActor = async (actorData) => {
  try {
    const { tokens } = useAuthStore.getState();
    const response = await axios.post(`${url}actors/register`, actorData, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
