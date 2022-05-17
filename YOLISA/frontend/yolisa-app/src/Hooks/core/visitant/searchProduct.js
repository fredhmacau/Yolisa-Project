import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function searchProduct(query) {
  const result = instance.get(`visitant/?query=${query}`, {
    cancelToken: cancelToken.token,
  });

  return result;
}
