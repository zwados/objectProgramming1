function Phone(brand, price, color, cpu, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.cpu = cpu;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". The processor has " + this.cpu + " of capacity, and the phone's weight is " + this.weight + " kg.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "1.8 GHz", 0.2);
var samsungGalaxyS6 = new Phone("Samsung", 1750, "white", "2.2 GHz", 0.225);
var onePlusOne = new Phone("OnePlus", 900, "black", "2,5 GHz", 0.240);