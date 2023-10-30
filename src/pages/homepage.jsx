import { useEffect, useState } from "react";
import { Grid, CircularProgress, Box, Typography } from "@mui/material";
import { searchImages, addFavoriteImage } from "../api-clients/dog-api-client";
import { DogCard } from "../components/dog-card/DogCard";

export function Homepage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFavorite = (image) => {
    addFavoriteImage(image.id);
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function listImages() {
      try {
        const response = await searchImages(abortController.signal);
        if (response) {
          const formattedResponse = response.map((image) => {
            const breed = image.breeds.map((breed) => breed.name).join(" / ");

            return {
              breed: breed || "Unknown Breed",
              image: image.url,
              id: image.id,
            };
          });
          setImages(formattedResponse);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    listImages();

    return () => {
      abortController.abort();
    };
  }, []);

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
          {images.map((image) => (
            <Grid item key={image.id} xs={6} md={4} lg={3} xl={2}>
              <DogCard
                title={image.breed}
                image={image.image}
                onFavoriteClick={() => {
                  handleFavorite(image);
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
