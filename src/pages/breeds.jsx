import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useBreeds } from "../hooks/useBreeds";
import { useSearchImages } from "../hooks/useSearchImages";

export function Breeds() {
  const [breed, setBreed] = useState("");
  const { breeds } = useBreeds();
  const { images } = useSearchImages(breed);

  const handleChange = (e) => setBreed(e.target.value);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="breed-label">Fetch breed</InputLabel>
        <Select
          labelId="breed-label"
          label="Breed"
          value={breed}
          onChange={handleChange}
        >
          {breeds.map((breed) => (
            <MenuItem key={breed.id} value={breed.id}>
              {breed.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {images.map((image) => (
        <img key={image.id} src={image.image} />
      ))}
    </>
  );
}
