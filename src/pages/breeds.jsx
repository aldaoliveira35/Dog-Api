import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { useBreeds } from "../hooks/useBreeds";
import { useSearchImagesByBreed } from "../hooks/useSearchImagesByBreed";
import { LoadingPlaceholder } from "../components/loading-placeholder/LoadingPlaceholder";
import { DogCard } from "../components/dog-card/DogCard";
import { useFavorites } from "../hooks/useFavorites";

export function Breeds() {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const { breeds } = useBreeds();
  const { favorites, addToFavorites, removeFavorite } = useFavorites();
  const { images, loading } = useSearchImagesByBreed(selectedBreed?.id);

  const handleChange = (e) =>
    setSelectedBreed(breeds.find((breed) => e.target.value === breed.id));

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="breed-label">Fetch breed</InputLabel>
        <Select
          labelId="breed-label"
          label="Breed"
          value={selectedBreed?.id || ""}
          onChange={handleChange}
        >
          {breeds.map((breed) => (
            <MenuItem key={breed.id} value={breed.id}>
              {breed.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedBreed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>Breed name: {selectedBreed.name}</Typography>
          <Typography>Weight: {selectedBreed.weight}</Typography>
          <Typography>Height: {selectedBreed.height}</Typography>
          <Typography>Life span: {selectedBreed.lifeSpan}</Typography>
          <Typography>Origin: {selectedBreed.origin}</Typography>
          <Typography>Temperament: {selectedBreed.temperament}</Typography>
          <Typography>Bred for: {selectedBreed.bredFor}</Typography>
        </Box>
      )}

      {loading && <LoadingPlaceholder />}

      {!loading && (
        <Grid spacing={2} container>
          {images.map((image) => {
            const imageFavorite = favorites.find(
              ({ imageId }) => imageId === image.id
            );
            return (
              <Grid item key={image.id} xs={6} md={4} lg={3} xl={2}>
                <DogCard
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
