const Circle = require("./circle")
const Square = require("./square")
const Triangle = require("./triangle")

describe("Circle", () => {
    test ("renders a blue circle", () => {
        const shape = new Circle()
        const targetShape = `<circle cx="150" cy="100" r="80" fill="blue"/>`
        shape.setColor("blue")
        expect(shape.render()).toEqual(targetShape)
    })
})

describe("Square", () => {
    test ("renders a blue square", () => {
        const shape = new Square()
        const targetShape = `<rect x="75" y="25" width="150" height="150" fill="blue"/>`
        shape.setColor("blue")
        expect(shape.render()).toEqual(targetShape)
    })
})

describe("Triangle", () => {
    test ("renders a blue triangle", () => {
        const shape = new Triangle()
        const targetShape = `<polygon points="150,0 0,150 300,150" fill="blue"/>`
        shape.setColor("blue")
        expect(shape.render()).toEqual(targetShape)
    })
})