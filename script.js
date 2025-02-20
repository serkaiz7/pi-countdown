// Set target date to February 20, 2025, 8am UTC
const targetDate = new Date('2025-02-20T08:00:00Z').getTime();

// Get DOM elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');
const celebrationEl = document.getElementById('celebration');

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        // Countdown is over
        clearInterval(countdownInterval);
        countdownEl.style.display = 'none';
        celebrationEl.style.display = 'block';
    } else {
        // Calculate time remaining
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update display with leading zeros
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
}

// Initial call to set the countdown immediately
updateCountdown();

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
