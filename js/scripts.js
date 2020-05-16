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

//Event Listeners 
door1.addEventListener('click', (e)=>{
  e.target.src = openDoor1;
})

door2.addEventListener('click', (e)=>{
  e.target.src = openDoor2;
})

door3.addEventListener('click', (e)=>{
  e.target.src = openDoor3;
})


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

randomChoreDoorGenerator();
