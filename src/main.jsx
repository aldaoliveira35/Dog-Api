import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { Feed } from "./pages/feed.jsx";
import { Breeds } from "./pages/breeds.jsx";
import { Upload } from "./pages/upload.jsx";
import { Favorites } from "./pages/favorites.jsx";
import { NavBar } from "./components/nav-bar/NavBar";
import "./styles/reset.css";
import "./styles/global.css";

const theme = createTheme({
  palette: {
    primary: { main: "#22223B" },
    secondary: { main: "#d73624" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 64px)",
          }}
        >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
