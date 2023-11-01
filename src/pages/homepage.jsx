import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { DogCard } from "../components/dog-card/DogCard";
import { LoadingPlaceholder } from "../components/loading-placeholder/LoadingPlaceholder";
import { useFavorites } from "../hooks/useFavorites";
import { useSearchImages } from "../hooks/useSearchImages";

export function Homepage() {
  const { images, loading } = useSearchImages();
  const { favorites, addToFavorites, removeFavorite } = useFavorites();

  return (
    <>
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
