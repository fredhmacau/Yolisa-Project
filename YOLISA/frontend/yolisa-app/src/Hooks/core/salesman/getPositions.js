import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function getPositions() {
  const result = instance.get("salesman/acount/get-marker-position", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    cancelToken: cancelToken.token,
  });

  return result;
}
