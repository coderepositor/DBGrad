/*function Pen(name,color,price){
    this.name = name;
    this.color = color;
    this.price = price;
}

Pen.prototype.showPrice = function(){
    console.log("Price of ",this.name," is ", this.price)
}
const pen1 = new Pen("Marker","Blue","$10");
//console.log(pen1);
pen1.showPrice();*/

class Pen{
    constructor(name,color,price){
        this.color = color;
        this.name = name;
        this.price = price;
    }
    showPrice(){
        console.log("Price of ",this.name," is ", this.price)
    }
}
const pen1 = new Pen('Marker','Blue','$6');
pen1.showPrice();
