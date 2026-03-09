const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // Toggle classes based on scroll position
    navbar.classList.toggle("nav-hidden", scrollY > lastScrollY && scrollY > 150);
    navbar.classList.toggle("scrolled", scrollY > 50);

    lastScrollY = scrollY;
});

// Carousel Logic
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(n) {
    if (!slides.length) return;

    // Simple logic to loop the index around
    index = (n + slides.length) % slides.length;

    // Toggle active classes based on matching index
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        if (dots[i]) dots[i].classList.toggle("active-dot", i === index);
    });
}

// Global functions for HTML buttons
window.changeSlide = (n) => showSlide(index + n);
window.currentSlide = (n) => showSlide(n);

// Start
showSlide(index);
setInterval(() => window.changeSlide(1), 6000);

// card slider (why us page)

const cardSliderContainer = document.querySelector(".slides");
const cardSlides = document.querySelectorAll(".slides img");

let cardIndex = 0;

if (cardSliderContainer && cardSlides.length > 0) {
    setInterval(() => {
        cardIndex++;
        if (cardIndex >= cardSlides.length) {
            cardIndex = 0;
        }
        cardSliderContainer.style.transform = `translateX(-${cardIndex * 100}%)`;
    }, 3000);
}

// location

function openMap() {
    window.open("https://www.google.co.in/maps/search/Axon+Ev/@52.2528972,10.8114298,19z?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D", "_blank");
}

// ev map

function openEvMap() {
    window.open(
        "https://www.google.com/maps/search/ev+charging+stations/@19.0326248,73.0490375,16262m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
        "_blank"
    );
}

    // <!-- rent-graph-section -->

const rentCanvas = document.getElementById('rentChart');
if (rentCanvas) {
    const ctx = rentCanvas.getContext('2d');
    const rentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2018','2019','2020','2021','2022','2023','2024','2025','2026'], // Years
            datasets: [{
                label: 'Number of Rentals',
                data: [0, 20, 5, 15, 22, 28, 35, 40, 45], 
                backgroundColor: 'rgba(77, 166, 255, 0.2)',
                borderColor: 'rgba(77, 166, 255, 1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(77, 166, 255, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: '#ffffff' },
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    ticks: { color: '#ffffff', font: { size: 14 } },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: '#ffffff', stepSize: 5 },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

// Contact Us

function openGmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent('Contact from Axon Ev Website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=yashtambade56@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank'); 
    return false; 
}

// video

const video = document.getElementById('evVideo');
const playBtn = document.getElementById('playBtn');

// Play video when button is clicked
playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.display = 'none';
});

// Show replay button when video ends
video.addEventListener('ended', () => {
    playBtn.style.display = 'block';
    playBtn.textContent = "Click Me"; 
});

playBtn.addEventListener('click', () => {
    if (video.ended) {
        video.currentTime = 0; 
        video.play();
    }
});