 var tom , tomSleep , tomRunning , tomSitting;
 var jerry , jerryEating, jerryTeasing , jerryStaring; 
 var scene , sceneImg;
 var invisibeleGround;

    function preload() {
    
    tomSleep = loadImage("tomOne.png");
    tomRunning = loadAnimation("tomTwo.png", "tomThree.png");
    tomSitting = loadImage("tomFour.png");
    
    jerryEating = loadImage("jerryOne.png");
    jerryTeasing = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryStaring = loadImage("jerryFour.png");
   
    sceneImg = loadImage("garden.png");

    
}

  function setup(){ 

 createCanvas(800,800);

 scene = createSprite(200,200,800,800);
 scene.addImage(sceneImg);

 tom = createSprite(550,400,20,20);
 tom.addImage(tomSleep);
 tom.scale=0.1;

 jerry = createSprite(100,400,20,20);
 jerry.addImage(jerryEating);
 jerry.scale=0.1;

 invisiGround = createSprite(300,450,790,7);
 invisiGround.visible = false;
 
}

 function draw() {

 tom.depth = jerry.depth;
 tom.depth = tom.depth + 1;

KeyPressed();

 if(keyDown(LEFT_ARROW)){

 tom.velocityX = -3;

 tom.addAnimation("catRunning" , tomRunning);
 tom.changeAnimation("catRunning");
}
 
  if(keyDown(LEFT_ARROW)){

 
  jerry.addAnimation("mouseTeasing" , jerryTeasing);
  jerry.changeAnimation("mouseTeasing");
}


  drawSprites();

}
function KeyPressed(){
if(tom.x - jerry.x   < ( tom.width - jerry.width  ) /2){
  
  tom.velocityX = 0;
  tom.addAnimation("catSitting" , tomSitting);
  tom.changeAnimation("catSitting");
  tom.x = 165;
 
  jerry.addAnimation("mouseStaring" ,jerryStaring );
  jerry.changeAnimation("mouseStaring");


}

}