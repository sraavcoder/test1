var to1,to2,to3,m1,m2,m3,b1,b2,b3;
var t11,t22,t33,m11,m22,m33,b11,b22,b33;
var t111,t222,t333,m111,m222,m333,b111,b222,b333;
var t1111,t2222,t3333,m1111,m2222,m3333,b1111,b2222,b3333;
var a,b,c,d,e,f,g,h,i;
var s1,s2,s3,s4,s5,s6,s7,s8,s9;
var t01,t02,t03,t04,t05,t06,t07,t08,t09;
var v1,v2,v3,v4,v5,v6,v7,v8,v9;
var n1,n2,n3,n4,n5,n6,n7,n8,n9;

var t1,t2,t3,t4,t5,t6,t7,t8,t9;

var I1,I2,I3,I4,I5,I6,I7,I8,I9;

var ok = false;

var s = 0.5;

var sp = [];
var im = [];
var im2 = [];
var im3 = [];
var im4 = [];
var im5 = [];
var im6 = [];
var im7 = [];
var im8 = [];
var im9 = [];

var test = [null,null,null,null,null,null,null,null];

var image1,image2,image3,image4,image5,image6,image7,image8,image9;

var mage;

var moves = 0;

var gameState = 0;

function preload(){
  to1 = loadImage("images/top1.jpg");
  to2 = loadImage("images/top2.jpg");
  to3 = loadImage("images/top3.jpg");
  m1 = loadImage("images/mid1.jpg");
  m2 = loadImage("images/mid2.jpg");
  m3 = loadImage("images/mid3.jpg");
  b1 = loadImage("images/bottom1.jpg");
  b2 = loadImage("images/bottom2.jpg");
  b3 = loadImage("images/bottom3.jpg");
  im = [to1,to2,to3,m1,m3,b1,b2,b3];

  image1 = loadImage("images/m.jpg");
  image2 = loadImage("image2/m.jpg");
  image3 = loadImage("image3/m.jpg");
  image4 = loadImage("image4/m.jpg");
  image5 = loadImage("image5/m.jpg");
  image6 = loadImage("image6/m.jpg");
  image7 = loadImage("image7/m.jpg");
  image8 = loadImage("image8/m.jpg");
  image9 = loadImage("image9/m.jpg");

  t11 = loadImage("image2/top1.jpg");
  t22 = loadImage("image2/top2.jpg");
  t33 = loadImage("image2/top3.jpg");
  m11 = loadImage("image2/mid1.jpg");
  m22= loadImage("image2/mid2.jpg");
  m33 = loadImage("image2/mid3.jpg");
  b11 = loadImage("image2/bottom1.jpg");
  b22 = loadImage("image2/bottom2.jpg");
  b33 = loadImage("image2/bottom3.jpg");
  im2 = [t11,t22,t33,m11,m33,b11,b22,b33];

  t111 = loadImage("image3/top1.jpg");
  t222 = loadImage("image3/top2.jpg");
  t333 = loadImage("image3/top3.jpg");
  m111 = loadImage("image3/mid1.jpg");
  m222= loadImage("image3/mid2.jpg");
  m333 = loadImage("image3/mid3.jpg");
  b111 = loadImage("image3/bottom1.jpg");
  b222 = loadImage("image3/bottom2.jpg");
  b333 = loadImage("image3/bottom3.jpg");
  im3 = [t111,t222,t333,m111,m333,b111,b222,b333];

  t1111 = loadImage("image4/top1.jpg");
  t2222 = loadImage("image4/top2.jpg");
  t3333 = loadImage("image4/top3.jpg");
  m1111 = loadImage("image4/mid1.jpg");
  m2222= loadImage("image4/mid2.jpg");
  m3333 = loadImage("image4/mid3.jpg");
  b1111 = loadImage("image4/bottom1.jpg");
  b2222 = loadImage("image4/bottom2.jpg");
  b3333 = loadImage("image4/bottom3.jpg");
  im4 = [t1111,t2222,t3333,m1111,m3333,b1111,b2222,b3333];

  a = loadImage("image5/top1.jpg");
  b = loadImage("image5/top2.jpg");
  c = loadImage("image5/top3.jpg");
  d = loadImage("image5/mid1.jpg");
  e = loadImage("image5/mid2.jpg");
  f = loadImage("image5/mid3.jpg");
  g = loadImage("image5/bottom1.jpg");
  h = loadImage("image5/bottom2.jpg");
  i = loadImage("image5/bottom3.jpg");
  im5 = [a,b,c,d,f,g,h,i];

  s1 = loadImage("image6/top1.jpg");
  s2 = loadImage("image6/top2.jpg");
  s3 = loadImage("image6/top3.jpg");
  s4 = loadImage("image6/mid1.jpg");
  s5 = loadImage("image6/mid2.jpg");
  s6 = loadImage("image6/mid3.jpg");
  s7 = loadImage("image6/bottom1.jpg");
  s8 = loadImage("image6/bottom2.jpg");
  s9 = loadImage("image6/bottom3.jpg");
  im6 = [s1,s2,s3,s4,s6,s7,s8,s9]; 
  
  t01 = loadImage("image7/top1.jpg");
  t02 = loadImage("image7/top2.jpg");
  t03 = loadImage("image7/top3.jpg");
  t04 = loadImage("image7/mid1.jpg");
  t05 = loadImage("image7/mid2.jpg");
  t06 = loadImage("image7/mid3.jpg");
  t07 = loadImage("image7/bottom1.jpg");
  t08 = loadImage("image7/bottom2.jpg");
  t09 = loadImage("image7/bottom3.jpg");
  im7 = [t01,t02,t03,t04,t05,t06,t07,t08,t09];

  v1 = loadImage("image8/top1.jpg");
  v2 = loadImage("image8/top2.jpg");
  v3 = loadImage("image8/top3.jpg");
  v4 = loadImage("image8/mid1.jpg");
  v5 = loadImage("image8/mid2.jpg");
  v6 = loadImage("image8/mid3.jpg");
  v7 = loadImage("image8/bottom1.jpg");
  v8 = loadImage("image8/bottom2.jpg");
  v9 = loadImage("image8/bottom3.jpg");
  im8 = [v1,v2,v3,v4,v6,v7,v8,v9];
  
  n1 = loadImage("image9/top1.jpg");
  n2 = loadImage("image9/top2.jpg");
  n3 = loadImage("image9/top3.jpg");
  n4 = loadImage("image9/mid1.jpg");
  n5 = loadImage("image9/mid2.jpg");
  n6 = loadImage("image9/mid3.jpg");
  n7 = loadImage("image9/bottom1.jpg");
  n8 = loadImage("image9/bottom2.jpg");
  n9 = loadImage("image9/bottom3.jpg");
  im9 = [n1,n2,n3,n4,n6,n7,n8,n9]; 

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  heading = createElement('h2'); 
  heading.html("< < <   SLIDE PUZZLE   > > >");
  heading.position(width/3,60);
  heading.style("font-size",width/30+'px');
  
  next = createButton("START THE GAME");
  next.position(width/2.5,height/1.5);
  next.style('background-color',color(162,239,234));
  next.style('border-radius','30px');
  next.style("width",'25%');
  next.style("height",'8%');
  next.style("font-size",width/65+'px');
  
  
  next.mousePressed(()=>{
    gameState = 1;
    heading.position(width/2.5,5);
    heading.style("font-size",width/50+'px');
     next.hide();
     select = createButton("Select");
     select.position(0+width/6,0+height/3);
     select.mousePressed(()=>{
      createSprites();
      sp = [t1,t2,t3,t5,t6,t7,t8,t9];
      addimages(); 
      select.hide();
      select2.hide();
      select3.hide();
      select4.hide();
      select5.hide();
      select6.hide();
      select7.hide();
      select8.hide();
      select9.hide();

      I1.x = 5000;
      I2.x = 5000;
      I3.x = 5000;
      I4.x = 5000;
      I5.x = 5000;
      I6.x = 5000;
      I7.x = 5000;
      I8.x = 5000;      
      I9.x = 5000;
      mage = createSprite(125,100);
      mage.addImage(image1);
      mage.scale = 0.35;
     })

     select2 = createButton("Select");
     select2.position(width/3+width/6,0+height/3);
     select2.mousePressed(()=>{
       s = 0.6;
      createSprites();
      sp = [t1,t2,t3,t5,t6,t7,t8,t9];
      addimages2(); 
      select.hide();
      select2.hide();
      select3.hide();
      select4.hide();
      select5.hide();
      select6.hide();
      select7.hide();
      select8.hide();
      select9.hide();

      I1.x = 5000;
      I2.x = 5000;
      I3.x = 5000;
      I4.x = 5000;
      I5.x = 5000;
      I6.x = 5000;
      I7.x = 5000;
      I8.x = 5000;      
      I9.x = 5000;
      mage = createSprite(125,100);
      mage.addImage(image2);
      mage.scale = 0.25;
     })     

     select3 = createButton("Select");
     select3.position(2*width/3+width/6,0+height/3);
     select3.mousePressed(()=>{
       s = 0.4;
      createSprites();
      sp = [t1,t2,t3,t5,t6,t7,t8,t9];
      addimages3(); 
      select.hide();
      select2.hide();
      select3.hide();
      select4.hide();
      select5.hide();
      select6.hide();
      select7.hide();
      select8.hide();
      select9.hide();

      I1.x = 5000;
      I2.x = 5000;
      I3.x = 5000;
      I4.x = 5000;
      I5.x = 5000;
      I6.x = 5000;
      I7.x = 5000;
      I8.x = 5000;      
      I9.x = 5000;
      mage = createSprite(145,130);
      mage.addImage(image3);
      mage.scale = 0.2;
     })   
     
     select4 = createButton("Select");
     select4.position(0+width/6,10+3*height/5);
     select4.mousePressed(()=>{
       s = 0.42;
      createSprites();
      sp = [t1,t2,t3,t5,t6,t7,t8,t9];
      addimages4(); 
      select.hide();
      select2.hide();
      select3.hide();
      select4.hide();
      select5.hide();
      select6.hide();
      select7.hide();
      select8.hide();
      select9.hide();

      I1.x = 5000;
      I2.x = 5000;
      I3.x = 5000;
      I4.x = 5000;
      I5.x = 5000;
      I6.x = 5000;
      I7.x = 5000;
      I8.x = 5000;      
      I9.x = 5000;
      mage = createSprite(145,140);
      mage.addImage(image4);
      mage.scale = 0.2;
     })  
     chooseImage();

  

  select5 = createButton("Select");
  select5.position(width/3+width/6,10+3*height/5);
  select5.mousePressed(()=>{
    s = 0.9 ;
   createSprites();
   sp = [t1,t2,t3,t5,t6,t7,t8,t9];
   addimages5(); 
   select.hide();
   select2.hide();
   select3.hide();
   select4.hide();
   select5.hide();
   select6.hide();
   select7.hide();
   select8.hide();
   select9.hide();

   I1.x = 5000;
   I2.x = 5000;
   I3.x = 5000;
   I4.x = 5000;
   I5.x = 5000;
   I6.x = 5000;
   I7.x = 5000;
   I8.x = 5000;      
   I9.x = 5000;
   mage = createSprite(125,100);
   mage.addImage(image5);
   mage.scale = 0.45;
  })  

  select6 = createButton("Select");
  select6.position(2*width/3+width/6,10+3*height/5);
  select6.mousePressed(()=>{
    s = 1.25;
   createSprites();
   sp = [t1,t2,t3,t5,t6,t7,t8,t9];
   addimages6(); 
   select.hide();
   select2.hide();
   select3.hide();
   select4.hide();
   select5.hide();
   select6.hide();
   select7.hide();
   select8.hide();
   select9.hide();

   I1.x = 5000;
   I2.x = 5000;
   I3.x = 5000;
   I4.x = 5000;
   I5.x = 5000;
   I6.x = 5000;
   I7.x = 5000;
   I8.x = 5000;      
   I9.x = 5000;
   mage = createSprite(112,120);
   mage.addImage(image6);
   mage.scale = 0.57;
  })  


  select7 = createButton("Select");
  select7.position(width/6,15+2*height/2.3);
  select7.mousePressed(()=>{
    s = 0.4;
   createSprites();
   sp = [t1,t2,t3,t5,t6,t7,t8,t9];
   addimages7(); 
   select.hide();
   select2.hide();
   select3.hide();
   select4.hide();
   select5.hide();
   select6.hide();
   select7.hide();
   select8.hide();
   select9.hide();

   I1.x = 5000;
   I2.x = 5000;
   I3.x = 5000;
   I4.x = 5000;
   I5.x = 5000;
   I6.x = 5000;
   I7.x = 5000;
   I8.x = 5000;      
   I9.x = 5000;
   mage = createSprite(115,100);
   mage.addImage(image7);
   mage.scale = 0.2;
  })  

  select8 = createButton("Select");
  select8.position(width/3+width/6,15+2*height/2.3);
  select8.mousePressed(()=>{
    s = 0.7;
   createSprites();
   sp = [t1,t2,t3,t5,t6,t7,t8,t9];
   addimages8(); 
   select.hide();
   select2.hide();
   select3.hide();
   select4.hide();
   select5.hide();
   select6.hide();
   select7.hide();
   select8.hide();
   select9.hide();

   I1.x = 5000;
   I2.x = 5000;
   I3.x = 5000;
   I4.x = 5000;
   I5.x = 5000;
   I6.x = 5000;
   I7.x = 5000;
   I8.x = 5000;      
   I9.x = 5000;
   mage = createSprite(115,100);
   mage.addImage(image8);
   mage.scale = 0.28;
  }) 
  select9 = createButton("Select");
  select9.position(2*width/3+width/6,15+2*height/2.3);
  select9.mousePressed(()=>{
    s = 1.1;
   createSprites();
   sp = [t1,t2,t3,t5,t6,t7,t8,t9];
   addimages9(); 
   select.hide();
   select2.hide();
   select3.hide();
   select4.hide();
   select5.hide();
   select6.hide();
   select7.hide();
   select8.hide();
   select9.hide();

   I1.x = 5000;
   I2.x = 5000;
   I3.x = 5000;
   I4.x = 5000;
   I5.x = 5000;
   I6.x = 5000;
   I7.x = 5000;
   I8.x = 5000;      
   I9.x = 5000;
   mage = createSprite(115,100);
   mage.addImage(image9);
   mage.scale = 0.45;
  }) 
})
  
}

