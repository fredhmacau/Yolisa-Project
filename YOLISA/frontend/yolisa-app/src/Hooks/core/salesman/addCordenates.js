import instance from "../../configAxios";
import FormData from "form-data";

export default async function addCordenates(values) {
  const form = new FormData();
  form.append("lat", values.lat);
  form.append("lng", values.lng);
 

  const formHeaders = form.getHeaders;

  const result = await instance.post(
    "salesman/acount/add-marker-position",
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
