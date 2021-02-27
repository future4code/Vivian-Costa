import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/feed";
import { CommentContainer, CommentText, CommentTitle, Button } from "./styled";

export function FormFeed() {
  const [form, onChange, clear] = useForm({
    text: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    createPost(form, clear, setIsLoading);
  };

  return (
    <CommentContainer onSubmit={onSubmitForm}>
      <CommentTitle
        name="title"
        value={form.title}
        onChange={onChange}
        placeholder="crie o titulo do seu post aqui!"
        label={"Titulo"}
      ></CommentTitle>

      <CommentText
        name="text"
        value={form.text}
        onChange={onChange}
        placeholder="crie seu post aqui!"
        label={"Texto"}
      ></CommentText>
      <Button>
        {isLoading ? (
          <CircularProgress color={"inherit"} size={24} />
        ) : (
          <> Postar</>
        )}
      </Button>
    </CommentContainer>
  );
}
