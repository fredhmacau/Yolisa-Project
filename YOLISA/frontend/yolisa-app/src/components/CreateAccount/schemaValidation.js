import * as yup from "yup";

const schemaNewSalesman = yup
  .object({
    username: yup
      .string()
      .min(4,"Número de caracteres insuficientes")
      .required("Nome de usuário inválido"),
    businessName: yup.string().min(2,"Introduza a designação verdadeira").required("Este campo não pode estar vázio"),
    email: yup.string().email().required("Endereço de email inválido"),
    nif: yup.number().positive("NIF inválido").required("NIF inváliddo"),
    password: yup
      .string()
      .required("este campo não pode estar vázio")
      .min(8, "Caracteres insuficientes"),
    confPass:yup.string().required("Campo obrigátorio").oneOf([yup.ref("password")],"As senhas não condizem"),
    descBusiness:yup.string().required("Este campo não pode estar vázio")
  })
  .required();

  export default schemaNewSalesman;