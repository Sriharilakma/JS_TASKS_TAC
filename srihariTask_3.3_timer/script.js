// Arrays for months and weekdays
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Select elements
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// Get current date
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

// Set future date (2 days from now)
const futureDate = new Date(currentYear, currentMonth, currentDay + 2, 23, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Format month and weekday
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

// Update the giveaway text
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours - 12}:${minutes} PM`;

// Get future time in milliseconds
const futureTime = futureDate.getTime();

function remainingTime() {
    const today = new Date().getTime();
    const leftTime = futureTime - today;
    // Time constants
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Calculate remaining time
    let days = Math.floor(leftTime / oneDay);
    let hours = Math.floor((leftTime % oneDay) / oneHour);
    let minutes = Math.floor((leftTime % oneHour) / oneMinute);
    let seconds = Math.floor((leftTime % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    // Format numbers
    function format(value) {
        return value < 10 ? `0${value}` : value;
    }

    // Update UI
    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    // Check if time expired
    if (leftTime < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}

// Update countdown every second
let countdown = setInterval(remainingTime, 1000);

// Initial call to set remaining time
remainingTime();




