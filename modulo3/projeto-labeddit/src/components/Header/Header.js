import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledToolbar } from "./styled";
import { nextLogin } from '../../routers/coordinator'
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Header = () => {
  useUnprotectedPage()
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          LabEddit
        </Typography>
        <Button onClick={()=>nextLogin(navigate)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
