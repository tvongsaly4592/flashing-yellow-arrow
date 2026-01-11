// Function to toggle the 'is-flashing' class
function toggleFlash() {
    const arrow = document.querySelector('.flashing-arrow-container span');
    arrow.classList.toggle('is-flashing');
}

// Run the toggleFlash function every 500 milliseconds (0.5 seconds)
// This creates the visual flashing effect
setInterval(toggleFlash, 500);
