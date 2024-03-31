import axios from "axios";

const API_HOST = "https://illiyin.goforumrah.com/api";

export const useRegister = async (payload) => {
  console.log("email cok", payload);
  try {
    const response = await axios.post(
      `${API_HOST}/hotel-business/store`,
      payload
    );
    console.log("register success", response.data);
    return response.data;
  } catch (error) {
    console.error("register error", error);
    throw error;
  }
};