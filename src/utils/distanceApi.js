const API_KEY = import.meta.env.VITE_LOCATIONIQ_KEY;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function geocode(location) {
  const response = await fetch(
    `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${encodeURIComponent(location)}&format=json&countrycodes=us&limit=1`
  );

  if (!response.ok)
    throw new Error("Unable to find location.");

  const data = await response.json();

  if (!data.length)
    throw new Error("Location not found.");

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}

export async function getDistance(origin, destination) {
  const start = await geocode(origin);

  await sleep(500);

  const end = await geocode(destination);

  await sleep(500);

  const response = await fetch(
    `https://us1.locationiq.com/v1/directions/driving/${start.lng},${start.lat};${end.lng},${end.lat}?key=${API_KEY}&overview=false`
  );

  if (!response.ok)
    throw new Error("Unable to calculate distance");

  const data = await response.json();
  const meters = data.routes[0].distance;
  return Math.round(meters * 0.000621371);
}