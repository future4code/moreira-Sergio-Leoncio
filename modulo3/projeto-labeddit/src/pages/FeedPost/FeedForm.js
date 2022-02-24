import React from "react";
import * as L  from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/users";

const FeedForm = () => {
  const [form, onChange, clear] = useForm({title:'', body:''})
  
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
                name={'title'}
                value={form.title}
                onChange={onChange}
                label={"Título"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required                
            />
            <TextField
                name={'body'}
                value={form.body}
                onChange={onChange}
                label={"Comentário"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required                
            />
           <Button
              type={'submit'}
              fullWidth
              variant={"contained"}
              color="primary"                          
            >
              Postar!
            </Button>
          </form>
        </L.InputsContainer>            
  );
};
export default FeedForm;