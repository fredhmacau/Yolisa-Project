import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function getImage() {
  const result = instance.get(
    `salesman/acount/${localStorage.getItem("token")}/img/get_img`,
    {
      
      cancelToken: cancelToken.token,
    }
  );

  return result;
}

