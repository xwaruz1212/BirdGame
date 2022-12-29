window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var block = document.getElementById("block");
    var gap = document.getElementById("gap");
    var character = document.getElementById("character")

    gap.addEventListener("animationiteration", () => {
        var random = - ((Math.random() * 400) + 150);
        gap.style.top = random + "px";
    })

    setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        character.style.top = (characterTop + 3) + "px";
        console.log(characterTop)
    }, 20)

});