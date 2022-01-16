import styled from "styled-components";

export const Container = styled.div`
  background-color: #c2c2c2;
  width: 60%;
  min-height: 760px ;
  border-radius: 15px;
  text-align: left;
  padding: 10px;
  margin: 0 auto;  
  display: grid;
  justify-content: center;
  align-content: stretch;
  align-items: flex-end;
  `
export const ContainerDisplay = styled.div` 
  padding: 20px;
  word-wrap: break-word;
  width: 100px;
  background-color: #00a1ff;
  color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 0.5em;
  //margin-left: 70px;
    
`
// export const DisplayCampos = styled.span`
//   background-color: #00a1ff;
//   padding: 0.9em 0.8em;
//   border-radius: 0.5em;
//   font-weight: 450;
//   line-height: 1.3;
//   margin: 20px; 
 
export const ContainerCampos = styled.div` 
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: flex-start;
  flex-wrap: nowrap;
  `
export const CamposInput = styled.input`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px; 
  width: 90%;
  
`
export const botao = styled.button` 
  border-radius: 5px; 
  padding: 10px;  
  width:100px ;
  margin: 0 auto;
  cursor: pointer;
`
