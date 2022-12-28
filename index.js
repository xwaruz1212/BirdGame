window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    var block = document.getElementById("block");
    var gap = document.getElementById("gap");

    gap.addEventListener('animationiteration', () => {
        var random = -((Math.random() * 400) + 150);
        gap.style.top = random + "px";
    })
});