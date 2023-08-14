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
        svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`;
    } else if (answers.shape === 'Triangle') {
        setShape = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
    } else if (answers.shape === 'Square') {
        setShape = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}" />`;
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

// Function to prompt questions for user input
function promptUser() {
    inquirer
        .prompt([
            // shape
            {
                name: 'shape',
                type: 'list',
                message: 'Choose the logo shape.',
                choices: ['Cirle', 'Triangle', 'Square']
            },
            // shapeColor
            {
                name: 'shapeColor',
                type: 'input',
                message: 'Type the color keyword or hexadecimal for the logo shape color',
            },
            // text
            {
                name: 'text',
                type: 'input',
                message: 'Type up to three characters to use as the text display on the logo.',
            },
            // text color
            {
                name: 'textColor',
                type: 'input',
                message: 'Type the color keyword or hexadecimal for the logo text color.',
            },
        ])
        //  error prompt if user enters more than 3 characters
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log('Text value must be three characters or less.');
                promptUser();
            } else {
                writeToFile('logo.svg', answers);
            }
        });
}

promptUser();