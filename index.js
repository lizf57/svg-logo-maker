// import inquirer
const inquirer = require('inquirer');

// import file system
const fs = require('fs');

// import shape classes
const {Circle, Triangle, Square} = require('./lib/shapes');
const { time } = require('console');

// Function to write SVG file 
function writeToFile(fileName, answers) {
    let svgString = "";
    // 300x200 pixel image 
    svgString = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    // g element to group svg shape together 
    svgString += "<g>";
    // user input to svg file
    svgString += `${answers.shape}`

    // uses users input to choose shape and the color (dimensions found from svg logo example)
    let setShape;
    if (answers.shape === 'Circle'){
        setShape = new Circle();
        svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Triangle') {
        setShape = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Square') {
        setShape = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    }

    // uses users input to choose text and color (dimensions found from svg logo example)
    svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    // closing tags
    svgString += "</g>";
    svgString += "</svg>";

    // fs module generates svg file
    fs.writeFile(fileName, svgString, err => {
        if (err) {
            console.error("failed to generated logo.svg", err);
        } else console.log("generated logo.svg");
    });
}

