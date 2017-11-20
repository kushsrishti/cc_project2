var img;
var imgBg;
var numElvises = 5;
function preload(){
  img = loadImage('assets/project.jpg');
  imgBg = loadImage('assets/project.jpg');
}

function setup() {
  createCanvas(798,960);
}

function draw() {
  background(255);
  image(imgBg, 0,0,width,height);
  //try different tints and repetition patterns
  //tint(100,0,0,150);
  
  for(var i=0; i < numElvises; i++){
    tint(255,i*10,0, map(mouseX, 0,width, 0, 255) );
    
    image(img,i*40,0,img.width/2,img.height/2);
  
  }

}