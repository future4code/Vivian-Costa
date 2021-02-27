import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledTooBar } from "./styled";
import { goToFeedPage, goToLoginPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

export default function Header({ rightButtonText, setRightButtonText }) {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(history);
    } else {
      goToLoginPage(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledTooBar>
        <Button onClick={() => goToFeedPage(history)} color="inherit">
          LabEddit
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledTooBar>
    </AppBar>
  );
}
