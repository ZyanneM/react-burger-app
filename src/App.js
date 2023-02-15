import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Desserts from "./pages/Desserts";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    //Englobe toute l'appli
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/desserts" element={<Desserts />} />
        {/* path="*" sert a rediriger si l'url ne correspond a aucun chemin déclaré */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
