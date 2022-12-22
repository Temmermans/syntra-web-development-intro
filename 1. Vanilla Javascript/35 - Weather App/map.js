const apiKey = `1f6a9c8ce89352d64bbf7e94026c2d82`;
console.log("ellow");

const getMap = () => {
  const map = L.map("map", {
    center: [51.505, -0.09],
    zoom: 2,
  });
  map.setView([51.05, 3.73], 10);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.tileLayer(
    `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${apiKey}`,
    {
      maxZoom: 18,
      layer: "temp_new",
      showLegend: true,
      legendImagePath: null,
      legendPosition: "bottomleft",
      attribution:
        'Weather from <a href="https://openweathermap.org/" alt="World Map and worldwide Weather Forecast online">OpenWeatherMap</a>',
    }
  ).addTo(map);
  return map;
};

const map = getMap();

const input = document.querySelector("input");
const button = document.querySelector("button");
console.log(button);
button.addEventListener("click", getWeatherFromCity);
function getWeatherFromCity() {
  const city = input.value;
  console.log(city);
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => data[0])
    .then((data) => ({ lat: data.lat, lon: data.lon }))
    .then((coordinates) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`
      )
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      map.setView([data.coord.lat, data.coord.lon], 10);
    });
}
