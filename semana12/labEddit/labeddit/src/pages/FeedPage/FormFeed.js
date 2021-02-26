import React from "react";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/feed";

export function FormFeed() {
  const [form, onChange, clear] = useForm({
    text: "",
    title: "",
  });

  const onSubmitForm = (e) => {
      e.preventDefault()
      createPost(form, clear)

  }

  return (
    <form onSubmit={onSubmitForm}>
      <h1>Pagina de Feed</h1>
      <textarea 
      name="title"
      value={form.title}
      onChange={onChange}
      placeholder="crie o titulo do seu post aqui!"
      label={'Titulo'}
      >
      </textarea>

      <textarea 
      name="text"
      value={form.text}
      onChange={onChange}
      placeholder="crie seu post aqui!"
      label={'Texto'}
      >
      </textarea>
      <button>Criar Post</button>
    </form>
  );
}
