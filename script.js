// Optional: Add confetti or text effect
const h1 = document.getElementById('happy-birthday');

setInterval(() => {
    h1.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 500);