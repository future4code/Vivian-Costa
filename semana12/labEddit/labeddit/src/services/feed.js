import axios from "axios";
import { BASE_URL } from "../constants/url";

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Criado com sucesso!", res.data.message);
      clear();
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.message);
    });
};
