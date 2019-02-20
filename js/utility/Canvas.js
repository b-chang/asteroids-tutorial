import BoundingBox from '/js/utility/boundingBox.js'

const canvas = document.getElementById('canvas-stage')
const context = canvas.getContext('2d')

const { PI } = Math

export default {
    drawCircle({ x, y, radius, color = 'white', lineWidth = 2 }) {
        context.beginPath()

        context.lineWidth = lineWidth
        context.strokeStyle = color
        context.arc(x, y, radius, 0, 2 * PI)

        context.closePath()
        context.stroke()
    },

    clear() {
      context.clearRect(0,0,500,500)
    },

    getBoundingBox() {
      return new BoundingBox({x:0, y:0}, {x:500, y:500});
    }
}
