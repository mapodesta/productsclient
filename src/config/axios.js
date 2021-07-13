import axios from "axios";

const clienteAxios = axios.create({
  //baseURL: "http://localhost:4000",
  baseURL: "https://product-server-api.herokuapp.com/",
});

export default clienteAxios;
