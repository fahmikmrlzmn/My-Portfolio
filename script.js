// Smooth fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.style.opacity = 0;
    fader.style.transform = "translateY(20px)";
    fader.style.transition = "all 0.6s ease-out";
    appearOnScroll.observe(fader);
});
