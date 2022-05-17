import instance from "../../configAxios";


export default  function deletePost(id) {
  

  const result =  instance.delete(`salesman/acount/post/delete/${id}`,  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