function chooseImage(){
  I1 = createSprite(width/6+10,height/6);
  I1.addImage(image1);
  I1.scale = width/4571;

  I2 = createSprite(width/3+width/6+10,height/6);
  I2.addImage(image2);
  I2.scale = width/6400;

  I3 = createSprite(2*width/3+width/6+10,height/6);
  I3.addImage(image3);
  I3.scale = width/7272;

  I4 = createSprite(width/6+10,2*height/4);
  I4.addImage(image4);
  I4.scale = width/10666;

  I5 = createSprite(width/3+width/6+10,2*height/4);
  I5.addImage(image5);
  I5.scale = width/4000;

  I6 = createSprite(2*width/3+width/6+10,2*height/4);
  I6.addImage(image6);
  I6.scale = width/2909;

  I7 = createSprite(width/6+10,3*height/4);
  I7.addImage(image7);
  I7.scale = width/8000;

  I8 = createSprite(width/3+width/6+10,3*height/4);
  I8.addImage(image8);
  I8.scale = width/5333;

  I9 = createSprite(2*width/3+width/6+10,3*height/4);
  I9.addImage(image9);
  I9.scale = width/3555;

 

}

function createSprites(){
  t1 = createSprite(245,300, 65, 65);
  //t1.addImage(to1);
  t1.scale = s;
  t2 = createSprite(395,300, 65, 65);
  //t2.addImage(to2);
  t2.scale = s;
  t3 = createSprite(245,450, 65, 65);
 // t3.addImage(m1);
  t3.scale = s;
  t4 = createSprite(395,450,50,50);
  t4.shapeColor = color(0,179,223);
  t5 = createSprite(245,600,65,65);
//  t5.addImage(b1);
  t5.scale = s;
  t6 = createSprite(395,600,65,65);
  //t6.addImage(b2);
  t6.scale = s;
  t7 = createSprite(545,300,65,65);
 // t7.addImage(to3);
  t7.scale = s;
  t8 = createSprite(545,450,65,65);
  //t8.addImage(m3);
  t8.scale = s;
  t9 = createSprite(545,600,65,65);
 // t9.addImage(b3);
  t9.scale = s;

  
}

