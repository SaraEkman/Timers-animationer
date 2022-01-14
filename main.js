let hero = document.getElementById("hero");
let pointsDiv = document.getElementById("pointsDiv")
let bottom = 200;
let left = 20;
let counter = 0;

let points = 0;



function jump() {
    let timer = setInterval(function() {
        counter++;
        bottom += 10;

        if (counter == 15) {
            clearInterval(timer);

            let timerdown = setInterval(function() {
                if (bottom == 210) { clearInterval(timerdown); }
                bottom -= 10;
                hero.style.bottom = bottom + "px";
                hero.style.backgroundImage = "url('hero.png')";
            }, 30);
        };

        hero.style.bottom = bottom + "px";

    }, 30);
    counter = 0;


}

document.addEventListener("keyup", function(evt) {

    if (evt.key === "ArrowUp" && bottom == 200) {
        hero.style.width = 60 + "px";
        hero.style.backgroundImage = "url('heroJump.png')";
        jump();
    }

});


function myMove() {
    let elem = document.getElementById("hole" + holeNum);
    let test = elem.id;
    let pos = 950;
    clearInterval(test);
    test = setInterval(frame, 5);


    function frame() {
        if (pos == -50) {
            clearInterval(test);
            elem.remove();
            points++;
            console.log(points);
            pointsDiv.innerText = "Score: " + points + " !";


        } else {
            pos--;
            elem.style.left = pos + 'px';
            if (pos <= 70 && bottom <= 200) {


                // hämta localstorage först, om points är högre än localstoarage så skriv över
                localStorage.setItem("highScore", points);
                location.reload()

                //skriv ut highscore på skärmen

                //NY PUSH NU MED DENNA

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
    setTimeout(yourFunction, 3000);
    holeNum++;

}

function start() {
    let btn = document.createElement("button")
    btn.innerText = "START"
    document.body.append(btn)
    btn.style.padding = "15px"
    btn.style.margin = "20px"
    btn.style.borderRadius = "10px"
    btn.style.fontSize = "1.5rem"
    btn.style.background = "lightgreen"

    btn.addEventListener("click", () => {
        yourFunction();
        btn.style.display = "none"
    })
}
start()



// let holeDivTest = document.querySelector(".hole");

// let test = holeDivTest.style.left = left + "px";

// console.log(test);

// if ((hero.style.bottom === 200) && (holeDivTest.style.left === left)) {
//     console.log("Här");
// }