import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import useForm from "../constants/useForm";
import * as G from "../components/styleGeral"


const LoginPage = () => {
  const navigate = useNavigate();
  
  const nextHomePage = () => {
    navigate("/");
  };

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/darvas/login`, form)
      .then((response) => {
        console.log("Deu certo:", response.data.token)
        localStorage.setItem("token", response.data.token);
        navigate("/Admin");
      })
      .catch((error) => {
        console.log("Deu errado:", error.response);
      });
    cleanFields();
  };

  return (
    <G.ContainerLabex>
      <h1>Labex</h1>
      <br/>
      <h1>Login</h1>
      <br/>
      <G.FormLogin onSubmit={onSubmitLogin}>
        <G.Input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={onChange}
          required
        />
        <G.Input
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={onChange}
          required
          pattern={"^.{6,}"}
          title={"Sua senha deve ter no mínimo 6 caracteres"}
        />
        <p>
        <G.Botoes onClick={nextHomePage}>Voltar</G.Botoes>
        <G.Botoes>Entrar</G.Botoes>
        </p>
      </G.FormLogin>
    </G.ContainerLabex>
  );
};

export default LoginPage;
