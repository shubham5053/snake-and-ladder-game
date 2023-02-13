function createBoxes() {
    let boxes = "";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            y = (9 - i) * 50;
            x = j * 50;
            n = i * 10 + j + 1;
            if (i % 2 == 1) {
                x = (9 - j) * 50;
            }
            boxes += `<div class="box" style= 'margin:${y}px ${x}px '><p id=${n}>${n}</p></div>`
        }
    }
    document.querySelector("section").innerHTML = boxes;
}
createBoxes()
let playerPositionRed = 0;
let playerPositionblack = 0;
let haswon = false;
let ladder = new Map([[3, 24], [16, 52], [42, 81], [66, 91], [72, 29], [77, 7], [45, 20]]);
const player1 = () => {
    if (haswon) {
        return;
    }
    let randomNumber = Number(Math.floor(Math.random() * 6 + 1));
    playerPositionRed = randomNumber + playerPositionRed;
    if (playerPositionRed === playerPositionblack) {
        playerPositionblack = 0;
    }
    console.log("Player1 :", playerPositionRed);
    document.getElementById('number').innerText = randomNumber;
    playerPositionRed = ladder.get(playerPositionRed) ? ladder.get(playerPositionRed) : playerPositionRed;
    for (let index = 1, index1 = 100; index <= playerPositionRed || index1 >= playerPositionRed; index++, index1--) {
        document.getElementById(playerPositionRed ? index : index1)?.classList.remove('player');
    }
    document.getElementById(playerPositionRed)?.classList.add('player');
    if (playerPositionRed == 100) {
        console.log("red player Win");
        haswon = true;
    }
    if (randomNumber == 6) {
        document.getElementById('player1').style.visibility = 'visible';
    }
    else {
        document.getElementById('player1').style.visibility = 'hidden';
        document.getElementById('player2').style.visibility = 'visible';
    }
}
const player2 = () => {
    if (haswon) {
        return;
    }
    let randomNumber = Number(Math.floor(Math.random() * 6 + 1));
    playerPositionblack = randomNumber + playerPositionblack;
    if (playerPositionRed === playerPositionblack) {
        playerPositionRed = 0;
    }
    console.log("Player 2 :", playerPositionblack);
    document.getElementById('number1').innerText = randomNumber;
    playerPositionblack = ladder.get(playerPositionblack) ? ladder.get(playerPositionblack) : playerPositionblack;
    for (let index = 1, index1 = 100; index <= playerPositionblack || index1 >= playerPositionblack; index++, index1--) {
        document.getElementById(playerPositionblack ? index : index1)?.classList.remove('player1');
    }
    document.getElementById(playerPositionblack)?.classList.add('player1');
    if (playerPositionblack == 100) {
        console.log("black player win");
        haswon = true;
    }
    if (randomNumber == 6) {
        document.getElementById('player2').style.visibility = 'visible';
    } else {
        document.getElementById('player2').style.visibility = 'hidden';
        document.getElementById('player1').style.visibility = 'visible';
    }





}
































