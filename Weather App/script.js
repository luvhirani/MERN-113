document.getElementById("search-button").addEventListener("click", function(){
    let cityName = document.getElementById("input").value;
    console.log(cityName)
    let weatherData = fetchWeatherData(cityName);
    weatherData.then((data)=>{
        console.log(data)
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("current-temp").innerHTML = 
    })

})

async function fetchWeatherData(city){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=894693f36e8238ad2e5e6ab70160baac&units=metric`)
        const data = await response.json()
        return data;

    } catch (error) {
        console.log(error)
    }
}


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=894693f36e8238ad2e5e6ab70160baac&units=metric