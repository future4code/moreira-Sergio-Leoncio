import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../constants/useForm";
import { BASE_URL } from "../constants/url";
import { useState } from "react";
import * as G from "../components/styleGeral";
import axios from "axios";

const ApplicationFormPage = (props) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const nextViagem = () => {
    navigate("/list");
  };

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  
  const enviar = (event) => {
    event.preventDefault();
    console.log("enviado", form);
    axios
      .post(`${BASE_URL}/darvas/trips/${id}/apply`, form)
      .then((response) => {
        console.log("Deu certo:", response.data);
        setId(response.data);
      })
      .catch((error) => {
        console.log("Deu errado:", error.response);
      });
    cleanFields();
  };

  const viagemList =
    props.tripsList.trips &&
    props.tripsList.trips.map((item) => {
      return <option value={item.id}>{item.name}</option>;
    });
  //console.log(props.tripsList.trips);

  const idOnchange = (event) => {
    setId(event.target.value);
    console.log(id);
  };

  return (
    <G.ContainerLabex>
      <h1>Labex</h1>
      <br />
      <h1>Inscreva-se para uma viagem</h1>
      <br />
      <G.FormInscricao onSubmit={enviar}>
        <G.Select onChange={idOnchange}>
          <option>Escolha uma viagem </option>
          {viagemList}
        </G.Select>
        <G.Input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
        />
        <G.Input
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <G.Input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto de Candidatura"
          required
          pattern={"^.{20,}"}
          title={"Máximo de 20 caracteres!"}
        />
        <G.Input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
        />
        <G.Input
          name={"country"}
          value={form.country}
          onChange={onChange}
          placeholder="País"
          required
        />
        {/* <select placeholder="Escolha um País">
          <option> Escolha um País </option>          
          {countries.map((country) => {
            return <option key={country}>{country}</option>;
          })}
        </select> */}
        <p>
          <G.Botoes onClick={nextViagem}>Voltar</G.Botoes>
          <G.Botoes>Enviar</G.Botoes>
        </p>
      </G.FormInscricao>
    </G.ContainerLabex>
  );
};

export default ApplicationFormPage;
