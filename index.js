// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Triangle = require("./lib/triangle")
const Svg = require("./lib/svg")

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color should the text be?",
    },
    {
        type: "input",
        name: "color",
        message: "Enter a color for the logo (hex key supported)",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["Circle", "Square", "Triangle"],
    }
];

init();
function init() {
    console.log("Welcome To your logo generator!")
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("My logo Info", answers)
            let logo;
            switch(answers.shape) {
                case "Circle":
                logo = new Circle()
                break;
                case "Square":
                    logo = new Square()
                    break;
                    case "Triangle":
                        logo = new Triangle()
                        break;
            }
            logo.setColor(answers.color)
            const newLogo = new Svg()
            newLogo.setShape(logo)
            newLogo.setTxt(answers.text, answers.textColor)
            console.log("hello", newLogo)
            if (answers.text.length > 3) {
                console.log("Must be less than three characters")
            }
            writeToFile("Logo.svg", newLogo.createSvg())
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}

function writeToFile(fileName, data) {
    console.log("here")
    const filePath = path.join(fileName)
    fs.writeFile(filePath, data, (err) =>
        err ? console.error(err) : console.log(`Generated logo.svg`)
    );
}