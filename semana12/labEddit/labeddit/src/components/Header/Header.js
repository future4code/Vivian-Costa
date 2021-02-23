import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledTooBar } from "./styled";
import { goToFeedPage, goToLoginPage } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';



export default function Header() {
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledTooBar>
          <Button onClick={() => goToFeedPage(history)} color="inherit">LabEddit</Button>
          <Button onClick={() => goToLoginPage(history)} color="inherit">Login</Button>
        </StyledTooBar>
      </AppBar>
  );
}
