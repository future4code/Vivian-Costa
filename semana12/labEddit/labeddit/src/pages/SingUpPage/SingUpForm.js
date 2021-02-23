import { Button,TextField } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { InputsContainer, SignUpFormContainer } from "./styled";

export function SingUpForm({ setRightButtonText }) {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
            Fazer Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  );
}
