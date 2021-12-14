const API_KEY = "0995e18987cc65722f368edbe45c43b6";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; 
        city.innerText = data.name;

    })
}
function onGeoError(){
    console.log("널 찾을 수 없어")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);