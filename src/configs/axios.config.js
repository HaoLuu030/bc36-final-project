import axios from "axios";
import { TOKEN_CYBERSOFT, BASE_URL } from "../constants";

const axiosRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: TOKEN_CYBERSOFT,
  },
});

export { axiosRequest };
