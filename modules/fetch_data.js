export default async function getLocation() {
  const startUrl = 'https://api.wheretheiss.at/v1/'
  const endpoint = 'satellites/25544'
  const urlToFetch = `${startUrl}${endpoint}`;

  const response = await fetch(urlToFetch);
  try {
    const jsonResponse = await response.json();
    const iss = jsonResponse;
    const lat = iss.latitude;
    const lon = iss.longitude;
  }

  catch(error) {
    console.log(error);
  }
}