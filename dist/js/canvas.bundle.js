/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/assets/hills.png":
/*!******************************!*\
  !*** ./src/assets/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/assets/movement/jumpLeft.png":
/*!******************************************!*\
  !*** ./src/assets/movement/jumpLeft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f7b9e7c03fb918ff4d5749430d22fa2b.png");

/***/ }),

/***/ "./src/assets/movement/jumpRight.png":
/*!*******************************************!*\
  !*** ./src/assets/movement/jumpRight.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9485ac180e476a803523b5992fc641e5.png");

/***/ }),

/***/ "./src/assets/movement/restLeft.png":
/*!******************************************!*\
  !*** ./src/assets/movement/restLeft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "677845330d43fa72e2cb3d73d6ee61af.png");

/***/ }),

/***/ "./src/assets/movement/resting.png":
/*!*****************************************!*\
  !*** ./src/assets/movement/resting.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7bd0462865d087909e39cc93f55b806c.png");

/***/ }),

/***/ "./src/assets/movement/rightRun.png":
/*!******************************************!*\
  !*** ./src/assets/movement/rightRun.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "16dcdd8ffdca2888d63a56a91b38cad9.png");

/***/ }),

/***/ "./src/assets/movement/runLeft.png":
/*!*****************************************!*\
  !*** ./src/assets/movement/runLeft.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aaa1cb2330ae1ddf5b51dc10dc924ad4.png");

/***/ }),

/***/ "./src/assets/platforms/elementWood012.png":
/*!*************************************************!*\
  !*** ./src/assets/platforms/elementWood012.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4669a29696fa6846c68e78bec44ab958.png");

/***/ }),

/***/ "./src/assets/platforms/ground_platform.png":
/*!**************************************************!*\
  !*** ./src/assets/platforms/ground_platform.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a5a600bb9b99206c08cccde622cd6c77.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_platforms_elementWood012_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/platforms/elementWood012.png */ "./src/assets/platforms/elementWood012.png");
/* harmony import */ var _assets_platforms_ground_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/platforms/ground_platform.png */ "./src/assets/platforms/ground_platform.png");
/* harmony import */ var _assets_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hills.png */ "./src/assets/hills.png");
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/background.png */ "./src/assets/background.png");
/* harmony import */ var _assets_movement_runLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/movement/runLeft.png */ "./src/assets/movement/runLeft.png");
/* harmony import */ var _assets_movement_rightRun_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/movement/rightRun.png */ "./src/assets/movement/rightRun.png");
/* harmony import */ var _assets_movement_jumpRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/movement/jumpRight.png */ "./src/assets/movement/jumpRight.png");
/* harmony import */ var _assets_movement_jumpLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/movement/jumpLeft.png */ "./src/assets/movement/jumpLeft.png");
/* harmony import */ var _assets_movement_resting_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/movement/resting.png */ "./src/assets/movement/resting.png");
/* harmony import */ var _assets_movement_restLeft_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/movement/restLeft.png */ "./src/assets/movement/restLeft.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); // canvas size

canvas.width = 1024;
canvas.height = 576; //  ------------- gravity ----------------

var gravity = 0.5; // --------------------------------------------------------
// --------------  player  --------------------------------
// --------------------------------------------------------

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 120;
    this.height = 120;
    this.image = createImage(_assets_movement_resting_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.frames = 0;
    this.frameDelay = 0;
    this.frameDelayMax = 10;
    this.sprites = {
      stand: {
        right: createImage(_assets_movement_resting_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_assets_movement_restLeft_png__WEBPACK_IMPORTED_MODULE_9__["default"])
      },
      run: {
        right: createImage(_assets_movement_rightRun_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_assets_movement_runLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"])
      },
      jump: {
        right: createImage(_assets_movement_jumpRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_assets_movement_jumpLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"])
      }
    };
    this.currentSprite = this.sprites.stand.right;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, // img crop
      32 * this.frames, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frameDelay += 2;

      if (this.frameDelay > this.frameDelayMax) {
        this.frames += 1;
        this.frameDelay = 0;

        if (this.frames === 8) {
          this.frames = 0;
        }
      } // if(this.frames === 8) {
      //     this.frames = 0
      // }


      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {// this.velocity.y = 0
      }
    }
  }]);

  return Player;
}(); // --------------------------------------------------------
// --------------  platform  ------------------------------
// --------------------------------------------------------


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); // --------------------------------------------------------
// --------------  Generic Object  ------------------------------
// --------------------------------------------------------


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imgSrc) {
  var image = new Image();
  image.src = imgSrc;
  return image;
}

