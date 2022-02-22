import React from "react";
import Rotas from "./routers/Rotas";
import theme from "./constant/theme.js"
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>        
        <Rotas/>
    </ThemeProvider>
  );
}

export default App;
