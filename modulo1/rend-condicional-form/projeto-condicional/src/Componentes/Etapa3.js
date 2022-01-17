import React from "react";
import styled from "styled-components";

class Etapa3 extends React.Component{

    state = {
        inputCurso:"",
        inputUnidade:""
    }

    render() {
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <h4>7.Por que voçê não terminou um curso de graduação?</h4>
                <input/>
                <h4>8.Você fez algum curso complemanetar?</h4>
                <input/>
            </div>
        )
    }
}
export default Etapa3;