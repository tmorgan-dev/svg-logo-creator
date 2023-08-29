const Shape = require("./shapes")

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 0,150 300,150" fill="${this.color}"/>`
  }
}

module.exports = Triangle