var dog, happyDog, database, foodStock;
var dogS;
var foodS = 0
function preload()
{
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  milkImage = loadImage("images/Milk.png")
}

function setup() {
  createCanvas(500, 500);
  dogS = createSprite(250, 250, 15, 15);
  dogS.addImage(dog);
  dogS.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  milk = new Food ()
}


function draw() {  
background(46, 139, 87);
milk.display()
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dogS.addImage(happyDog);
}
button1 = createButton ("addFood")
button1.position(200, 100)
button1.mousePressed(function(){
  stockup(foodS)
})
imageMode(CENTER);
var x = 80
var y = 100
image(milkImage, 720, 220, 70, 70)
if(this.foodstock != 0 ){
  for(var i = 0; i < foodS; i++){
    if(i % 10 === 0){
      x = 80
      y = y + 50
    }
    image(milkImage, x, y , 50, 50)
    x  = x + 30
  }
}

drawSprites();
        
noStroke();
      textSize(20)
      fill("black")
      text("FoodStock" + foodS, 300, 100)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

database.ref("/").update({
  food:x - 1
})
}
 
function stockup(x) {
  x = x + 10
  database.ref("/").update({
food:x
  })
}






