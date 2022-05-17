import instance from "../../configAxios";
import FormData from "form-data";

export default async function updateSalesman(values) {
  const form = new FormData();
  form.append("username", values.username);
  form.append("email", values.email);
  form.append("desc_business", values.desc);
  const formHeaders = form.getHeaders;

  const result = await instance.put("salesman/acount/update", form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
