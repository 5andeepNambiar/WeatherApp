let weather = {
    "apiKey": "",
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
        ).then(response => response.json())
        .then(data => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed: " + speed + "Km/h";
    },

    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search button').addEventListener("click", function(){
    weather.search();
});


