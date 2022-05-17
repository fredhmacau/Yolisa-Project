import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function getSalesmanContact() {
  const result = instance.get("salesman/acount/contact/get_contact", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    cancelToken: cancelToken.token,
  });

  return result;
}
