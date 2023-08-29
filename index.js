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
        message: "Choose a color for the TEXT (hex keys supported)",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "color",
        message: "Choose a color for the SHAPE (hex keys supported)",
    },
];

init();
function init() {
    console.log("Welcome to the Logo Creator!")
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
            writeToFile("logo.svg", newLogo.createSvg())
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