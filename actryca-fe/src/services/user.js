import axios from "axios";
import useAuthStore from "@/store/auth-store";

const url = process.env.NEXT_PUBLIC_HOST_API;

export const getUserData = async (id) => {
  const { tokens } = useAuthStore.getState();
  try {
    const response = await axios.get(`${url}users/${id}`, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userUpdatePut = async (id, userData) => {
  const { tokens } = useAuthStore.getState();
  try {
    const response = await axios.put(
      `${url}users/${id}`,
      { userData },
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
