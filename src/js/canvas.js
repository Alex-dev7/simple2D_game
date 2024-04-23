import platform from '../assets/platforms/elementWood012.png'
import groundPlatform from '../assets/platforms/ground_platform.png'
import hills from '../assets/hills.png'
import background from '../assets/background.png'

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
        this.speed = 10
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
            // this.velocity.y = 0
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


// --------------------------------------------------------
// --------------  Generic Object  ------------------------------
// --------------------------------------------------------
class GenericObject {
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


function createImage(imgSrc){
    const image = new Image()
    image.src = imgSrc
    return image
}

let groundImage = createImage(groundPlatform);
let platformImage = createImage(platform);

let player = new Player();

let genericObjects = [];
let groundPlatforms = [];
let platforms = [];


// keys object
const keys  = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

let scrollOffset = 0


// --------------------------------------------------------
// --------------  init function --------------------------
// --------------------------------------------------------

function init() {
    groundImage = createImage(groundPlatform);
    platformImage = createImage(platform);

    player = new Player();

    genericObjects = [
        new GenericObject({ x: -1, y: -1, image: createImage(background) }),
        new GenericObject({ x: 0, y: 0, image: createImage(hills) }),
    ];

    groundPlatforms = [
        new Platform({ x: 0, y: 500, image: createImage(groundPlatform) }),
        new Platform({
            x: groundImage.width + 100,
            y: 500,
            image: createImage(groundPlatform),
        }),
        new Platform({
            x: groundImage.width * 2,
            y: 500,
            image: createImage(groundPlatform),
        }),
    ];
    platforms = [
        new Platform({ x: 400, y: 300, image: createImage(platform) }),
        new Platform({ x: 780, y: 200, image: createImage(platform) }),
    ];

    scrollOffset = 0
}


// --------------------------------------------------------
// -------------- ainmation recursive loop ----------------
// --------------------------------------------------------


function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    genericObjects.forEach(genericObject => {
        genericObject.draw()
    
    })
    groundPlatforms.forEach((ground) => {
        ground.draw();
    });
    platforms.forEach((platform) => {
        platform.draw();
    });
    player.update();


    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    } else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += player.speed
            genericObjects.forEach((ground) => {
                ground.position.x -= player.speed * .66
            });
            groundPlatforms.forEach((ground) => {
                ground.position.x -= player.speed
            });
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            });
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            genericObjects.forEach((ground) => {
                ground.position.x += player.speed * .66;
            });
            groundPlatforms.forEach((ground) => {
                ground.position.x += player.speed
            });
            platforms.forEach((platform) => {
                platform.position.x += player.speed
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
    groundPlatforms.forEach((platform) => {
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
    if (scrollOffset > groundImage.width * 2 + 100) {
        console.log('game over')
    }

    // lose scenario
    if (player.position.y > canvas.height) {
        init()
    }
}   

init()
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
            player.velocity.y -= 15
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
            // player.velocity.y = 0
            break
    }
})