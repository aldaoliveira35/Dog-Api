import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getDogs } from "../api-clients/dog-api-client";
import { Image } from "./image";

export function Homepage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function listDogs() {
      try {
        const response = await getDogs(abortController.signal);
        if (response) {
          setDogs(response);
        }
      } catch (error) {
        console.error(error);
      }
    }

    listDogs();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Grid spacing={2} container>
      {dogs.map((dog) => (
        <Grid item key={dog.id} xs={6} md={4} lg={3} xl={2}>
          <Image data={dog} />
        </Grid>
      ))}
    </Grid>
  );
}
