const APP_ID ='58512e48c22a44a44cc7ddfa84707ee7';
const default_value = `--`;

const searchInput=document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temparature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change',(e)=> {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
.then(async res=>{
    const data= await res.json();
    console.log(`[Search Input]`, data);
    cityName.innerHTML= data.name|| default_value;
    weatherState.innerHTML = data.weather[0].description||default_value;
    weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    temparature.innerHTML=Math.round(data.main.temp)||default_value;

    sunrise.innerHTML=moment.unix(data.sys.sunrise).format(`H:mm`)||default_value;
    sunset.innerHTML= moment.unix(data.sys.sunset).format(`H:mm`)||default_value;

    humidity.innerHTML=data.main.humidity||default_value;
    windSpeed.innerHTML= (data.wind.speed*3.6).toFixed(2)||default_value;

})
});
