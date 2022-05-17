import instance from "../../configAxios";
import FormData from "form-data";

export default async function loginSalesman(values) {
  const form = new FormData();
  form.append("username", values.username);
  form.append("password", values.password);
  const formHeaders = form.getHeaders;

  const result =await instance.post("salesman/login", form, {
    headers: { ...formHeaders },
  });

  return result;
}
