import instance from "../../configAxios";
import FormData from "form-data";

export default async function addProduct(values,img) {
  const form = new FormData();
  form.append("product_name", values.productName);
  form.append("price", values.price);
  form.append("desc_product", values.descProduts);
  form.append("img", img.target.files[0]);
  
  const formHeaders = form.getHeaders;

  const result = await instance.post("salesman/acount/post/add", form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return result;
}
