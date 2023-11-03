import { useEffect, useState } from "react";
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
import { useSearchImages } from "../hooks/useSearchImages";
import { LoadingPlaceholder } from "../components/loading-placeholder/LoadingPlaceholder";
import { DogCard } from "../components/dog-card/DogCard";
import { useFavorites } from "../hooks/useFavorites";

export function Breeds() {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const { breeds } = useBreeds();
  const { favorites, addToFavorites, removeFavorite } = useFavorites();
  const { images, loading } = useSearchImages(
    selectedBreed !== null,
    selectedBreed?.id
  );

  useEffect(() => {
    if (breeds.length > 0) {
      setSelectedBreed(breeds[0]);
    }
  }, [breeds]);

  const handleChange = (event) => {
    setSelectedBreed(breeds.find((breed) => event.target.value === breed.id));
  };

  return (
    <>
      <Box>
        <Typography sx={{ marginBottom: 2 }}>
          Searching for some details? Fetch the breed!
        </Typography>
      </Box>
      <FormControl sx={{ width: "33%", color: "primary" }}>
        <InputLabel id="breed-label">Breed</InputLabel>
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
            gap: 1,
            marginBottom: 1,
          }}
        >
          <Typography>Weight: {selectedBreed.weight || "unknown"}</Typography>
          <Typography>Height: {selectedBreed.height || "unknown"}</Typography>
          <Typography>
            Life span: {selectedBreed.lifeSpan || "unknown"}
          </Typography>
          <Typography>Origin: {selectedBreed.origin || "unknown"}</Typography>
          <Typography>
            Temperament: {selectedBreed.temperament || "unknown"}
          </Typography>
          <Typography>
            Bred for: {selectedBreed.bredFor || "unknown"}
          </Typography>
        </Box>
      )}

      {loading && <LoadingPlaceholder />}

      {!loading && images.length > 0 && (
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
