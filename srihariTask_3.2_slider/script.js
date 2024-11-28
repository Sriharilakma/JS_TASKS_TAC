// Select all slide elements and navigation buttons
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Position each slide side by side
slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`; // Set left offset for each slide
});

// Counter to track the current slide
let counter = 0;

// Event listener for the "Next" button
nextBtn.addEventListener("click", function() {
    counter++; // Move to the next slide
    carousel(); // Update the carousel
});

// Event listener for the "Prev" button
prevBtn.addEventListener("click", function() {
    counter--; // Move to the previous slide
    carousel(); // Update the carousel
});

// Function to update slide positions and button visibility
function carousel() {
    // Show/hide "Next" button
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }

    // Show/hide "Prev" button
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    // Move slides based on the counter value
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`; // Shift slides
    });
}

// Initial state: hide the "Prev" button
prevBtn.style.display = "none";
