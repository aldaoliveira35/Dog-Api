import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

import { Homepage } from "./pages/homepage.jsx";
import { Breeds } from "./pages/breeds.jsx";
import { Upload } from "./pages/upload.jsx";
import { Favorites } from "./pages/favorites.jsx";
import { NavBar } from "./components/nav-bar/NavBar";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <NavBar />
        <Box sx={{ height: "calc(100% - 64px)", padding: 2 }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
