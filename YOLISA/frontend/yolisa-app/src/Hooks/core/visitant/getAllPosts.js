import instance from "../../configAxios";
import axios from "axios";

const cancelToken = axios.CancelToken.source();
export default function getAllPosts() {
  const result = instance.get(`visitant/info/posts/total`, {
    cancelToken: cancelToken.token,
  });

  return result;
}
