const API_BASE_URL = "http://localhost:5173/api";
const API_KEY =
  "live_N6DMObLIWAVvIySPFGTfQzR0SgoPEn4K3tucu6NfdVjsi9qs0w4F5oRg6wIEFztm";

export function getBreeds(signal) {
  return request("GET", "breeds", null, signal);
}

export function addFavoriteImage(imageId) {
  return request("POST", "favourites", JSON.stringify({ image_id: imageId }));
}

export function removeFavoriteImage(favoriteId) {
  return request("DELETE", `favourites/${favoriteId}`);
}

export function getFavorites(signal) {
  return request("GET", "favourites", null, signal);
}

export function searchImages(signal, breedId) {
  const searchParams = new URLSearchParams({
    limit: 30,
    has_breeds: 1,
  });

  if (breedId) {
    searchParams.set("breed_ids", breedId);
  }

  return request(
    "GET",
    "images/search?" + searchParams.toString(),
    null,
    signal
  );
}

async function request(method, endpointUrl, body, signal) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpointUrl}`, {
      method,
      body,
      signal,
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
