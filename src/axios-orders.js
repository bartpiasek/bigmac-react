import axios from "axios";

const instance = axios.create({
  baseURL: "https://bigmac-react-default-rtdb.firebaseio.com/",
});

export default instance;
