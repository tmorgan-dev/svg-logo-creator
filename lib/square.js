const Shape = require("./shapes")

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" fill="${this.color}"/>`
  }
}

module.exports = Square