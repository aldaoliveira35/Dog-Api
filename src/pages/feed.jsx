import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";

import { DogCard } from "../components/dog-card/DogCard";
import { LoadingPlaceholder } from "../components/loading-placeholder/LoadingPlaceholder";
import { useFavorites } from "../hooks/useFavorites";
import { useSearchImages } from "../hooks/useSearchImages";

export function Feed() {
  const [displayImages, setDisplayImages] = useState(false);
  const { images, loading } = useSearchImages(displayImages);
  const { favorites, addToFavorites, removeFavorite } =
    useFavorites(displayImages);

  return (
    <>
      {!displayImages && (
        <FeedLandingPage onShowImagesClick={() => setDisplayImages(true)} />
      )}

      {displayImages && loading && <LoadingPlaceholder />}
      {displayImages && !loading && (
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

function FeedLandingPage({ onShowImagesClick }) {
  return (
    <Box
      sx={{
        margin: -2,
        gap: 2,
        height: "calc(100% + 32px)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("/feed-background.png")',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Choosing your new best friend?</Typography>
      <Typography variant="h3">
        Welcome to Go Fetch
        <PetsIcon sx={{ gap: 2, fontSize: "40px" }} />
      </Typography>
      <Button variant="contained" onClick={onShowImagesClick}>
        Show images
      </Button>
    </Box>
  );
}
