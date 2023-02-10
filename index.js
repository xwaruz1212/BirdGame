window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var block = document.getElementById("block");
    var gap = document.getElementById("gap");
    var character = document.getElementById("character")
    var counter = 0;

    var flying = 0;

    gap.addEventListener("animationiteration", () => {
        var random = - ((Math.random() * 450) + 225);
        gap.style.top = random + "px";
        counter++;
    })

    setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (flying === 0) {
            character.style.top = (characterTop + 5) + "px";
        }
        var blockSide = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
        var cTop = -(750 - characterTop);
        if ((characterTop > 720) || ((blockSide < 30) && (blockSide > -75) && ((cTop < gapTop) || (cTop > gapTop + 195)))) {
            alert("YOU KILLED THIS BIRD. SCORE: " + (counter - 1))
            character.style.top = 150 + "px";
            counter = 0;
        }

    }, 15);

    function fly() {
        flying = 1;
        let flyCount = 0;

        var flyInterval = setInterval(() => {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > 10) && (flyCount < 20)) {
                character.style.top = (characterTop - 5) + "px"
            }
            if (flyCount > 15) {
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