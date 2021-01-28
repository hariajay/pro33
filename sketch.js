const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var eng,wld
var ground1
var plinkos = []
var divisions = []
var particles = []
var img,picture
var type = 1
var score = 0
var g1,g2,g3,g4,g5
var gameState = 1
var increament = 0
var last,pc,star,count=0
var end
var lk=2
var r,d,t,n
var c=0,j=1
var co=1
var p1,y=-500

function preload(){
  img = loadImage("plinko.png")
  picture = loadImage("bgp.jpg")
  end = loadImage("over.png")
  star = loadImage("award.png")
  r = loadImage("button1.png")
  d = loadImage("button2.jpg")
  p1  =loadImage("paper.png")
}
function setup() {
  createCanvas(465,627);
    eng = Engine.create()
    wld = eng.world

    var option = {
      isStatic:true
    }
    g1 = Bodies.rectangle(205,623,490,7,option)
    World.add(wld,g1)
    g2 = Bodies.rectangle(205,1.5,480,7,option)
    World.add(wld,g2)
    g3 = Bodies.rectangle(2,310,7,640,option)
    World.add(wld,g3)
    g4 = Bodies.rectangle(463,310,7,640,option)
    World.add(wld,g4)
    g5 = Bodies.rectangle(232.5,619.5,458,7,option)
    World.add(wld,g5) 

    for(var v=105; v<375; v=v+80){
      for(var p = 12; p <= 465; p=p+40){
       plinkos.push(new Plinko(p,v,4.5,4.5))
      } 
    }
    for(var n=145; n<415; n=n+80){
      for(var s = 30; s <= 465; s=s+40){
       plinkos.push(new Plinko(s,n,4.5,4.5))
      } 
    }
    for(var d=8; d<width; d=d+64.08){
      divisions.push(new Division(d,540,7,175))
    }
}
function draw() {
  background(30);  
  Engine.update(eng)

 imageMode(CENTER)
 if(j==2){
  image(picture,235,315,470,630)
  image(img,230,30,140,30)
  fill(250,200,150)
  textSize(20)
  text("SCORE: "+score,17,35)
 }
 if(gameState == 1){
  image(picture,235,315,470,630)
  image(r,150,70,90,35)
  image(d,300,70,80,30)
  fill("blue")
  textSize(20)
  text("In which way you want to icreament score?",40,35)
 }
 if(gameState==2){
  image(picture,235,315,470,630)
  image(img,230,30,140,30)
  fill(250,200,150)
  textSize(20)
  text("SCORE: "+score,17,35)
 }
 rectMode(CENTER)
 if(co==2){
 fill(20)
 textSize(20)
 text("100",20,480)
 text("50",95,480)
 text("0",162,480)
 text("80",220,480)
 text("10",285,480)
 text("150",345,480)
 text("250",410,480)
 }
 fill("yellow")
 rect(230,410,460,2)
 
 for(var D=0; D<divisions.length; D++){
  divisions[D].display()
 }
 for(var Z=0; Z<particles.length; Z++){
   particles[Z].display()
 }
 fill("pink")
 rect(g1.position.x,g1.position.y,525,7)
 rect(g2.position.x,g2.position.y,525,7)
 rect(g3.position.x,g3.position.y,7,635)
 rect(g4.position.x,g4.position.y,7,635)
 fill("brown")
 rect(g5.position.x,g5.position.y,453,7)
  
 for (var P = 0; P < plinkos.length; P++){
  plinkos[P].display()
 }
 if(count>8){
   j=2
 }
 if(count>9){
  gameState=4
  lk=3
  score = score+=0
  }
  if(count>9 && pc[0]>0 && pc[0]<455 && pc[1]>570){
    image(picture,235,315,470,630)
    image(end,230,200,250,100)
    image(img,230,60,200,50)
    fill(250,200,15)
    text("SCORE: "+score,180,470)

   if(score>2000){
      y+=5
      image(star,310,310,70,70)
      image(star,230,310,70,70)
      image(star,150,310,70,70)
      image(p1,230,y,460,600)
      textSize(30)
      fill("red")
      text("YOU WON!",160,435)
      fill("blue")
      text("Congratulations!",120,390)
      if(y>900){
        y = y+=0
      }
    }
    if(score>500 && score<1300){
      image(star,240,310,70,70)
      textSize(30)
      fill("blue")
      text("Try once more!",150,390)
    }
    if(score>1300 && score<2000){
       image(star,195,310,70,70)
       image(star,275,310,70,70)
       textSize(30)
       fill("blue")
      text("You were near to goal!",100,390)
    }
  }
}
function mousePressed(){
  if(lk == 2 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
    increament = 1
  }
  if(mouseX>20 && mouseX<450 && mouseY>40 && mouseY<95 && gameState == 2){
  particles.push(new Particle(mouseX,mouseY,7))
  count+=1
 }
if(mouseX>105 && mouseX<190 && mouseY>50 && mouseY<90 && gameState==1){
  gameState=2
  co=1
 }
if(mouseX>260 && mouseX<340 && mouseY>55 && mouseY<80 && gameState==1){
  gameState=2
  co=2
 }
}
