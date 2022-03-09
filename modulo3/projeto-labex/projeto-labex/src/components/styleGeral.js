import styled from "styled-components";

export const ContainerLabex = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Helvetica;   
   text-align: center;
  }
`;
export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-block-start: 30px;
  background-color: beige;
  background-size: 100%;
  background-attachment: fixed;
`
export const ImgHome = styled.img`
 
  margin-top: 20px;
  border: 1px solid white;
  box-shadow: 1px 1px 4px black;
  width: 450px;
  max-width: 100vw;
  object-fit: cover; 
`;

export const Botoes = styled.button`
  margin: 30px;
  width: 90px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: red;
  color: white;
  :hover {
    opacity: 0.5;
  }
`;
export const FormInscricao = styled.form`
  box-shadow: 1px 1px 4px black;
  border: 1px solid white;
  border-radius: 10px;
  background-color: beige;
  height: 600px;
  width: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: auto;
`;
export const Input = styled.input`
  width: 300px;
  height: 30px;
  text-align: left;
  padding: 5px;
`;
export const FormLogin = styled.form`
  box-shadow: 1px 1px 4px black;
  border: 1px solid white;
  border-radius: 10px;
  background-color: beige;
  height: 400px;
  width: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: auto;
`;
export const Select = styled.select`
  width: 300px;
  height: 30px;
  text-align: left;
  padding: 5px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`
export const CardList = styled.ol`
  box-shadow: 1px 1px 4px black;
  border: 1px solid white;
  border-radius: 10px;
  background-color: beige;
  height: 150px;
  width: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;
export const CardAdmin = styled.ol`
  box-shadow: 1px 1px 4px black;
  border: 1px solid white;
  border-radius: 10px;
  background-color: beige;
  height: 80px;
  width: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;  
  margin: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export const ImgLixeira = styled.div`
  width: 30px;
  height: 30px;
  display:flex;
  margin: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
