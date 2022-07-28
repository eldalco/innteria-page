import axios from "axios";
import { urlserver } from "./url";
const baseUrl = urlserver + "/call_sign";

const get = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get(`${baseUrl}`, config);
  return request.then((response) => response.data);
};

export default { get };