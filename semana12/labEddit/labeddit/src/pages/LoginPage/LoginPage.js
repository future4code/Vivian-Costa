import React from "react";
import { useHistory } from "react-router-dom";
import { goToSingUpPage } from "../../routes/Coordinator";
import { LogoImage, ScreenContainer,SignUpButtonContainer,} from "./styled";
import rdt from "../../assets/rdt.png";
import { Button } from "@material-ui/core";
import { LoginForm } from "./LoginForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";


export function LoginPage({setRightButtonText}) {
  useUnprotectedPage()
  const history = useHistory();

  return (
    <ScreenContainer>
      <LogoImage src={rdt} />
      <LoginForm setRightButtonText={setRightButtonText} />

      <SignUpButtonContainer>
        <Button
          onClick={() => goToSingUpPage(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Não possui conta? Cadastre-se!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}
