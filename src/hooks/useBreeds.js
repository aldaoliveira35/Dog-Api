import { useState, useEffect } from "react";
import { getBreeds } from "../api-clients/dog-api-client";

export function useBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchBreeds() {
      try {
        const response = await getBreeds(abortController.signal);

        if (response) {
          const formattedResponse = response.map((breed) => ({
            weight: breed.weight.metric,
            height: breed.height.metric,
            id: breed.id,
            name: breed.name,
            bredFor: breed.bred_for,
            lifeSpan: breed.life_span,
            temperament: breed.temperament,
            origin: breed.origin,
          }));

          setBreeds(formattedResponse);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreeds();

    return () => {
      abortController.abort();
    };
  }, []);

  return { breeds };
}
