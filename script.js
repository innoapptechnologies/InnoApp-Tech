// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// FAQ Toggles
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        item.classList.toggle("active");
    });
});

// Stats Counter Animation
const animateStats = () => {
    const stats = document.querySelectorAll(".stat-number");
    const speed = 200;

    stats.forEach(stat => {
        const updateCount = () => {
            const target = +stat.getAttribute("data-target");
            const count = +stat.innerText;
            const inc = target / speed;

            if (count < target) {
                stat.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                stat.innerText = target;
            }
        };
        updateCount();
    });
};

// Scroll Reveal Animation Enhanced
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                
                // Trigger stats animation if stats grid is in view
                if (entry.target.querySelector(".stat-number")) {
                    animateStats();
                }
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
};

// Initialize animations
window.addEventListener("DOMContentLoaded", reveal);