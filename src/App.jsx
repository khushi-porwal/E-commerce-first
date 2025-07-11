// src/App.jsx

import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/CompoundRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
