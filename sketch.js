//Create variables here

var dog,happyDog, database, foodS, foodStock;
var dogImage, happyDogImage;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale = 0.4;
  
 // dog.addImage(happyDogImage);
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(46, 139, 87);

  if (foodS !== undefined){

  
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    
if (foodS > 0){
  dog.addImage(happyDogImage)
}
  }

  if (keyWentUp(UP_ARROW)){
    dog.addImage(dogImage);
  }



textSize(30);
fill("White");
text("Feed the Dog by pressing up arrow!", 15,50);

text("food remaining : "+ foodS, 130,100);



  drawSprites();
  //add styles here
  
 
}

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref("/").update({
  Food : x
})
}



