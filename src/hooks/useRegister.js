import axios from "axios";

const API_HOST = process.env.NEXT_PUBLIC_API_URL;

export const useRegister = async (payload) => {
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
