const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// canvas size
canvas.width = window.innerWidth
canvas.height = window.innerHeight


//  ------------- gravity ----------------
const gravity = 0.5


// --------------------------------------------------------
// --------------  player  --------------------------------
// --------------------------------------------------------
class Player {
    constructor() {
        this.position = { x: 100, y: 100 }
        this.velocity = { x: 0, y : 0}
        this.width = 30
        this.height = 30
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity
        }
        else {
            this.velocity.y = 0
        }
    }
}

// --------------------------------------------------------
// --------------  platform  ------------------------------
// --------------------------------------------------------
class Platform {
    constructor() {
        this.position = {x: 400, y: 500}
        this.width = 200
        this.height = 20
    }

    draw() {
        c.fillStyle = 'green' 
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}



const player = new Player()
const platform = new Platform()


// keys object
const keys  = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}


// --------------------------------------------------------
// -------------- ainmation recursive loop ----------------
// --------------------------------------------------------
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    platform.draw()

    if(keys.right.pressed) {
        player.velocity.x = 5
    } else if (keys.left.pressed){
        player.velocity.x = -5
    }  else player.velocity.x = 0

    // platform collision detection
    if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
   
}   

animate()


// --------------------------------------------------------
// --------------  event listeners ------------------------
// --------------------------------------------------------
window.addEventListener('keydown', ({code}) => {
   
    switch(code) {
        case 'KeyA':
            keys.left.pressed = true
            break
        case 'KeyS':
            console.log(code)
            break
        case 'KeyD':
            keys.right.pressed = true
            break
        case 'KeyW':
            player.velocity.y -= 20 
            break
    }
})
window.addEventListener('keyup', ({code}) => {
   
    switch(code) {
        case 'KeyA':
            keys.left.pressed = false
            break
        case 'KeyS':
            console.log(code)
            break
        case 'KeyD':
            keys.right.pressed = false
            break
        case 'KeyW':
            player.velocity.y = 0
            break
    }
})