let hero = document.getElementById("hero");
let bottom = 200;
let left = 20;
let counter = 0;



function jump() {
    let timer = setInterval(function () {
        counter++;
        bottom += 10;

        if (counter == 10) {
            clearInterval(timer);

            let timerdown = setInterval(function () {
                if (bottom == 200) { clearInterval(timerdown); }
                bottom -= 10;
                hero.style.bottom = bottom + "px";
            }, 30);
        };

        hero.style.bottom = bottom + "px";

    }, 30);
    counter = 0;
    console.log(counter);
}

document.addEventListener("keyup", function (evt) {
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
});

// let id = null;

function myMove() {
    let elem = document.getElementById("hole" + holeNum);
    let test = elem.id;
    let pos = 950;
    clearInterval(test);
    test = setInterval(frame, 15);

    let heroPos = window.getComputedStyle(document.querySelector("#hero")).bottom;
    let holePos = window.getComputedStyle(document.querySelector(".hole")).left;
    // console.log(holePos);


    function frame() {
        if (pos == -50) {
            clearInterval(test);
            elem.remove();
        } else {
            pos--;
            elem.style.left = pos + 'px';
            if (pos <= 70 && bottom <= 200) {
                location.reload()
            }
            
        }
    }
}



let holeNum = 0;
function holeCreater() {
    let holeDiv = document.createElement("div");
    holeDiv.setAttribute("id", "hole" + holeNum);
    holeDiv.setAttribute("class", "hole");
    game.append(holeDiv);
}

function yourFunction() {
    // do whatever you like here
    holeCreater();
    myMove();
    setTimeout(yourFunction, 3200);
    holeNum++;

}

function start() {
    let btn = document.createElement("button")
    btn.innerText = "Starta"
    document.body.append(btn)
    btn.style.padding = "8px"

    btn.addEventListener("click", () => {
        yourFunction();
        btn.style.display = "none"
    })
}
start()



let holeDivTest = document.querySelector(".hole");

let test = holeDivTest.style.left = left + "px";

console.log(test);

// if ((hero.style.bottom === 200) && (holeDivTest.style.left === left)) {
//     console.log("Här");
// }

