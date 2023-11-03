import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";

const linkSx = {
  "&:hover": {
    borderBottom: "2px solid #F2E9E4",
  },
};

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ marginLeft: 4, gap: 3 }}>
          <PetsIcon />
          <Typography variant="h6" component={Link} to="/" sx={linkSx}>
            Feed
          </Typography>
          <Typography variant="h6" component={Link} to="/breeds" sx={linkSx}>
            Breeds
          </Typography>
          <Typography variant="h6" component={Link} to="/favorites" sx={linkSx}>
            Favorites
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
