import platform from '../assets/platforms/elementWood012.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// canvas size
canvas.width = 1024
canvas.height = 576


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
    constructor({x, y, image}) {
        this.position = {x: x, y: y}
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const image = new Image()
image.src = platform

const player = new Player()
const platforms = [
    new Platform({ x: 200, y: 400, image: image }),
    new Platform({ x: 600, y: 300, image: image }),
];


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
let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    platforms.forEach((platform) => {
        platform.draw();
    });
    player.update();


    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += 5;
            platforms.forEach((platform) => {
                platform.position.x -= 5;
            });
        } else if (keys.left.pressed) {
            scrollOffset -= 5;
            platforms.forEach((platform) => {
                platform.position.x += 5;
            });
        }
    }

    // platform collision detection
    platforms.forEach((platform) => {
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >=
                platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }
    });


    // win scenario
    if (scrollOffset >  2000) {
        console.log('game over')
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