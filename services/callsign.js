import axios from "axios";
import { urlserver } from "./url";
const baseUrl = urlserver + "/call_sign";

const get = () => {  
  const request = axios.get(`${baseUrl}`);
  return request.then((response) => response.data);
};

export default { get };