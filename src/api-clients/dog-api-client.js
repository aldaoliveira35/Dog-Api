const API_BASE_URL = "https://api.thedogapi.com/v1";
const API_KEY =
  "live_N6DMObLIWAVvIySPFGTfQzR0SgoPEn4K3tucu6NfdVjsi9qs0w4F5oRg6wIEFztm";

export function getDogs() {
  const searchParams = new URLSearchParams({ limit: 10 });
  return request("GET", "images/search?" + searchParams.toString());
}

async function request(method, endpointUrl) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpointUrl}`, {
      method,
      headers: { "x-api-key": API_KEY },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
