let gameStart = false
let paths = []
let currentLevel = 0
let step = 0

const BUTTONS = ["green", "red", "yellow", "blue"]

// $(document).on("keydown", function () {
//     if (gameStart === false) {
//         gameStart = true
//         nextLevel()
//     }
// })

$(document).on("click", function () {
    if (gameStart === false) {
        gameStart = true
        console.log(gameStart)
        currentLevel = 0
        nextLevel()
    }

    if (step >= currentLevel) {
        nextLevel()
    }
})

$(".button").on("click", function (event) {
    if (gameStart === true && step < currentLevel) {
        let button = event.target.classList[0]

        // animation
        playAudio(button)
        $("." + button).toggleClass("press")
        setTimeout(() => {
            $("." + button).toggleClass("press")
        }, 100);

        if (button == paths[step]) {
            step += 1
        }
        else {
            gameFail()
        }
    }
})

function nextLevel() {
    currentLevel += 1
    step = 0
    $("h1").text("Level " + currentLevel)

    let button = BUTTONS[randomNumber()]
    paths.push(button)
    $("." + button).animate(
        {
            opacity: 0.5,
            duration: 50
        }).animate(
            {
                opacity: 1.0,
                duration: 50
            }
        )
}
function playAudio(key) {
    switch (key) {
        case "green":
            let green = new Audio("./sounds/green.mp3")
            green.play()
            break;
        case "red":
            let red = new Audio("./sounds/red.mp3")
            red.play()
            break;
        case "yellow":
            let yellow = new Audio("./sounds/yellow.mp3")
            yellow.play()
            break;
        case "blue":
            let blue = new Audio("./sounds/blue.mp3")
            blue.play()
            break;
        default:
            break;
    }
}

function randomNumber() {
    let number = Math.floor(Math.random() * 4)
    return number
}

function gameFail() {
    currentLevel = 1
    paths.length = 0
    step = 0
    $("h1").text("The Game is over!!")
    setTimeout(() => {
        $("h1").text("Please Press A Key To Start")
        gameStart = false
    }, 1000);
}