import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import RoutePaths from "./components/Routes/Route";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <RoutePaths />
        </StyledEngineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
