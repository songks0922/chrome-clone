const API_KEY = '43f7dd683daba6942406b2c5b52790aa';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  const weatherIcon = document.createElement('img');

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:nth-child(2)');
      const city = document.querySelector('#weather span:nth-child(3)');
      const imgUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherIcon.classList.add('weatherIcon');
      weatherIcon.setAttribute('src', imgUrl);
      document
        .querySelector('#weather span:first-child')
        .appendChild(weatherIcon);
      city.innerText = data.name;
      weather.innerText = `${data.main.temp.toFixed(1)}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
