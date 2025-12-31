// Create stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        starsContainer.appendChild(star);
    }
}

// Create confetti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    const numberOfConfetti = 50;
    
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * -100 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confettiContainer.appendChild(confetti);
    }
}

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0);
    
    const diff = newYear - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `เหลืออีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    } else {
        document.getElementById('countdown').textContent = '🎉 สวัสดีปีใหม่! 🎉';
    }
}

// Update year display
function updateYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createConfetti();
    updateYear();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add click effect
    document.addEventListener('click', (e) => {
        createClickConfetti(e.clientX, e.clientY);
    });
});

// Create confetti on click
function createClickConfetti(x, y) {
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    const confettiContainer = document.querySelector('.confetti-container');
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = (Math.random() * 8 + 4) + 'px';
        confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
        confetti.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

