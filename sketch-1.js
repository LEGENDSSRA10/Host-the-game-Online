//var monkey, monkey_running;

//var banana, bananaImage, obstacle, obstacleImage;

//var FoodGroup, obstacleGroup;

//var score = 0;

//localStorage["HighestScore"] = 0;

//function preload()
//{
 //monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  //bananaImage = loadImage("banana.png");
  
  //obstaceImage = loadImage("obstacle.png");
  
  //gameOverImg = loadImage("gameOver.png");
  //restartImg = loadImage("restart.png");
//}

//function setup() 
//{
  //createCanvas(600, 200);
  
  //monkey = createSprite(50,180,20,50);
  //monkey.addAnimation("running", monkey_running);
  //monkey.scale = 0.5;
  
  //ground = createSprite(200,180,400,20);
  //ground.addImage("ground",groundImage);
  //ground.x = ground.width /2;
  //ground.velocityX = -(6 + 3*score/100);
  
  //gameOver = createSprite(300,100);
  //gameOver.addImage(gameOverImg);
  
  //restart = createSprite(300,140);
  //restart.addImage(restartImg);
  
  //gameOver.scale = 0.5;
  //restart.scale = 0.5;

  //gameOver.visible = false;
  //restart.visible = false;
  
  //invisibleGround = createSprite(200,190,400,10);
  //invisibleGround.visible = false;
  
  //FoodGroup = new Group();
  //obstacleGroup = new Group();
  
  //score = 0;
//}

//function draw() 
//{
  //background(255);
  //text("Score: "+ score, 500,50);
  
  //text("High Score :"+ localStorage["HighestScore"], 280, 50 );
//}

//BALLOON BUSTER COPY ------

var monkey, banana, obstacle;
var bg;
var points = 0;

function preload()
{
  monkey = loadImage("monkey.png");
  
  banana = loadImage("banana.png");
  
  bgImage = loadImage("bg.png");
}

function setup()
{
  bg = createSprite(100, 200, 600, 600);
  bg.addImage(bgImage);
  bg.scale=3;
  bg.velocityX = -3;
  bg.y = 100;
  
  createCanvas(600, 600)

  monkeyGroup = new Group();
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw()
{
  background(600);
  
  if(bg.x < 0)
    {
      bg.x = 300;
    }
  
  monkey.y = World.mouseY;
}


