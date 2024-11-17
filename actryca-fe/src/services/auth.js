import axios from "axios";
import useAuthStore from "@/store/auth-store";

const url = process.env.NEXT_PUBLIC_HOST_API;

export const register = async (userData) => {
  console.log(userData)
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

// export const registerActor = async (actorData) => {
//   try {
//     const { tokens } = useAuthStore.getState(); 
//     const response = await axios.post(`${url}actors/register`, actorData, {
//       headers: {
//         Authorization: `Bearer ${tokens}`, 
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const registerActor = async (actorData) => {
  try {

    const { tokens } = useAuthStore.getState();
    const formData = new FormData();
    console.log(actorData)

    if (actorData.profile_photo && actorData.profile_photo instanceof File) {
      formData.append("profile_photo", actorData.profile_photo, actorData.profile_photo.name);
    }


    for (const key in actorData) {
      if (key === "profile_photo") continue; 
      if (Array.isArray(actorData[key])) {
        formData.append(key, JSON.stringify(actorData[key]));
      } else {
        formData.append(key, actorData[key]);
      }
    }

    
    const response = await axios.post(`${url}actors/register`, formData, {
      headers: {
        Authorization: `Bearer ${tokens}`,
        "Content-Type": "multipart/form-data",
      },
    });

    for (let [key, value] of formData.entries()) {
      console.log(` burada ${key}:`, value); 
    }

    console.log("Response from registerActor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in registerActor:", error);

    // Hata durumunda ayrıntılı bilgi sağlıyoruz
    if (error.response) {
      console.error("Response data:", error.response.data); 
      console.error("Status code:", error.response.status); 
      console.error("Headers:", error.response.headers); 
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }

    throw error;
  }
};




export const registerScreenwriter = async (screenwriterData) => {
  try {
    const { tokens } = useAuthStore.getState();
    const response = await axios.post(`${url}screenwriters`, screenwriterData, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
