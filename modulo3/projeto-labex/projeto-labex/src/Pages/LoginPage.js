import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()

    const nextHomePage = () => {
        navigate("/")
    }


  return (
    <div>
      <h1>Login</h1>
      <p>
        <button onClick={nextHomePage}>Voltar</button>
        <button>Entrar</button>
      </p>
    </div>
  );
}

export default LoginPage;
