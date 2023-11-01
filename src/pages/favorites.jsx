import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { DogCard } from "../components/dog-card/DogCard";
import { useFavorites } from "../hooks/useFavorites";

export function Favorites() {
  const { loading, favorites, removeFavorite } = useFavorites();

  return (
    <>
      {loading && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <CircularProgress />
          <Typography>Loading Happiness</Typography>
        </Box>
      )}
      {!loading && favorites.length === 0 && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <p>You don't have any favorites yet!</p>
          <Button component={Link} to="/" variant="outlined">
            Go Fetch them!
          </Button>
        </Box>
      )}
      {!loading && favorites.length > 0 && (
        <Grid spacing={2} container>
          {favorites.map((favorite) => (
            <Grid item key={favorite.id} xs={6} md={4} lg={3} xl={2}>
              <DogCard
                image={favorite.imageUrl}
                isFavorite
                onFavoriteClick={() => {
                  removeFavorite(favorite.id);
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
