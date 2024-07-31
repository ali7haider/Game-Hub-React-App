import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Ensure this is correctly set
  params: {
    key: import.meta.env.VITE_API_KEY, // Ensure this is correctly set
  },
});

export default apiClient;
