import React from "react";
import * as L  from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/users";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({email:'', password:''})
  
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    //console.log(form)
    event.preventDefault()
    login(form, clear, navigate)
  }  

  return (               
        <L.InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField
                name={'email'}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required
                type={'email'}
            />
            <TextField
                name={'password'}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required
                type={"password"}
                />
            <Button
              type={'submit'}
              fullWidth
              variant={"contained"}
              color="primary"                          
            >
              Fazer Login!
            </Button>
          </form>
        </L.InputsContainer>            
  );
};
export default LoginForm;