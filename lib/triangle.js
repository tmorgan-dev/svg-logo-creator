const Shape = require("./shapes")

class Triangle extends Shape {
  render() {
    return `<polygon points="75,20 45,130 105,130" fill="${this.color}"/>`
  }
}

module.exports = Triangle