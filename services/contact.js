import axios from "axios";
import { urlserver } from "./url";
const baseUrl = urlserver + "/lead";

const create = (newObject) => {
 
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default { create };