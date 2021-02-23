var scribble = new Scribble(); 

var col = {
  r: 100,
  g: 200,
  b: 2
}; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  let d = select('.div-block')
  d.position(0,0)
  
  gui= new Gui();
  
  let gui_setup = new dat.GUI();
  
  gui_setup.add(gui, 'circles', 0,7).step(1);
  gui_setup.add(gui, 'r',0,255)
  gui_setup.add(gui, 'g',0,225)
  gui_setup.add(gui, 'b',0,255)
  gui_setup.add(gui, 'opacity', 0,255)
  
  gui_setup.add(gui, 'stars', 0,7).step(1);
  gui_setup.add(gui,"points",0,100);
  gui_setup.add(gui,"radius1",50,300);
  gui_setup.add(gui,"radius2",50,300);
  
  scribble = new Scribble();
  frameRate(3)
  
}

function draw() {
  background(gui.r, gui.g, gui.b,gui.opacity)
  col.r = random(20,20);
  col.g = random(100,260);
  col.b = random (10,90);
 
  
  fill (col.r, col.g, col.b,130)
  noStroke()
  if (gui.circles==0){
    
  }
  if (gui.stars==1){
    star(100, 100, gui.radius1, gui.radius2, gui.points);
  }
  if (gui.stars==2){
    star(windowWidth/2,windowHeight/4, gui.radius1, gui.radius2, gui.points);
    star(windowWidth/4,windowHeight/1.5, gui.radius1/2, gui.radius2, gui.points);
  }
  
  if (gui.stars==3){
    star(windowWidth/1.3,windowHeight/5, gui.radius1, gui.radius2, gui.points);
    star(windowWidth/2,windowHeight/3, gui.radius1, gui.radius2/2, gui.points);
    star(windowWidth/1.1,windowHeight/1.2, gui.radius1*3, gui.radius2, gui.points);
  }
  
  if (gui.stars==4){
    star(windowWidth-200,windowHeight/4, gui.radius1, gui.radius2, gui.points);
    star(windowWidth/1.1,windowHeight/1.2, gui.radius1/2, gui.radius2, gui.points);
    star(windowWidth-400,windowHeight/2, gui.radius1, gui.radius2, gui.points);
    star(windowWidth/4.8,windowHeight/3, gui.radius1/2, gui.radius2, gui.points);
  }
  
  if (gui.stars==5){
    star(windowWidth-300,windowHeight/4, gui.radius1, gui.radius2, gui.points);
    star(windowWidth-600,windowHeight-30, gui.radius1/2, gui.radius2, gui.points);
    star(400,376, gui.radius1, gui.radius2, gui.points);
    star(windowWidth,windowHeight/3, gui.radius1/3, gui.radius2, gui.points);
    star(windowWidth-200,windowHeight-600, gui.radius1, gui.radius2*2.4, gui.points);
  }
  
  if (gui.stars==6){
    star(windowWidth-200,windowHeight/4, gui.radius1/2, gui.radius2, gui.points);
    star(windowWidth/3,windowHeight/2, gui.radius1, gui.radius2, gui.points);
    star(200,50, gui.radius1, gui.radius2*2, gui.points);
    star(windowWidth/2,windowHeight/1.3, gui.radius1, gui.radius2, gui.points);
    star(windowWidth-200,windowHeight-600, gui.radius1/4, gui.radius2, gui.points);
    star(59,60, gui.radius1/2, gui.radius2, gui.points);
  }
  
  if (gui.stars==7){
    star(windowWidth-400,windowHeight/1.3, gui.radius1/2, gui.radius2, gui.points);
    star(600,30, gui.radius1, gui.radius2, gui.points);
    star(400,376, gui.radius1, gui.radius2*2, gui.points);
    star(5,windowHeight/4, gui.radius1, gui.radius2, gui.points);
    star(windowWidth-600,windowHeight-200, gui.radius1/4, gui.radius2, gui.points);
    star(windowWidth-30,60, gui.radius1/2, gui.radius2, gui.points);
    star(359,660, gui.radius1/2, gui.radius2, gui.points);
  }
  
  stroke(1)
  if (gui.circles==0){
    
  }
  if (gui.circles==1){
    scribble.scribbleEllipse( 100,100, 7, 50 );
  }
  if (gui.circles==2){
    scribble.scribbleEllipse(windowWidth/2,windowHeight/4,7,50 );
    scribble.scribbleEllipse(windowWidth/4,windowHeight/1.5,130,250);
  }
  if (gui.circles==3){
    scribble.scribbleEllipse(windowWidth/1.3,windowHeight/5,7,50 );
    scribble.scribbleEllipse(windowWidth/2,windowHeight/3,30,250);
  scribble.scribbleEllipse(windowWidth/1.1,windowHeight/1.2,230,250);
  }
  if (gui.circles==4){
    scribble.scribbleEllipse(windowWidth-200,windowHeight/4,7,50 );
    scribble.scribbleEllipse(windowWidth-400,windowHeight/2,30,250);
  scribble.scribbleEllipse(windowWidth/1.1,windowHeight/1.2,230,250);
    scribble.scribbleEllipse(windowWidth/4.8,windowHeight/3,30,50);
  }
  if (gui.circles==5){
    scribble.scribbleEllipse(windowWidth-300,windowHeight/4,7,50 );
    scribble.scribbleEllipse(windowWidth-600,windowHeight-30,30,250);
  scribble.scribbleEllipse(400,376,230,250);
    scribble.scribbleEllipse(windowWidth,windowHeight/3,30,50);
    scribble.scribbleEllipse(windowWidth-200,windowHeight-600, 300,40)
  }
  if (gui.circles==6){
    scribble.scribbleEllipse(windowWidth-200,windowHeight/4,7,50 );
    scribble.scribbleEllipse(windowWidth/3,windowHeight/2,30,250);
    scribble.scribbleEllipse(200,50,230,250);
    scribble.scribbleEllipse(windowWidth/2,windowHeight/1.3,30,50);
    scribble.scribbleEllipse(windowWidth-200,windowHeight-600, 300,40)
    scribble.scribbleEllipse(59,60, 300,400)
  }
  if (gui.circles==7){
    scribble.scribbleEllipse(windowWidth-400,windowHeight/1.3,7,50 );
    scribble.scribbleEllipse(600,30,30,250);
    scribble.scribbleEllipse(400,376,230,250);
    scribble.scribbleEllipse(5,windowHeight/4,30,50);
    scribble.scribbleEllipse(windowWidth-600,windowHeight-200, 300,40)
    scribble.scribbleEllipse(windowWidth-30,60, 300,400)
    scribble.scribbleEllipse(359,660, 30,40)
  }
}
function update (){
  redraw();
  
}
function Gui(){
  this.stars = 7
  this.circles = 7
  this.r = 255
  this.g = 255
  this.b = 255
  this.opacity = 255
  
  this.points = 10;
  this.radius1 = 150;
  this.radius2 = 170;
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}