class Food{
            constructor(){
                this.foodstock = 0
                this.lastfed = 0
                this.image = loadImage("images/Milk.png")
              
            }

display(){
imageMode(CENTER);

image(this.image, 720, 220, 70, 70)
}

deductfood (){
if(this.foodstock > 0){
  this.foodstock = this.foodstock - 1
}


}

updateFoodstock (foodstock){
  this.foodstock = foodstock
}







}