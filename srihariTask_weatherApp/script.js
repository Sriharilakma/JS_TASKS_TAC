const wholeContainer = document.querySelector(".whole-container");
const temperature = document.querySelector(".temperature");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const condition = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("location");
const search = document.querySelector(".search");
const button = document.querySelector(".search-btn");
const cities = document.querySelectorAll(".city");
const apiUrl = "https://api.weatherapi.com/v1/current.json";
const apiKey = "6a20a6a1fd9e49fd98b162850243011";

// Default city when page loads
let city = "India";

// Add click event to each city
cities.forEach((cityElement) => {
    cityElement.addEventListener("click", (e) => {
        city = e.target.innerHTML.trim();
        fetchWeatherData();
        wholeContainer.style.opacity = "0"; // Fade out the container
    });
});

// Add submit event to the form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (search.value.trim() === "") {
        alert("Please enter a location");
    } else {
        city = search.value.trim();
        fetchWeatherData();
        search.value = "";
        wholeContainer.style.opacity = "0"; // Fade out the container
    }
});

// Fetch weather data and update the UI
function fetchWeatherData() {
    fetch(`${apiUrl}?key=${apiKey}&q=${city}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data for ${city}`);
            }
            return response.json();
        })
        .then((data) => {
            // Update weather data
            // console.log("data", data)
            temperature.innerHTML = `${data.current.temp_c}&#176;C`;
            condition.innerHTML = data.current.condition.text;
            const date = data.location.localtime;
            const [y, m, d] = date.substr(0, 10).split("-").map(Number);
            const time = date.substr(11);

            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)}, ${d}/${m}/${y}`;
            timeOutput.innerHTML = time;
            nameOutput.innerHTML = data.location.name;

            // Update weather icon
            icon.src = `https:${data.current.condition.icon}`;
            cloudOutput.innerHTML = `${data.current.cloud}%`;
            humidityOutput.innerHTML = `${data.current.humidity}%`;
            windOutput.innerHTML = `${data.current.wind_kph} km/h`;

            // Update styles based on weather
            updateBackgroundAndStyle(data.current);
            wholeContainer.style.opacity = "1";
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
            wholeContainer.style.opacity = "1"; // Ensure visibility
        });
}

// Update background and button styles
function updateBackgroundAndStyle(current) {
    
    const code = current.condition.code;

    if (code === 1000) {
        // Clear weather
        wholeContainer.style.backgroundImage =
            "url('./clear.jpg')";
        button.style.background = "#FFA500";
        
    } else if ([1003, 1006, 1009, 1135].includes(code)) {
        // Cloudy weather
        wholeContainer.style.backgroundImage =
        "url('./clouds.jpg')";        
        button.style.background = "##00bfff";
       
    } else if ([1063, 1153, 1240, 1243].includes(code)) {
        // Rainy weather
        wholeContainer.style.backgroundImage =
        "url('./rain.jpg')";        
        button.style.background = "#0066ff";
      
    } else {
        // Snowy or other
        wholeContainer.style.backgroundImage =
        "url('./remaining.jpg')";        
        button.style.background = "#3388ff";
        
    }
}

// Determine day of the week
function dayOfTheWeek(day, month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()];
}

// Load default city weather on page load
fetchWeatherData();
