import { useState, useEffect } from "react";

import { searchImages } from "../api-clients/dog-api-client";

export function useSearchImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchImages() {
      try {
        const response = await searchImages(abortController.signal);

        if (response) {
          const formattedResponse = response.map((image) => {
            const breed = image.breeds.map((breed) => breed.name).join(" / ");

            return {
              id: image.id,
              image: image.url,
              breed: breed || "Unknown Breed",
            };
          });
          setLoading(false);
          setImages(formattedResponse);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();

    return () => {
      abortController.abort();
    };
  }, []);

  return { images, loading };
}