function addimages(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im.length-1));
     }
    test[i] = n;
    sp[i].addImage(im[n]);

  }
}
function addimages2(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im2.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im2.length-1));
     }
    test[i] = n;
    sp[i].addImage(im2[n]);

  }
}
function addimages3(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im3.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im3.length-1));
     }
    test[i] = n;
    sp[i].addImage(im3[n]);

  }
}
function addimages4(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im4.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im4.length-1));
     }
    test[i] = n;
    sp[i].addImage(im4[n]);

  }
}
function addimages5(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im5.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im5.length-1));
     }
    test[i] = n;
    sp[i].addImage(im5[n]);

  }
}
function addimages6(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im6.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im6.length-1));
     }
    test[i] = n;
    sp[i].addImage(im6[n]);

  }
}
function addimages7(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im7.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im7.length-1));
     }
    test[i] = n;
    sp[i].addImage(im7[n]);

  }
}
function addimages8(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im8.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im8.length-1));
     }
    test[i] = n;
    sp[i].addImage(im8[n]);

  }
}
function addimages9(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im9.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im9.length-1));
     }
    test[i] = n;
    sp[i].addImage(im9[n]);

  }
}

function contains(pick){
  //return true if the number is in the grid else false.
  for(var i = 0;i<sp.length;i++){
    
      if(test[i] === pick && test[i]!==null){
        return true;
    }  
  }
return false;
}

