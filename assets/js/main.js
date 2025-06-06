

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