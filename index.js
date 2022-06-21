// Add your Circle class here
const pi = Math.PI
class Circle {
    constructor(radius){
    this.radius = radius; 
    }
get diameter(){
    return this.radius * 2;
}
set diameter(diameter){
    this.radius = diameter / 2;
}
get circumference(){
    this.circumference = circumference;
}
set circumference(circumference){
    this.circumference = circumference / (pi* 2);
}
get area(){
    this.area = area;
}
set area(area){
    this.radius = Math.sqrt (area / pi);
}
}


