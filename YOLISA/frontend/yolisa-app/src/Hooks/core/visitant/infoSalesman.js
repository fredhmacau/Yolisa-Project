import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function infoSalesman(idSalesman,idPost) {
  const result = instance.get(`visitant/info/salesman/${idSalesman}/${idPost}`, {
    cancelToken: cancelToken.token,
  });

  return result;
}
