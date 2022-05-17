import instance from "../../configAxios";
import axios from "axios"

const cancelToken = axios.CancelToken.source();
export default  function getSalesman() {
  const result =instance.get("salesman/acount/get", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    cancelToken: cancelToken.token,
  });

  return result;
}
