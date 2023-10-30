import { useState, useEffect } from "react";

import {
  getFavorites,
  addFavoriteImage,
  removeFavoriteImage,
} from "../api-clients/dog-api-client";

export function useFavorites() {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = async (imageId) => {
    const response = await addFavoriteImage(imageId);

    if (response.message === "SUCCESS") {
      setFavorites([...favorites, { id: response.id, imageId }]);
    }
  };

  const removeFavorite = async (favoriteId) => {
    const response = await removeFavoriteImage(favoriteId);

    if (response.message === "SUCCESS") {
      setFavorites(favorites.filter(({ id }) => id !== favoriteId));
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchFavorites() {
      try {
        const response = await getFavorites(abortController.signal);

        if (response) {
          const formattedResponse = response.map((favorite) => ({
            id: favorite.id,
            imageId: favorite.image.id,
          }));

          setLoading(false);
          setFavorites(formattedResponse);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchFavorites();

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    loading,
    favorites,
    addToFavorites,
    removeFavorite,
  };
}
