import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function getAllSalesman() {
  const result = instance.get(`visitant/info/salesmans/total`, {
    cancelToken: cancelToken.token,
  });

  return result;
}
