import instance from "../../configAxios";
import FormData from "form-data";

export default async function updateContact(values) {
  const form = new FormData();
  form.append("phone_number", values.phoneNumber);
  form.append("province_focus", values.provinceFocus);
  form.append("desc_localization", values.descLocation);

  const formHeaders = form.getHeaders;

  const result = await instance.put(
    "salesman/acount/contact/update_contact",
    form,
    {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return result;
}
