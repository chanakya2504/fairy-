function preload()

{
  fairy.loadAnimation("fairy.png","fairy1.png","fairy2.png")
  night = loadIMage("starnight.png")
  star = loadImage("star.png")
  sound = loadSound("JoyMusic.mp3")
   //preload the images here
}

function setup() {
  createCanvas(800, 750);
  fair = createSprite(200,200,10,10)
  fairy.addImgae("ff",fairy) 
  darknight = creaateSprite(200,100,20,20) 
  darknight.addImage("dd",night)
  image(darknight,width/2,height/2)
  joyo = createSprite(200,200,10,10)
  joyo.addSound("jj",sound)
  star1 = createSprite(10,10,200,200)
  star1.addImage("ss",star)
}


function draw() {
  background("black");
  fairy.setVelocity(3,0)
  
if(fairy.isTouching(star1)){
  joyo.playSound()
  fairy.setVelocity(0,0)
}




drawSprites()
}
