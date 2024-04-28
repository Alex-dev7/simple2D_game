import platform from '../assets/platforms/elementWood012.png'
import groundPlatform from '../assets/platforms/ground_platform.png'
import hills from '../assets/hills.png'
import background from '../assets/background.png'

import runLeft from '../assets/movement/runLeft.png'
import runRight from '../assets/movement/rightRun.png'
import jumpRight from '../assets/movement/jumpRight.png'
import jumpLeft from '../assets/movement/jumpLeft.png'
import restingRight from '../assets/movement/resting.png'
import restingLeft from '../assets/movement/restLeft.png'


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
        this.speed = 10;
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 120;
        this.height = 120;
        this.image = createImage(restingRight);
        this.frames = 0;
        this.frameDelay = 0; 
        this.frameDelayMax = 10; 
        this.sprites = {
            stand: {
                right: createImage(restingRight),
                left: createImage(restingLeft)
            },
            run: {
                right: createImage(runRight),
                left: createImage(runLeft)
            },
            jump: {
                right: createImage(jumpRight),
                left: createImage(jumpLeft)
            },  
        };
        this.currentSprite = this.sprites.stand.right
    
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            // img crop
            32 * this.frames, 
            0,
            32,  
            32,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update() {
        this.frameDelay += 2
        if (this.frameDelay > this.frameDelayMax) {
            this.frames += 1
            this.frameDelay = 0;
            if(this.frames === 8) {
                this.frames = 0
            }
            
        }
        // if(this.frames === 8) {
        //     this.frames = 0
        // }

        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
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
let lastKey;

// keys object
const keys  = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    }, 
}

let scrollOffset = 0
let orientation = true // if true player is facing right, if false player is facing left


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
                       c.fillStyle = "white";
                       c.fillRect(0, 0, canvas.width, canvas.height);

                       genericObjects.forEach((genericObject) => {
                           genericObject.draw();
                       });
                       groundPlatforms.forEach((ground) => {
                           ground.draw();
                       });
                       platforms.forEach((platform) => {
                           platform.draw();
                       });
                       player.update();

                       if (keys.right.pressed && player.position.x < 400) {
                           player.velocity.x = player.speed;
                       } else if (
                           (keys.left.pressed && player.position.x > 100) ||
                           (keys.left.pressed &&
                               scrollOffset === 0 &&
                               player.position.x > 0)
                       ) {
                           player.velocity.x = -player.speed;
                       } else {
                           player.velocity.x = 0;

                           if (keys.right.pressed) {
                               scrollOffset += player.speed;
                               genericObjects.forEach((ground) => {
                                   ground.position.x -= player.speed * 0.66;
                               });
                               groundPlatforms.forEach((ground) => {
                                   ground.position.x -= player.speed;
                               });
                               platforms.forEach((platform) => {
                                   platform.position.x -= player.speed;
                               });
                           } else if (keys.left.pressed && scrollOffset > 0) {
                               scrollOffset -= player.speed;
                               genericObjects.forEach((ground) => {
                                   ground.position.x += player.speed * 0.66;
                               });
                               groundPlatforms.forEach((ground) => {
                                   ground.position.x += player.speed;
                               });
                               platforms.forEach((platform) => {
                                   platform.position.x += player.speed;
                               });
                           }
                       }

                       // platform collision detection
                       platforms.forEach((platform) => {
                           if (
                               player.position.y + player.height <=
                                   platform.position.y &&
                               player.position.y +
                                   player.height +
                                   player.velocity.y >=
                                   platform.position.y &&
                               player.position.x + player.width >=
                                   platform.position.x &&
                               player.position.x <=
                                   platform.position.x + platform.width
                           ) {
                               player.velocity.y = 0;
                           }
                       });
                       groundPlatforms.forEach((platform) => {
                           if (
                               player.position.y + player.height <=
                                   platform.position.y &&
                               player.position.y +
                                   player.height +
                                   player.velocity.y >=
                                   platform.position.y &&
                               player.position.x + player.width >=
                                   platform.position.x &&
                               player.position.x <=
                                   platform.position.x + platform.width
                           ) {
                               player.velocity.y = 0;
                           }
                       });

                       // player sprite change
                       if (
                           keys.right.pressed &&
                           lastKey === "right" &&
                           player.currentSprite !== player.sprites.run.right
                       ) {
                           player.frames = 1;
                           player.currentSprite = player.sprites.run.right;
                       } else if (
                           keys.left.pressed &&
                           lastKey === "left" &&
                           player.currentSprite !== player.sprites.run.left
                       ) {
                           player.frames = 1;
                           player.currentSprite = player.sprites.run.left;
                       } else if (
                           !keys.left.pressed &&
                           lastKey === "left" &&
                           player.currentSprite !== player.sprites.stand.left
                       ) {
                           player.currentSprite = player.sprites.stand.left;
                       } else if (
                           !keys.right.pressed &&
                           lastKey === "right" &&
                           player.currentSprite !== player.sprites.stand.right
                       ) {
                           player.currentSprite = player.sprites.stand.right;
                       } else if (keys.up.pressed && lastKey === "up") {
                           player.frames = 1;
                           if (orientation) {
                               player.currentSprite = player.sprites.jump.right;
                           } else
                               player.currentSprite = player.sprites.jump.left;
                       } else if (!keys.up.pressed && lastKey === "up") {
                           if (orientation && keys.right.pressed) {
                               player.currentSprite = player.sprites.run.right;
                           } else if (orientation && !keys.right.pressed) {
                               player.currentSprite =
                                   player.sprites.stand.right;
                           }

                           if (!orientation && keys.left.pressed) {
                               player.currentSprite = player.sprites.run.left;
                           } else if (!orientation && !keys.left.pressed) {
                               player.currentSprite = player.sprites.stand.left;
                           }
                       }

                       // win scenario
                       if (scrollOffset > groundImage.width * 2 + 100) {
                           console.log("game over");
                       }

                       // lose scenario
                       if (player.position.y > canvas.height) {
                           init();
                       }
                   }   

init()
animate()


// --------------------------------------------------------
// --------------  event listeners ------------------------
// --------------------------------------------------------
window.addEventListener('keydown', ({code}) => {
   
    switch (code) {
        case "KeyA":
            keys.left.pressed = true;
            lastKey = "left";
            orientation = false;
            break;
        case "KeyS":
            break;
        case "KeyD":
            keys.right.pressed = true;
            lastKey = "right";
            orientation = true;
            break;
        case "KeyW":
            keys.up.pressed = true;
            lastKey = "up";
            player.velocity.y = -16;
            break;
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
            keys.up.pressed = false
            player.velocity.y = 0
            
           
            break
    }
})