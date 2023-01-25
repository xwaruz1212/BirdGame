window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var block = document.getElementById("block");
    var gap = document.getElementById("gap");
    var character = document.getElementById("character")

    var flying = 0;

    gap.addEventListener("animationiteration", () => {
        var random = - ((Math.random() * 400) + 150);
        gap.style.top = random + "px";
    })

    setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (flying === 0) {
            character.style.top = (characterTop + 4) + "px";
        }
        //console.log(characterTop)
    }, 10);

    function fly() {
        flying = 1;
        let flyCount = 0;

        var flyInterval = setInterval(() => {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > 20) && (flyCount < 30)) {
                character.style.top = (characterTop - 6) + "px"
            }
            if (flyCount > 20) {
                clearInterval(flyInterval);
                flying = 0;
                flyCount = 0;
            }
            flyCount++
        }, 20);
    }

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            fly()
        }
    })
});