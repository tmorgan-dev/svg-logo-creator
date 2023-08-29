class Svg {
    constructor () {
        this.textEl = ""
        this.shapeEl = ""
        
    }
    createSvg () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setTxt(text, color) {
        this.textEl = `<text x="150" y="100" font-size="65" text-anchor="middle" dominant-baseline="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}

module.exports = Svg