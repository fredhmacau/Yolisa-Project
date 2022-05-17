import instance from "../../configAxios";
import FormData from "form-data";

export default async function updatePost(values, id) {
  const form = new FormData();
  form.append("product_name", values.productName);
  form.append("price", values.price);
  form.append("desc_product", values.descProduct);
  

  const formHeaders = form.getHeaders;

  const result = await instance.put(`salesman/acount/post/update/${id}`, form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
