import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";

export function FormPost() {
  const [form, onChange, clear] = useForm({ text: "" });
  const params = useParams();

  const createComment = () => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comment`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert('Comentado com sucesso!', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    createComment();
    clear()
  };

  return (
    <form onSubmit={submitForm}>
      <textarea
        name={"text"}
        key={form.id}
        value={form.text}
        onChange={onChange}
        placeholder="digite seu comentario aqui"
        required
      ></textarea>
      <button>Comentar Post</button>
    </form>
  );
}
