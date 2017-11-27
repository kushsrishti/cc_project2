

var imgb = [];
var ang = 0;
var img;
var brush_size = 100;
var c;

function preload() {
  img = loadImage("assets/project2.jpg");
}

function setup() {
  c = createCanvas(400, 500);
  //Background
  image(img, 0, 0);

  //  cut the image
  for (var x = 0; x < width; x += random(100, 25)) {
    for (var y = 0; y < height; y += random(15, 25)) {
      //
      var w = random(15, 25);
      var h = random(15, 25);
      append(imgb, new ImgBlock(img.get(x, y, w, h), x, y));
    }
  }
}

function draw() {
  if (mouseIsPressed) {
    for (var i = 0; i < imgb.length; i++) {

      var ib1 = imgb[i];

      var xoff = 5;
      var yoff = 5;
      var r = dist(mouseX, mouseY, ib1.x, ib1.y);
      
      var noisea1 = noise(ib1.x * 0.5, ib1.y * 0.05);
      var noisea2 = noise(ib1.x * 0.6, ib1.y * 0.06);


      if (r < brush_size) {
        ib1.x -= map(noisea1, 0, 1, -xoff, 0) * cos(ang);
        ib1.y -= map(noisea2, 0, 1, -yoff, 0) * sin(ang);
        // Shadow
        fill(0, 20);
        noStroke();
        translate(ib1.x,ib1.y);
        push();
        rect(int(ib1.x) + 5, int(ib1.y) + 5, ib1.img.width, ib1.img.height);
pop();
        // Fragment
        set(int(ib1.x), int(ib1.y), ib1.img);

        // Image Stroke
        noFill();
        stroke(0, 100);
        strokeWeight(0.5);
        rect(int(ib1.x) + 10, int(ib1.y) + 10, ib1.img.width, ib1.img.height);
      }
    }
    ang += 0.1;
  }

}
// Obj
function ImgBlock(_img, _x, _y) {
  this.x = _x;
  this.y = _y;
  this.img = _img;
}
