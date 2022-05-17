import instance from "../../configAxios";
import FormData from "form-data";

export default async function updateImage(values) {
  const form = new FormData();

  form.append("img", values.target.files[0]);

  const formHeaders = form.getHeaders;

  const result = await instance.put("salesman/acount/img/update_img", form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
