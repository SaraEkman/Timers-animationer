let hero = document.getElementById("hero");
let bottom = 200;
let left = 20;
let counter = 0;

function jump() {
    let timer = setInterval(function() {
        counter++
        bottom += 10;

        if (counter == 10) {
            clearInterval(timer)

            let timerdown = setInterval(function() {
                if (bottom == 200) { clearInterval(timerdown) }
                bottom -= 10;
                hero.style.bottom = bottom + "px";
            }, 30);
        };

        hero.style.bottom = bottom + "px";

    }, 30);
    counter = 0;
    console.log(counter);
}

document.addEventListener("keyup", function(evt) {
    switch (evt.key) {
        // case "ArrowRight":
        //     left += 10;
        //     hero.style.left = left + "px";
        //     break;
        // case "ArrowLeft":
        //     left -= 10;
        //     hero.style.left = left + "px";
        //     break;
        case "ArrowUp":
            jump();
            break;

        default:
            break;
    }
})

// let id = null;

function myMove() {
    let elem = document.getElementById("hole" + holeNum);
    let test = elem.id
     let pos = 1100;
    clearInterval(test);
    test = setInterval(frame, 15);

    function frame() {
        if (pos == -50) {
            clearInterval(test);
            // myMove();
        } else {
            pos--;
            elem.style.left = pos + 'px';
        }
    }
}
let holeNum = 0;
function holeCreater() {
    let holeDiv = document.createElement("div")
    holeDiv.setAttribute("id", "hole" + holeNum)
    holeDiv.setAttribute("class", "hole")
    game.append(holeDiv)
}

function yourFunction(){
    // do whatever you like here
    holeCreater()
    myMove()
    setTimeout(yourFunction, 3200);
    holeNum++
}

yourFunction();