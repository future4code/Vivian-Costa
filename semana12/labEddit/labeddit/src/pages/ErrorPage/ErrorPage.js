import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";
import error from "../../assets/error.jpeg";
import { Typography } from "@material-ui/core";

export function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
      <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  );
}
