import React from "react";
import * as L  from "./styled";
import img_eddit from "../../assets/img_eddit.jpg";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpLogin = () => {
  useUnprotectedPage()
  return (    
      <L.ScreenContainer>
        <L.LogoImage src={img_eddit} />        
        <SignUpForm/>         
      </L.ScreenContainer>   
  );
};
export default SignUpLogin;