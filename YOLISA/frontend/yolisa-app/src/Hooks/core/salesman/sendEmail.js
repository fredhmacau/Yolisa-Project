import instance from "../../configAxios";
import FormData from "form-data";

export default async function sendEmail(values) {
  const form = new FormData();
  form.append("email_salesman", values.email);
  

  const formHeaders = form.getHeaders;

  const result = await instance.post("salesman/receive-email", form, {
    headers: {
      ...formHeaders,
    },
  });

  return result;
}
