import instance from "../../configAxios";
import FormData from "form-data"

export default async function createAccount(values) {
 
  
  const form =new FormData();
  form.append("username", values.username);
  form.append("business_name", values.businessName);
  form.append("email", values.email);
  form.append("password", values.password);
  form.append("nif", values.nif.toString());
  form.append("desc_business", values.descBusiness);
  const formHeaders=form.getHeaders;
  
    const result =await instance.post("salesman/acount/add", form, {
      headers: {...formHeaders},
    });
   
    
    return result;
}
