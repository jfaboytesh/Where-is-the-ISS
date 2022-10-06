import getLocation from './fetch_data.js';

export default async function getMap() {

  let map = L.map('map').setView([0, 0], 3);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


  const marker = L.marker([0, 0],).addTo(map);

}