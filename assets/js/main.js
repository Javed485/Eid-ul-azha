

function updateText(text) {
    let delay = 200;
    let h1 = document.getElementById("animated");
    h1.innerHTML = text
        .split("")
        .map(letter => {
            console.log(letter);
            return `<span>` + letter + `</span>`;
        })
        .join("");

    Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("wavy");
        }, index * 60 + delay);
    });
}
updateText("I found my travel partner for life");




const heading_1 = {
    distance: "100px",
    origin: "top",
    duration: 5000,
    easing: "ease-in-out",
}
ScrollReveal().reveal(".home_content h1", {
    ...heading_1,
    origin: "top",
    delay: "500",
});



const heading_2 = {
    distance: "100px",
    duration: 2000,
    easing: "ease-in-out",
}
ScrollReveal().reveal(".test_block .box", {
    ...heading_2,
    origin: "bottom",
    delay: "200",
});


const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
        Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
    );
    confetti(
        Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
    );
}, 250);