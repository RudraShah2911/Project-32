const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground1, ground2, slingShot
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18
var ball 
var backgroundImg
var score = 0

function preload() {

    getBackgroundImg()


}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,390,1200,20)
    ground1 = new Ground (390,265,200,20)
    ground2 = new Ground (800,200,200,20)

    box1 = new Box (330,235,30,40)
    box2 = new Box (360,235,30,40)
    box3 = new Box (390,235,30,40)
    box4 = new Box (420,235,30,40)
    box5 = new Box (450,235,30,40)
    box6 = new Box (360,195,30,40)
    box7 = new Box (390,195,30,40)
    box8 = new Box (420,195,30,40)
    box9 = new Box (390,155,30,40)

    box10 = new Box (740,170,30,40)
    box11 = new Box (770,170,30,40)
    box12 = new Box (800,170,30,40)
    box13 = new Box (830,170,30,40)
    box14 = new Box (860,170,30,40)
    box15 = new Box (770,130,30,40)
    box16 = new Box (800,130,30,40)
    box17 = new Box (830,130,30,40)
    box18 = new Box (800,90,30,40)

    ball = new Ball (100,300,20)

    slingShot = new Slingshot (ball.body, {x : 100, y : 250})

}

function draw(){

    if (backgroundImg){
        background(backgroundImg)
    }
    //background("white")
    getBackgroundImg()
    Engine.update(engine)

    textSize(35)
    fill("white")
    text("Score  " + score, 500, 50)
    

    
    ground.display();
    ground1.display();
    ground2.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();

    ball.display();

    slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition (ball.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
    slingShot.fly()
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    //console.log(responseJSON)
    
    var datetime = responseJSON.datetime;
    //console.log(datetime)
    var hour = datetime.slice(11,13);
    //console.log(hour)
    //return hour

    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}