import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const linkSx = {
  "&:hover": {
    borderBottom: "2px solid burlywood",
  },
};

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ marginLeft: 4, gap: 3 }}>
          <Typography variant="h6" component={Link} to="/" sx={linkSx}>
            Homepage
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
