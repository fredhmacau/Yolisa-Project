import createAccount from "./core/salesman/createAccount";
import loginSalesman from "./core/salesman/loginSalesman";
import getSalesman from "./core/salesman/getSalesman";
import getSalesmanContact from "./core/salesman/getContactSalesman";
import addImage from "./core/salesman/addImage";
import addContact from "./core/salesman/addContact";
import addCordenates from "./core/salesman/addCordenates";
import updateImage from "./core/salesman/updateImage";
import updateSalesman from "./core/salesman/updateSalesman";
import getPositions from "./core/salesman/getPositions";
import addProduct from "./core/salesman/addProduct";
import updateContact from "./core/salesman/updateContact";
import updateCordenates from "./core/salesman/updateCordanates";
import getSalesmanPosts from "./core/salesman/getSalesmanPosts";
import getImage from "./core/salesman/getImage";
import updatePost from "./core/salesman/updatePost";
import deletePost from "./core/salesman/deletePost";
import searchProduct from "./core/visitant/searchProduct";
import infoSalesman from "./core/visitant/infoSalesman";
import registerViews from "./core/salesman/registerViews";
import sendEmail from "./core/salesman/sendEmail";
import alterPassword from "./core/salesman/alterPassword";
import getAllSalesman from "./core/visitant/getAllSalesman";
import getAllPosts from "./core/visitant/getAllPosts";
const useHttp = function () {
  //register salesman
  const registerSalesman = async function (values) {
    const response = await createAccount(values);

    return response;
  };
  //login salesman
  const singInSalesman = async function (values) {
    const response = await loginSalesman(values);
    return response;
  };
  //view data the salesman
  const getSalesmanInfo = function () {
    const response = getSalesman();
    return response;
  };
  //view contact for salesman
  const getContactSalesman = function () {
    const response = getSalesmanContact();
    return response;
  };
  //register imagem
  const registerImagem = async function (values) {
    const response = await addImage(values);

    return response;
  };
  //register contact Salesman
  const registerContact = async function (values) {
    const response = await addContact(values);

    return response;
  };
  //register cordenates Salesman
  const registerPosition = async function (values) {
    const response = await addCordenates(values);

    return response;
  };

  //update imagem
  const alterImagem = async function (values) {
    const response = await updateImage(values);

    return response;
  };
  //update imagem
  const upSalesman = async function (values) {
    const response = await updateSalesman(values);

    return response;
  };
  //view cordenates the salesman
  const getMarkersPosition = function () {
    const response = getPositions();
    return response;
  };

  //post product with imagem
  const registerPost = async function (values, img) {
    const response = await addProduct(values, img);
    return response;
  };
  //post product with imagem
  const updatePosted = async function (values, id) {
    const response = await updatePost(values, id);
    return response;
  };

  //update contact Salesman
  const upContact = async function (values) {
    const response = await updateContact(values);

    return response;
  };

  //update cordenates Salesman
  const updatePosition = async function (values) {
    const response = await updateCordenates(values);

    return response;
  };

  //view posts data the salesman
  const viewPostSalesman = function () {
    const response = getSalesmanPosts();
    return response;
  };
  //view posts data the salesman
  const viewImage = function () {
    const response = getImage();
    return response;
  };
  //delete post the salesman
  const deletePosted = function (idPost) {
    const response = deletePost(idPost);
    return response;
  };
  //view posts data the salesman
  const viewResults = function (query) {
    const response = searchProduct(query);
    return response;
  };
  //view posts data the salesman
  const viewInfoAboutSalesman = function (idSalesman, idPost) {
    const response = infoSalesman(idSalesman, idPost);
    return response;
  };
  // register view posts data the salesman
  const registerViewsInPost = function (idSalesman) {
    const response = registerViews(idSalesman);
    return response;
  };
  //register salesman
  const sendEmailForAlterPass = async function (values) {
    const response = await sendEmail(values);

    return response;
  };
  //alter password
  const registerAlterPassword = async function (values) {
    const response = await alterPassword(values);

    return response;
  };
  //view all salesman total
  const viewTotalSalesman = function () {
    const response = getAllSalesman();
    return response;
  };  
  //view all posts
  const viewTotalPosts = function () {
    const response = getAllPosts();
    return response;
  };  
  return {
    registerSalesman,
    singInSalesman,
    getSalesmanInfo,
    getContactSalesman,
    registerImagem,
    registerContact,
    registerPosition,
    alterImagem,
    upSalesman,
    getMarkersPosition,
    registerPost,
    upContact,
    updatePosition,
    viewPostSalesman,
    viewImage,
    updatePosted,
    deletePosted,
    viewResults,
    viewInfoAboutSalesman,
    registerViewsInPost,
    sendEmailForAlterPass,
    registerAlterPassword,
    viewTotalSalesman,
    viewTotalPosts,
  };
};

export default useHttp;
