import React from "react";
import useForm from "../constants/useForm";
import { useNavigate } from "react-router-dom";
import * as G from "../components/styleGeral";


const CreateTripPage = () => {
  const navigate = useNavigate();
  const nextAdmin = () => {
    navigate("/Admin")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  
  const criarViagem = (event) => {
    event.preventDefault();
    console.log("criado", form);
    cleanFields();
  };


  return (
    <G.ContainerLabex>
      <h1>Labex</h1>
      <br/>
      <h1>Criar Viagem</h1>
      <br/>
      <G.FormInscricao onSubmit={criarViagem}>
        <G.Input 
        name="name" 
        value={form.name} 
        onChange={onChange} 
        placeholder="Nome"
        required 
        />
        <G.Select>
          <option>Escolha um planeta</option>
        </G.Select>
        <G.Input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{20,}"}
          title={"Máximo de 20 caracteres!"}
        />
        <G.Input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração"
          required
          type={"number"}
          min={50}
        />
        <p>
          <G.Botoes onClick={nextAdmin}>Voltar</G.Botoes>
          <G.Botoes>Criar</G.Botoes>
        </p>
      </G.FormInscricao>
    </G.ContainerLabex>
  );
};

export default CreateTripPage;
