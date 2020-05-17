// Element Selectors / Global variables
let door1 = document.querySelector('#door1');
let door2 = document.querySelector('#door2');
let door3 = document.querySelector('#door3');
let botDoor = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.querySelector('#start');
let currentlyPlaying = true;


startRound();

console.log(numClosedDoors);
//Event Listeners 
door1.addEventListener('click', (e)=>{
  if(isClicked(e.target) && currentlyPlaying){
    e.target.src = openDoor1;
    playDoor(e.target);
    console.log(numClosedDoors);
  }
});

door2.addEventListener('click', (e)=>{
  if(isClicked(e.target) && currentlyPlaying){
    e.target.src = openDoor2;
    playDoor(e.target);
    console.log(numClosedDoors);
  }
});

door3.addEventListener('click', (e)=>{
  if(isClicked(e.target) && currentlyPlaying){
    e.target.src = openDoor3;
    playDoor(e.target);
    console.log(numClosedDoors);
  }
});

startButton.addEventListener('click', (e) => {
  if(currentlyPlaying === false){
    startRound();
  }
});

/// Function ///

//Random door generator

function randomChoreDoorGenerator(){
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoor;
    openDoor2 = beachDoor;
    openDoor3 = spaceDoor;
  } else if (choreDoor === 1){
    openDoor2 = botDoor;
    openDoor1 = beachDoor;
    openDoor3 = spaceDoor;
  } else if (choreDoor === 2){
    openDoor3 = botDoor;
    openDoor1 = spaceDoor;
    openDoor2 = beachDoor;
  }
}


// Doors function: Decreases num of doors variable and checks for winning condition

function playDoor(door){
  numClosedDoors -= 1;
  if (numClosedDoors === 0){
    gameOver('win');
  } else if (isBot(door)){
    gameOver();
  }

}

// Door single click function: Limits the number of times the same door can be clicked
function isClicked(door){
 if(door.src === closedDoorPath){
   return true;
 } else {
   return false;
 }
}


// end of game function

function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

// is bot function: checks if the door opened has a robot
function isBot(door){
  if(door.src === botDoor){
    return true;
  } else {
    return false;
  }
}

// reset function that restarts the game
function startRound(){
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}