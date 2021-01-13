var player;
var playerAnimation;
var ground;
var groundimg;
var gameStates='play';
var obstaclesGroup;
function preload(){
playerAnimation = loadAnimation ('player/frame_0','player/frame_1', 'player/frame_2','player/frame_3','player/frame_4','player/frame_5','player/frame_6','player/frame_7')

groundimg = loadImage ('player/ground-clipart.png')

}

function setup() {
  createCanvas(800,400);
 
  player = new Player()
 player.body.addAnimation('playerRunning', playerAnimation)
 player.body.scale=0.1;

 ground = createSprite (600,380,800,20);
 ground.addImage("ground", groundimg)
 ground.scale = 0.15
 ground.setCollider("rectangle",0,0,ground.width,500)
 ground.debug = true
 //ground.x=ground.width/2

 ground.velocityX= -2
 
 obstaclesGroup = new Group();
}

function draw() {
  background("lightblue");  
  console.log (ground.width)
  if(gameStates==='play'){
if(ground.x<150){
  ground.x=600

}

if(keyDown(UP_ARROW)){
  player.body.velocityY = -10
}

player.body.velocityY = player.body.velocityY + 0.5
player.body.collide(ground)
  spawnObstacle();
  if(player.body.isTouching(obstaclesGroup)){
    gameStates= 'end'
  }
}else if(gameStates==='end'){
  ground.velocityX= 0;
}
  
  drawSprites();


}

function spawnObstacle(){
if (World.frameCount%120===0){
var obstacle = new Obstacle()
obstaclesGroup.add(obstacle.body)
}
}