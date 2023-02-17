import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

const App = () => {

 

  return (
    //Englobe toute l'appli
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/desserts" element={<Desserts />} />
        <Route path="/plats" element={<Plats />} /> */}
        <Route path="/about" element={<About />} />
        {/* path="*" sert a rediriger si l'url ne correspond a aucun chemin déclaré */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
