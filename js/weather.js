const API_KEY = "1342811e475bc5f66d0c9a6bff50dfca";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C `;
        city.innerText = `@${data.name}`;
    });
}
function onGeoError(){
    alert("Sorry, we can't find where you are. No weather information loaded.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);