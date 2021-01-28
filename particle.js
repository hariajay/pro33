class Particle{
  constructor(x,y,radius){
    var option = {
        restitution:0.4,
        friction:0.01
    }
    this.Body = Bodies.circle(x,y,radius,option)
    this.radius = radius
    this.color = color (random(40,220),random(40,220),random(40,220))
    World.add(wld,this.Body)
  }
  display(){
    var pos = this.Body.position
    var v1 = Math.round(random(15,300))
    push()
    ellipseMode(RADIUS)
    fill(this.color)
    ellipse(pos.x,pos.y,this.radius,this.radius)
    pop()
    last = particles[particles.length-1]
    pc = [last.Body.position.x,last.Body.position.y]
   if(co==1){
    if(pc[0]>0 && pc[0]<455 && pc[1]>570 && increament==1){
      find = 5
      if(find==5){
      score+=v1
      }
      increament=0
    }
   }
   if(co == 2){
    if(pc[0]>10 && pc[0]<75 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 100
      if(find == 100){
        score+=100
      }
      increament=0
     }
     if(pc[0]>75 && pc[0]<135 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 50
      if(find == 50){
        score+=50
        } 
      increament=0
    }
    if(pc[0]>135 && pc[0]<200 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 0
      if(find == 0){
        score+=0
      }
      increament=0
    }
    if(pc[0]>200 && pc[0]<265 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 80
      if(find == 80){
        score+=80
      } 
      increament=0
    }
    if(pc[0]>265 && pc[0]<325 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 10
      if(find == 10){
        score+=10
          }
      increament=0
    }
    if(pc[0]>330 && pc[0]<390 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 150
      if(find == 150){
        score+=150
      }
      increament=0
    }
    if(pc[0]>395 && pc[0]<455 && pc[1]>465 && increament==1 && mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
      find = 250
      if(find == 250){
        score+=250
         }
      increament=0
    }
    if(increament == 0){
      score = score+=0
    }
  }
}
}