var groundImage = createImage(_assets_platforms_ground_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformImage = createImage(_assets_platforms_elementWood012_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var genericObjects = [];
var groundPlatforms = [];
var platforms = []; // keys object

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollOffset = 0;
var orientation = true; // if true player is facing right, if false player is facing left
// --------------------------------------------------------
// --------------  init function --------------------------
// --------------------------------------------------------

function init() {
  groundImage = createImage(_assets_platforms_ground_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  platformImage = createImage(_assets_platforms_elementWood012_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_assets_background_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_assets_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  groundPlatforms = [new Platform({
    x: 0,
    y: 500,
    image: createImage(_assets_platforms_ground_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: groundImage.width + 100,
    y: 500,
    image: createImage(_assets_platforms_ground_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: groundImage.width * 2,
    y: 500,
    image: createImage(_assets_platforms_ground_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  platforms = [new Platform({
    x: 400,
    y: 300,
    image: createImage(_assets_platforms_elementWood012_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 780,
    y: 200,
    image: createImage(_assets_platforms_elementWood012_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  })];
  scrollOffset = 0;
} // --------------------------------------------------------
// -------------- ainmation recursive loop ----------------
// --------------------------------------------------------


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  groundPlatforms.forEach(function (ground) {
    ground.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      genericObjects.forEach(function (ground) {
        ground.position.x -= player.speed * .66;
      });
      groundPlatforms.forEach(function (ground) {
        ground.position.x -= player.speed;
      });
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      genericObjects.forEach(function (ground) {
        ground.position.x += player.speed * .66;
      });
      groundPlatforms.forEach(function (ground) {
        ground.position.x += player.speed;
      });
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  groundPlatforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // win scenario

  if (scrollOffset > groundImage.width * 2 + 100) {
    console.log('game over');
  } // lose scenario


  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate(); // --------------------------------------------------------
// --------------  event listeners ------------------------
// --------------------------------------------------------

window.addEventListener('keydown', function (_ref3) {
  var code = _ref3.code;

  switch (code) {
    case 'KeyA':
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      orientation = false;
      break;

    case 'KeyS':
      console.log(code);
      break;

    case 'KeyD':
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      orientation = true;
      break;

    case 'KeyW':
      keys.up.pressed = true;

      if (keys.up.pressed) {
        keys.up.pressed = false;
        player.velocity.y = -10;
      }

      if (keys.right.pressed) {
        player.currentSprite = player.sprites.jump.right;
      } else if (keys.left.pressed) {
        player.currentSprite = player.sprites.jump.left;
      }

      if (orientation) {
        player.currentSprite = player.sprites.jump.right;
      } else {
        player.currentSprite = player.sprites.jump.left;
      }

      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var code = _ref4.code;

  switch (code) {
    case 'KeyA':
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      break;

    case 'KeyS':
      console.log(code);
      break;

    case 'KeyD':
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      break;

    case 'KeyW':
      // keys.up.pressed = false
      if (keys.right.pressed) {
        player.currentSprite = player.sprites.run.right;
        orientation = true;
      } else if (keys.left.pressed) {
        player.currentSprite = player.sprites.run.left;
        orientation = false;
      }

      if (orientation && !keys.right.pressed) {
        player.currentSprite = player.sprites.stand.right;
      } else if (!orientation && !keys.left.pressed) {
        player.currentSprite = player.sprites.stand.left;
      }

      player.velocity.y = 0;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map