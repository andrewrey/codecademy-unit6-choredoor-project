// Element Selectors / Global variables
let door1 = document.querySelector('#door1');
let door2 = document.querySelector('#door2');
let door3 = document.querySelector('#door3');
let botDoor = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';


//Event Listeners 
door1.addEventListener('click', (e)=>{
  e.target.src = botDoor;
})

door2.addEventListener('click', (e)=>{
  e.target.src = beachDoor;
})

door3.addEventListener('click', (e)=>{
  e.target.src = spaceDoor;
})