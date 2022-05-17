import instance from "../../configAxios";
import FormData from "form-data";

export default async function addImage(values) {
  
  const form = new FormData();

  
  form.append("img",values.target.files[0]);
  
  const formHeaders = form.getHeaders;

  const result = await instance.post("salesman/acount/img/add_img", form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
