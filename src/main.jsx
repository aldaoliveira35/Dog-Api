import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Homepage } from "./pages/homepage.jsx";
import { Breeds } from "./pages/breeds.jsx";
import { Upload } from "./pages/upload.jsx";
import { NavBar } from "./components/nav-bar/NavBar";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Homepage />
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
