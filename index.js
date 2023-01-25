window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var block = document.getElementById("block");
    var gap = document.getElementById("gap");
    var character = document.getElementById("character")
    var counter = 0;

    var flying = 0;

    gap.addEventListener("animationiteration", () => {
        var random = - ((Math.random() * 400) + 150);
        gap.style.top = random + "px";
        counter++;
    })

    setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (flying === 0) {
            character.style.top = (characterTop + 4) + "px";
        }
        if (characterTop > 760) {
            alert("YOU KILLED THIS BIRD. SCORE: " + counter)
            character.style.top = 100 + "px";
            counter = 0;
        }

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