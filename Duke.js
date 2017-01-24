var Image1 = null;
var Image2 = null;
var avg = null;

function loadImage() { 
  var imgFile = 
document.getElementById("img1"); 
  Image1 = new SimpleImage(imgFile); 
  Image2 = new SimpleImage(imgFile); 
  var canvas = 
document.getElementById("can1"); 
  var canvas2 = 
document.getElementById("can2"); 
  Image1.drawTo(canvas); 
  Image2.drawTo(canvas2);
}

function reset() {
  var can = document.getElementById('can2');
  avg = null;
  var imgFile = document.getElementById("img1"); 
  Image2 = new SimpleImage(imgFile);
  Image2.drawTo(can);
}

function makeGray() { 
  for (var pixel of Image2.values()) { 
    avg = (pixel.getRed()+pixel.getGreen()
+pixel.getBlue())/3; 
    pixel.setRed(avg); 
    pixel.setGreen(avg); 
    pixel.setBlue(avg); 
  } 
  var imgcanvas = document.getElementById("can2"); 
  Image2.drawTo(imgcanvas); 
}

function makeRed() { 
  for (var pixel of Image2.values()) { 
    avg = (pixel.getRed()+pixel.getGreen()
+pixel.getBlue())/3; 
    if(avg<128){
    pixel.setRed(avg*2); 
    pixel.setGreen(0); 
    pixel.setBlue(0);
    }else{
    pixel.setRed(255); 
    pixel.setGreen(avg*2-255); 
    pixel.setBlue(avg*2-255);
    }
  } 
  var imgcanvas = document.getElementById("can2"); 
  Image2.drawTo(imgcanvas); 
}


function multiColor() { 
  for (var pixel of Image2.values()) {
    avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3; 
    if(pixel.getX() <= Image2.getWidth()/3) {
    pixel.setRed(avg); 
    pixel.setGreen(0); 
    pixel.setBlue(0); 
  } else if(pixel.getX() <= Image2.getWidth()*2/3){
    pixel.setRed(0); 
    pixel.setGreen(avg); 
    pixel.setBlue(0); 
  }else{
    pixel.setRed(0); 
    pixel.setGreen(0); 
    pixel.setBlue(avg); 
  }}
  var imgcanvas = document.getElementById("can2"); 
  Image2.drawTo(imgcanvas); 
}

function makeBlue() { 
  for (var pixel of Image2.values()) { 
     avg = (pixel.getRed()+pixel.getGreen()
+pixel.getBlue())/3; 
    if(avg<128){
    pixel.setRed(0); 
    pixel.setGreen(0); 
    pixel.setBlue(avg*2);
    }else{
    pixel.setRed(avg*2-255); 
    pixel.setGreen(avg*2-255); 
    pixel.setBlue(255);
    }
  } 
  var imgcanvas = document.getElementById("can2"); 
  Image2.drawTo(imgcanvas); 
}




function rainbow() { 
  for (var pixel of Image2.values()) {
    avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3; 
    if(pixel.getY() <= Image2.getHeight()/7) {
      if(avg<128){
    pixel.setRed(2*avg); 
    pixel.setGreen(0); 
    pixel.setBlue(0); 
      }else{
       pixel.setRed(255); 
       pixel.setGreen(2*avg-255); 
       pixel.setBlue(2*avg-255);  
      }    
  }else if(pixel.getY() <= Image2.getHeight()*2/7){
    if(avg<128){
    pixel.setRed(2*avg); 
    pixel.setGreen(0.8*avg); 
    pixel.setBlue(0); 
    }else{
    pixel.setRed(255); 
    pixel.setGreen(1.2*avg-51); 
    pixel.setBlue(2*avg-255); 
    }
  }else if(pixel.getY() <= Image2.getHeight()*3/7){
    if(avg<128){
    pixel.setRed(2*avg); 
    pixel.setGreen(2*avg); 
    pixel.setBlue(0); 
    }else{
    pixel.setRed(255); 
    pixel.setGreen(255); 
    pixel.setBlue(2*avg-255); 
    }
  }else if(pixel.getY() <= Image2.getHeight()*4/7){
    if(avg<128){
    pixel.setRed(0); 
    pixel.setGreen(2*avg); 
    pixel.setBlue(0); 
    }else{
    pixel.setRed(2*avg-255); 
    pixel.setGreen(255); 
    pixel.setBlue(2*avg-255); 
    }   
  }else if(pixel.getY() <= Image2.getHeight()*5/7){
   if(avg<128){
    pixel.setRed(0); 
    pixel.setGreen(0); 
    pixel.setBlue(2*avg); 
    }else{
    pixel.setRed(2*avg-255); 
    pixel.setGreen(2*avg-255); 
    pixel.setBlue(255); 
    }    
  }else if(pixel.getY() <= Image2.getHeight()*6/7){
  if(avg<128){
    pixel.setRed(0.8*avg); 
    pixel.setGreen(0); 
    pixel.setBlue(2*avg); 
    }else{
    pixel.setRed(1.2*avg-51); 
    pixel.setGreen(2*avg-255); 
    pixel.setBlue(255); 
    }    
  }else{
    if(avg<128){
    pixel.setRed(1.6*avg); 
    pixel.setGreen(0); 
    pixel.setBlue(1.6*avg); 
    }else{
    pixel.setRed(0.4*avg+153); 
    pixel.setGreen(2*avg-255); 
    pixel.setBlue(0.4*avg+153); 
    }    
  }
  }
  var imgcanvas = document.getElementById("can2"); 
  Image2.drawTo(imgcanvas); 
}
