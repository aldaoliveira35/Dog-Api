import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";

import { Homepage } from "./pages/homepage.jsx";
import { Breeds } from "./pages/breeds.jsx";
import { Upload } from "./pages/upload.jsx";
import { NavBar } from "./components/nav-bar/NavBar";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Box sx={{ height: "calc(100% - 50px)" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
