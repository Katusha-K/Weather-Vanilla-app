function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.temperature.current);
  let temperatuteElement = document.querySelector("#temperature");
  temperatuteElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
}

let apiKey = "b3fd63364t03b40b59o6a5657ae079db";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Amsterdam&key=b3fd63364t03b40b59o6a5657ae079db&units=metric";

axios.get(apiUrl).then(displayTemperature);
