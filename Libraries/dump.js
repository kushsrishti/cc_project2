for(var i=0; i<=10; i++){
    col[i] = get(30+i*60, mouseY);
    fill(col[i]);
    stroke(0);
    rect(i*60,550,60,30);

      
  stroke(255);
  line(0,mouseY,600,mouseY);
}

