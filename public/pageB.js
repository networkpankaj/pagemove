let lastActivityTime = Date.now();
const inactivityLimit = 10 * 1000; // 10 seconds inactivity limit
let countdownInterval;
let timeLeft = 10;

function resetInactivityTimer() {
    lastActivityTime = Date.now();
    timeLeft = 10; // Reset countdown to 10 seconds
    document.getElementById('countdown').textContent = timeLeft;
}

// Add event listeners for user activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);

// Update countdown every second
countdownInterval = setInterval(() => {
    const currentTime = Date.now();
    const timeSinceLastActivity = currentTime - lastActivityTime;
    
    timeLeft = Math.max(0, Math.ceil((inactivityLimit - timeSinceLastActivity) / 1000));
    document.getElementById('countdown').textContent = timeLeft;

    if (timeSinceLastActivity > inactivityLimit) {
        console.log('Inactive for 10 seconds, redirecting...');
        window.location.href = '/pageA';
    }
}, 1000);

// Clean up interval when leaving the page
window.addEventListener('beforeunload', () => {
    clearInterval(countdownInterval);
});