function moveSprites(){
  if(t1.x+150 == t4.x && t1.y == t4.y|| t1.x-150 == t4.x&& t1.y == t4.y||t1.y+150 == t4.y&&t1.x == t4.x||t1.y-150 == t4.y && t1.x == t4.x){
  if(mousePressedOver(t1)){
  var x = t1.x;
      var y = t1.y;
      t1.x = t4.x;
      t1.y = t4.y;
      t4.x = x;
      t4.y = y;
      moves = moves+1;
    }
    
    
  }
  if(t2.x+150 == t4.x && t2.y == t4.y|| t2.x-150 == t4.x && t2.y == t4.y||t2.y+150 == t4.y&&t2.x == t4.x||t2.y-150 == t4.y&&t2.x == t4.x){
   if(mousePressedOver(t2)){
     var x = t2.x;
     var y = t2.y;
     t2.x = t4.x;
     t2.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t3.x+150 == t4.x && t3.y == t4.y|| t3.x-150 == t4.x && t3.y == t4.y||t3.y+150 == t4.y&&t3.x == t4.x||t3.y-150 == t4.y&&t3.x == t4.x){
   if(mousePressedOver(t3)){
     var x = t3.x;
     var y = t3.y;
     t3.x = t4.x;
     t3.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t5.x+150 == t4.x && t5.y == t4.y|| t5.x-150 == t4.x && t5.y == t4.y||t5.y+150 == t4.y&&t5.x == t4.x||t5.y-150 == t4.y&&t5.x == t4.x){
   if(mousePressedOver(t5)){
     var x = t5.x;
     var y = t5.y;
     t5.x = t4.x;
     t5.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t6.x+150 == t4.x && t6.y == t4.y|| t6.x-150 == t4.x && t6.y == t4.y||t6.y+150 == t4.y&&t6.x == t4.x||t6.y-150 == t4.y&&t6.x == t4.x){
   if(mousePressedOver(t6)){
     var x = t6.x;
     var y = t6.y;
     t6.x = t4.x;
     t6.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t7.x+150 == t4.x && t7.y == t4.y|| t7.x-150 == t4.x && t7.y == t4.y||t7.y+150 == t4.y&&t7.x == t4.x||t7.y-150 == t4.y&&t7.x == t4.x){
   if(mousePressedOver(t7)){
     var x = t7.x;
     var y = t7.y;
     t7.x = t4.x;
     t7.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t8.x+150 == t4.x && t8.y == t4.y|| t8.x-150 == t4.x && t8.y == t4.y||t8.y+150 == t4.y&&t8.x == t4.x||t8.y-150 == t4.y&&t8.x == t4.x){
   if(mousePressedOver(t8)){
     var x = t8.x;
     var y = t8.y;
     t8.x = t4.x;
     t8.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t9.x+150 == t4.x && t9.y == t4.y|| t9.x-150 == t4.x && t9.y == t4.y||t9.y+150 == t4.y&&t9.x == t4.x||t9.y-150 == t4.y&&t9.x == t4.x){
   if(mousePressedOver(t9)){
     var x = t9.x;
     var y = t9.y;
     t9.x = t4.x;
     t9.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }

}

function drawGrid(){
  for(var i=0;i<3;i++){
    for(var j = 0;j<3;j++){
      fill("white")
      rect(437.5+i,66.5+j,65,65);
    }
  }
}

function draw() {
  background(0,179,223); 
  fill('white');
  if(gameState == 1){
  
  }
  if(t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8 && t9){
 moveSprites();
 // drawGrid();
 textSize(20);
 text('MOVES  :    '+moves,450,130);

}

  drawSprites();

}