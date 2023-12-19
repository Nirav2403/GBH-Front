import React from "react";
import "./App.css";
import RoutePaths from "./components/Routes/Route";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutePaths />
      </BrowserRouter>
    </div>
  );
}

export default App;
