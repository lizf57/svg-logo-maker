// parent shape class 
class Shape {
    constructor() {
        this.color="";
    }
    // setColor function to change color in the state
    setColor(colorVar){
        this.color = colorVar;
    }
}
// Circle class inherits Shape class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
// Triangle class inherits Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}
// Square class inherits Shape class
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>`;
    }
}

// exports circle, triangle, square classes
module.exports = {Circle, Triangle, Square};