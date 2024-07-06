
// Function to toggle the dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  // Update the button styles based on the current mode
  if (body.classList.contains('dark-mode')) {
    dayModeButton.style.display = 'none';
    nightModeButton.style.display = 'block';
  } else {
    dayModeButton.style.display = 'block';
    nightModeButton.style.display = 'none';
  }
}

// Add click event listeners to the buttons
dayModeButton.addEventListener('click', toggleDarkMode);
nightModeButton.addEventListener('click', toggleDarkMode);