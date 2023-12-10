//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let font;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background(177, 212, 240);
  font = loadFont('assets/CourierPrime-Regular.ttf');
  textFont(font);
  
  text("TAKE CARE OF THE CLASS PET GAME",
    width / 2,
    height / 2 - 50
  );

  // 
  fill(240, 180, 96);
  rect(200,200,200,200);
  fill(245, 194, 122);
  rect(190,200,50,70);
  rect(360,200,50,70);
  fill('black');
  rect(260,230,10,10);
  rect(330,230,10,10);
  fill(235, 145, 145);
  rect(290,240,20,10);
  fill('black');
  
  // Create buttons for all screens
  enterButton = new Sprite(width/2, 300);
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = color(151, 180, 204);
  enterButton.text = "ENTER";

  a1Button = new Sprite(-200, -200);

  a2Button = new Sprite(-50, -50);

  b1Button = new Sprite(-150,-150);

  b2Button = new Sprite(-100,-100);
  
}

/* DRAW LOOP REPEATS */
function draw() {
  if(enterButton.mouse.presses()){
    print("pressed");
    showScreen1();
    screen = 1;
  }

  if (screen == 1){
    if(a1Button.mouse.presses()){
      print("display screen 2");
      showScreen2();
      screen = 2;
      
    } else if(a2Button.mouse.presses()){
      print("display screen 5");
      showScreen5();
      screen = 5;
    }
  } else if(screen == 2){
    if(b1Button.mouse.presses()){
      print("display screen 3");
      showScreen3();
      screen = 3;
      
    } else if(b2Button.mouse.presses()){
      print("display screen 4");
      showScreen4();
      screen = 4;
    }
    
  }
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
  background(134, 194, 240);
  text("welcome! your favorite teacher decided to surprise your class with a new class pet! everyone is deciding who will take it home for the weekend for the first time. will you volunteer?", 100, 100, 400, 300);
  describe('choose whether or not you\'d like to take care of the dog!');
  
  enterButton.x = -100;
  
  a1Button.x = 250;
  a1Button.y = 300;
  a1Button.w = 50;
  a1Button.collider = 'k';
  a1Button.color = color(208, 228, 245);
  a1Button.text = "YES";

  a2Button.x = 350;
  a2Button.y = 300;
  a2Button.w = 50;
  a2Button.collider = 'k';
  a2Button.color = color(112, 149, 179);
  a2Button.text = "NO";

}

function showScreen2(){
  background(162, 138, 209);
  text("nice! you go home with the energetic little dog and think of tasks to take care of it. do you want to play or eat first?", 100, 100,400,300);
  describe('choose whether or you want to eat or play with the dog');
  
  a1Button.x = -200;
  a1Button.y = -200;
  a2Button.x = -50;
  a2Button.y = -50;
  
  b1Button.x = 250;
  b1Button.y = 300;
  b1Button.w = 50;
  b1Button.collider = 'k';
  b1Button.color = color(197, 178, 235);
  b1Button.text = "PLAY";
  
  b2Button.x = 350;
  b2Button.y = 300;
  b2Button.w = 50;
  b2Button.collider = 'k';
  b2Button.color = color(133, 111, 179);
  b2Button.text = "EAT";
}

function showScreen3(){
  background(252, 227, 144);
  text("you decide to play fetch with the dog and you have so much fun you lose track of time. luckily you rush back home before it gets completely dark. you turn to release the dog from its leash but... the leash is already empty.", 100, 100, 400, 300);
  text("bad ending: you lost the dog", 100, 300, 400, 300);
  b1Button.x = -200;
  b1Button.y = -200;
  b2Button.x = -50;
  b2Button.y = -50;
}

function showScreen4(){
  background(255, 227, 234);
  text("you head to the kitchen only to remember you don't have dog food. you dont have any food at all actually. no worries though! you make a trip to the store and buy some ingredients to feed the both of you!", 100, 100, 400, 300);
  text("good ending: you both have a nice meal", 100, 300, 400, 300);
  b1Button.x = -200;
  b1Button.y = -200;
  b2Button.x = -50;
  b2Button.y = -50;
}

function showScreen5(){
  background(134, 186, 145);
  text("BAD ENDING!", width/2, 150);
  text("no one else wanted to bring the pet home... your teacher got rid of it.", 100, 200, 400, 300);
  a1Button.x = -150;
  a1Button.y = -150;
  a2Button.x = -100;
  a2Button.y = -100;
}
