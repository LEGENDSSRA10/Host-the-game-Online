var PLAY = 1;
var END = 0;
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var obstacleGroup, bananaGroup, ground;
var jungle, jungleImage;
var score = 0;
var gameOver, restart;

function preload()
 {
   monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
}

function setup()
 {
   createCanvas(600, 600);
   
   jungle = createSprite(0, 300, 600, 600);
   jungle.addImage(jungleImage);
   jungle.scale = 1.5;
   jungle.velocityX = -4;
  
   monkey = createSprite(300, 550, 100, 100);
   monkey.addAnimation("monkey",monkey_running);
   monkey.scale = 0.1;
   monkey.x = 50;

   ground = createSprite(200,550,400,20);
   ground.visible = false;
   ground.x = ground.width /2;
   ground.velocityX = -(6 + 3*score/100);
  
   bananaGroup = new Group();
   obstacleGroup = new Group();

   score = 0;
}

function draw() 
 {
   background("green");
   text("Score: "+ score, 500,50);
   
   if(jungle.x < 0)
   { 
    jungle.x = jungle.width/2;
   }
   
      if(keyDown("space"))
    {
      monkey.velocityY = -10;
    }
   
   ground.velocityX = -(6 + 3*score/100);
  
   monkey.velocityY = monkey.velocityY + 0.5;
   
   if (ground.x < 0)
    {
      ground.x = ground.width/2;
    }
   monkey.collide(ground);
   spawnBananas();
   spawnObstacles();
   
   if(monkey.scale === 0)
   {
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    jungle.velocityY = 0;
   
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    text("Game Over", 300, 300);
   }
   
drawSprites();
   
if(monkey.scale === 0)
  {
    background("green");
    stroke("white");
    fill("white");
    textSize(30);
    text("Game Over", 250, 275);
  }
   
if(monkey.isTouching(bananaGroup))
  {
    score = score+1;
    bananaGroup.destroyEach();
    monkey.scale = monkey.scale+0.1;
  }
  
if(monkey.isTouching(obstacleGroup))
  {
    monkey.scale = monkey.scale-0.1;
  }
}
  
function spawnObstacles()
{
 if(frameCount %200 === 0)
    {
      obstacle = createSprite(600, 550, 100, 100);
      obstacle.velocityX = -3;
      obstacle.addImage(obstacleImage);
      obstacle.lifetime = 300;
      obstacleGroup.add(obstacle);
      obstacle.scale = 0.1;
      obstacle.x = 600;
      
      obstacle.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;
    } 
}

function spawnBananas()
{
 if(frameCount %60 === 0)
    {
      banana = createSprite(100, 110, 100, 100);
      banana.velocityX = -3;
      banana.addImage(bananaImage);
      banana.lifetime = 300;
      bananaGroup.add(banana);
      banana.scale = 0.05;
      banana.y = Math.round(random(100,500));
      banana.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;
      banana.x = 600;
    }
}






