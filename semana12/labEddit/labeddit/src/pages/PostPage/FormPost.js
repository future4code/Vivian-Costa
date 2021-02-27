import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";
import { CommentPostContainer, CommentPostText, Button } from "./styled";

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
        alert("Comentado com sucesso!", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    createComment();
    clear();
  };

  return (
    <CommentPostContainer onSubmit={submitForm}>
      <CommentPostText
        name={"text"}
        key={form.id}
        value={form.text}
        onChange={onChange}
        placeholder="digite seu comentario aqui"
        required
      ></CommentPostText>
      <Button>Comentar Post</Button>
    </CommentPostContainer>
  );
}
