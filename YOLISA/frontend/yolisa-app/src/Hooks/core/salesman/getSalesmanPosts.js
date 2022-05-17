import instance from "../../configAxios";
import axios from "axios"

const cancelToken = axios.CancelToken.source();
export default  function getSalesmanPosts() {
  const result = instance.get("salesman/acount/post/view_posts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    cancelToken: cancelToken.token,
  });

  return result;
}
