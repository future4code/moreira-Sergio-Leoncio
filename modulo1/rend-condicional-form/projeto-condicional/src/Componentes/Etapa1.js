import React from "react";
import styled from "styled-components";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

class Etapa1 extends React.Component {

    
    
    
    render() {

       
        return (

            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <h4>1.Qual o seu nome?</h4>
                <input/>  
                
                <h4>2.Qual sua idade?</h4>
                <input/>                   
                
                <h4>3.Qual seu email?</h4>
                <input/>                   
                
                <h4>4.Qual a sua escolaridade?</h4>
                <input /> 
                        
            </div>

        )
    }
}
export default Etapa1;