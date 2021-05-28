var tom,jerry;
var tomImg1,jerryImg1,tomImg2,jerryImg2,tomImg3,jerryImg3;
var garden,gardenImg;
var canvas;
function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png");
tomImg1=loadAnimation("images/cat1.png");
jerryImg1=loadAnimation("images/mouse1.png");
tomImg2=loadAnimation("images/cat2.png","images/cat3.png");

jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");

tomImg3=loadAnimation("images/cat4.png");
jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
 canvas=   createCanvas(1000,800);

    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tom",tomImg1);
tom.scale=0.2;
jerry=createSprite(200,600);
jerry.addAnimation("jerry",jerryImg1);
jerry.scale=0.15;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<tom.width/2-jerry.width/2 
   ){
       tom.velocityX=0;
        tom.addAnimation("tom",tomImg3);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tom")
        jerry.addAnimation("jreey",jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jreey");
    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===(LEFT_ARROW)){
    tom.velocityX=-5;
    tom.addAnimation("tomRen",tomImg2);
    tom.changeAnimation("tomRen");

    jerry.addAnimation("jreeyT",jerryImg2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jreeyT");
}
}