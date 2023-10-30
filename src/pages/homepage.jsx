import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getDogs } from "../api-clients/dog-api-client";
import { Image } from "./image";

export function Homepage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function listDogs() {
      try {
        setDogs(await getDogs());
      } catch (error) {
        console.error(error);
      }
    }

    listDogs();
  }, []);

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {dogs.map((dog) => (
        <Image data={dog} key={dog.id} />
      ))}
    </Grid>
  );
}
