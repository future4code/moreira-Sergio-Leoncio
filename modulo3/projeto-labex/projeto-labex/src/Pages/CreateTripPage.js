import React from "react";
import useForm from "../constants/useForm";
import { useNavigate } from "react-router-dom";
import * as G from "../components/styleGeral";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { useProtectedPage} from "../hooks/useProtectedPage";

const CreateTripPage = (props) => {
  useProtectedPage();
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
    const token = localStorage.getItem("token");
    axios
      .post(`${BASE_URL}/darvas/trips`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        //console.log(res.data)
        alert("Viagem criada!")  
        
    })
    .catch((err) =>{
        console.log(err.response)
    })
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
      <G.Select
      required
      name="planet"
      value={form.planet} 
      onChange={onChange}>        
        <option>Escolha um planeta</option>
        <option>Mécurio</option>
        <option>Venus</option>
        <option>Terra</option>
        <option>Marte</option>
        <option>Jupiter</option>
        <option>Saturno</option>
        <option>Uraon</option>
        <option>Netuno</option>
        <option>Plutão</option>
      </G.Select>
      <G.Input         
      type="date" 
      name="date"
      value={form.date} 
      onChange={onChange}
      required
      />
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
