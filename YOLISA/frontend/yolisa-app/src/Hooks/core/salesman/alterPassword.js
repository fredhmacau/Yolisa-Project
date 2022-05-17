import instance from "../../configAxios";
import FormData from "form-data";

export default async function alterPassword(values) {
  const form = new FormData();
  form.append("email_salesman", values.email);
  form.append("code", values.codigo);
  form.append("new_password", values.newpassword);
  
  
  const formHeaders = form.getHeaders;

  const result = await instance.post("salesman/alter-pass", form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
