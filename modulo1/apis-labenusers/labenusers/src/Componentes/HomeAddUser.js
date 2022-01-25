import React from "react";
//import styled from "styled-components";
//import axios from "axios";


// const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
// const headers = {
//   headers: {
//     Authorization: "sergio-henrique-moreira"
//   }
// }

class HomeAddUser extends React.Component  {
//   state = {
//     listaUsuario: [],
//     nome:"",
//     email:""    
//   }

//   componentDidMount() {
//     this.getAllUsers();
//   }

//   getAllUsers = () => {
//     axios
//       .get(url, headers)
//       .then((resposta) => {
//         this.setState({ listaUsuario: resposta.data});
//       })
//       .catch((error) => {
//         alert("Algo deu errado, tente novamente");
//       });
//   };

//   createUser = () => {
//     const body = {
//       name: this.state.nome,
//       email: this.state.email
//     }

//     axios.post(url, body, headers)
//     .then((resposta)=>{
//       console.log(resposta.data)
//      // alert(`O usuário foi criado com sucesso!`);
//         this.setState({nome:""})
//         this.setState({email:""})
//         this.getAllUsers();
//     })
//     .catch((error)=>{
//       console.log(error.response.data)
//       //alert(error);
//         this.setState({nome:""})
//         this.setState({email:""})
//     })
//   }

//   onChangeNome = (event) => {
//     this.setState({nome: event.target.value})
//   }
//   onChangeEmail = (event) => {
//     this.setState({email: event.target.value})
//   } 

  render() {
    // const listComponents = this.state.listaUsuario.map((novo) => {
    //   return <li key={novo.id}>{novo.name}</li>;             
    // });

    return (
       <div >
            {/* <input 
              placeholder="Nome:"
              value={this.state.nome}
              onChange={this.onChangeNome}
            />
            <input
              placeholder="Email:"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <button onClick={this.createUser}>Criar Usuário</button>
            {listComponents} */}
       </div>
   );
  }
}

export default HomeAddUser;
