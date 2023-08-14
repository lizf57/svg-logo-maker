// import shape classes
const { Circle, Triangle, Square } = require("../shapes.js")

// test circle with green background
describe("Circle", () => {
    test("Test for a circle logo with green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
    });
});

// test triangle with yellow background
describe("Triangle", () => {
    test("Test for a triangle logo with yellow background", () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`);
    });
});

// test square with orange background
describe("Square ", () => {
    test("Test for a square logo with orange background", () => {
        const shape = new Square();
        shape.setColor("#FFA500"); 
        expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="#FFA500" />`);
    });
});