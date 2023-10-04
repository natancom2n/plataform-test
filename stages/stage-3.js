const canvas  = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        //use for gravity
        this.velocity= {
            x: 0,
            y: 5
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.draw()
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

const player  = new Player()

//making loop
function animate() {
    requestAnimationFrame(animate)
    
    //code of gravity
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}
animate()