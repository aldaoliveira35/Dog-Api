import { Grid, CircularProgress, Box, Typography } from "@mui/material";

import { DogCard } from "../components/dog-card/DogCard";
import { useFavorites } from "../hooks/useFavorites";
import { useSearchImages } from "../hooks/useSearchImages";

export function Homepage() {
  const { images, loading } = useSearchImages();
  const { favorites, addToFavorites, removeFavorite } = useFavorites();

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
          }}
        >
          <CircularProgress sx={{ marginBottom: 2 }} />
          <Typography>Loading Happiness</Typography>
        </Box>
      )}
      {!loading && (
        <Grid spacing={2} container>
          {images.map((image) => {
            const imageFavorite = favorites.find(
              ({ imageId }) => imageId === image.id
            );

            return (
              <Grid item key={image.id} xs={6} md={4} lg={3} xl={2}>
                <DogCard
                  title={image.breed}
                  image={image.image}
                  isFavorite={imageFavorite !== undefined}
                  onFavoriteClick={() => {
                    imageFavorite !== undefined
                      ? removeFavorite(imageFavorite.id)
                      : addToFavorites(image.id);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}
