var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;
var back_ground,backgroundimg;
function preload() {
cat1=loadAnimation("images/tomOne.png")
cat2=loadAnimation("images/tomTwo.png","images/tomThree.png")
cat3=loadAnimation("images/tomFour.png")
mouse1=loadAnimation("images/jerryOne.png")
mouse2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
mouse3=loadAnimation("images/jerryFour.png")
backgroundimg=loadImage("images/garden.png")


    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back_ground = createSprite(500,400,10,10)
    back_ground.addImage(backgroundimg)
    cat = createSprite(700,600,10,10)
    cat.addAnimation("start",cat1)
    cat.scale=0.1
    mouse = createSprite(300,600,10,10)
    mouse.addAnimation("gift",mouse1)
    mouse.changeAnimation("gift")
    mouse.scale=0.1
}

function draw() {
    background("black");
    if(isTouching(mouse,cat)){
        mouse.addAnimation("search",mouse3)
        mouse.changeAnimation("search")
        cat.addAnimation("end",cat3)
        cat.changeAnimation("end")
        cat.velocityX=0
    }
    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    drawSprites();
    
}

function keyPressed(){
    if (keyDown("left")&&cat.x>mouse.x+167){
        mouse.addAnimation("dance",mouse2)
        mouse.changeAnimation("dance")
        cat.addAnimation("run",cat2)
        cat.changeAnimation("run")
        cat.velocityX=-6
    }
    
      //For moving and changing animation write code here
    
}
function isTouching(ob1,ob2){
    if (ob1.x-ob2.x<=ob2.width/2+ob1.width/2&&ob2.x-ob1.x<=ob2.width/2+ob1.width/2&&ob1.y-ob2.y<=ob1.height/2+ob2.height/2&&ob2.y-ob1.y<=ob1.height/2+ob2.height/2){
        return true;
    }else{
        return false;
    }
}


