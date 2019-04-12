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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/TemplateData/UnityProgress.js":
/*!**********************************************!*\
  !*** ./public/TemplateData/UnityProgress.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function UnityProgress(gameInstance, progress) {\n  if (!gameInstance.Module) return;\n\n  if (!gameInstance.logo) {\n    gameInstance.logo = document.createElement(\"div\");\n    gameInstance.logo.className = \"logo \" + gameInstance.Module.splashScreenStyle;\n    gameInstance.container.appendChild(gameInstance.logo);\n  }\n\n  if (!gameInstance.progress) {\n    gameInstance.progress = document.createElement(\"div\");\n    gameInstance.progress.className = \"progress \" + gameInstance.Module.splashScreenStyle;\n    gameInstance.progress.empty = document.createElement(\"div\");\n    gameInstance.progress.empty.className = \"empty\";\n    gameInstance.progress.appendChild(gameInstance.progress.empty);\n    gameInstance.progress.full = document.createElement(\"div\");\n    gameInstance.progress.full.className = \"full\";\n    gameInstance.progress.appendChild(gameInstance.progress.full);\n    gameInstance.container.appendChild(gameInstance.progress);\n  }\n\n  gameInstance.progress.full.style.width = 100 * progress + \"%\";\n  gameInstance.progress.empty.style.width = 100 * (1 - progress) + \"%\";\n  if (progress == 1) gameInstance.logo.style.display = gameInstance.progress.style.display = \"none\";\n}\n\n//# sourceURL=webpack:///./public/TemplateData/UnityProgress.js?");

/***/ }),

/***/ "./public/firebase-init.js":
/*!*********************************!*\
  !*** ./public/firebase-init.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var config = {\n  apiKey: \"AIzaSyBe_QFRRwle_V0VR8UX8hmM71Ul7Pihhjs\",\n  authDomain: \"bdr-qualifiers.firebaseapp.com\",\n  databaseURL: \"https://bdr-qualifiers.firebaseio.com\",\n  projectId: \"bdr-qualifiers\",\n  storageBucket: \"\",\n  messagingSenderId: \"136624516589\"\n};\nfirebase.initializeApp(config);\n\n//# sourceURL=webpack:///./public/firebase-init.js?");

/***/ }),

/***/ "./public/js/creative.js":
/*!*******************************!*\
  !*** ./public/js/creative.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  \"use strict\"; // Start of use strict\n  // Smooth scrolling using jQuery easing\n\n  $('a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])').click(function () {\n    if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {\n      var target = $(this.hash);\n      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');\n\n      if (target.length) {\n        $('html, body').animate({\n          scrollTop: target.offset().top - 72\n        }, 1000, \"easeInOutExpo\");\n        return false;\n      }\n    }\n  }); // Closes responsive menu when a scroll trigger link is clicked\n\n  $('.js-scroll-trigger').click(function () {\n    $('.navbar-collapse').collapse('hide');\n  }); // Activate scrollspy to add active class to navbar items on scroll\n\n  $('body').scrollspy({\n    target: '#mainNav',\n    offset: 75\n  }); // Collapse Navbar\n\n  var navbarCollapse = function navbarCollapse() {\n    if ($(\"#mainNav\").offset().top > 100) {\n      $(\"#mainNav\").addClass(\"navbar-scrolled\");\n    } else {\n      $(\"#mainNav\").removeClass(\"navbar-scrolled\");\n    }\n  }; // Collapse now if page is not at top\n\n\n  navbarCollapse(); // Collapse the navbar when page is scrolled\n\n  $(window).scroll(navbarCollapse); // Magnific popup calls\n\n  $('#portfolio').magnificPopup({\n    delegate: 'a',\n    type: 'image',\n    tLoading: 'Loading image #%curr%...',\n    mainClass: 'mfp-img-mobile',\n    gallery: {\n      enabled: true,\n      navigateByImgClick: true,\n      preload: [0, 1]\n    },\n    image: {\n      tError: '<a href=\"%url%\">The image #%curr%</a> could not be loaded.'\n    }\n  });\n})(jQuery); // End of use strict\n\n//# sourceURL=webpack:///./public/js/creative.js?");

/***/ }),

/***/ "./public/js/leaderboard.js":
/*!**********************************!*\
  !*** ./public/js/leaderboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = function () {\n  var fb = firebase.firestore();\n  var container = document.getElementById(\"high-scores\");\n  var avg_container = document.getElementById(\"qualifiers-avgs\");\n  var coll = fb.collection(\"simulator-players\").orderBy(\"high_score\").limit(12);\n  var coll_avg = fb.collection(\"simulator-players\").orderBy(\"round_average\", \"asc\").limit(12);\n  coll.onSnapshot(function (querySnapshot) {\n    if (container.children.length != 0) {\n      document.getElementById(\"leaderboard\").children[1].remove();\n      container = document.createElement(\"ol\");\n      container.id = \"high-scores\";\n      document.getElementById(\"leaderboard\").append(container);\n    }\n\n    querySnapshot.forEach(function (doc) {\n      var board_player_template = document.createElement(\"li\");\n      var mark = document.createElement(\"mark\");\n      var small = document.createElement(\"small\");\n      mark.innerHTML = \"\".concat(doc.data().name);\n      small.innerHTML = \"\".concat(doc.data().high_score.toFixed(2), \" s\");\n      board_player_template.append(mark);\n      board_player_template.append(small);\n      container.appendChild(board_player_template);\n    });\n  });\n  coll_avg.onSnapshot(function (querySnapshot) {\n    if (avg_container.children.length != 0) {\n      document.getElementById(\"qualifiers\").children[1].remove();\n      avg_container = document.createElement(\"ol\");\n      avg_container.id = \"qualifiers-avgs\";\n      document.getElementById(\"qualifiers\").append(avg_container);\n    }\n\n    querySnapshot.forEach(function (doc) {\n      var avg_player = document.createElement(\"li\");\n      var mark_avg = document.createElement(\"mark\");\n      var small_avg = document.createElement(\"small\");\n      mark_avg.innerHTML = \"\".concat(doc.data().name);\n      small_avg.innerHTML = \"\".concat(doc.data().round_average.toFixed(2), \" s\");\n      avg_player.append(mark_avg);\n      avg_player.append(small_avg);\n      avg_container.appendChild(avg_player);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./public/js/leaderboard.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar creative = __webpack_require__(/*! ./creative */ \"./public/js/creative.js\");\n\nvar leaderboard = __webpack_require__(/*! ./leaderboard */ \"./public/js/leaderboard.js\");\n\nvar validate = __webpack_require__(/*! ./validate */ \"./public/js/validate.js\"); // const creative = require(\"./creative\");\n\n\nvar RaceDataManager =\n/*#__PURE__*/\nfunction () {\n  function RaceDataManager() {\n    var _this = this;\n\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var rounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var roundNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n    var running = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    var bands = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n    var popup = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n    _classCallCheck(this, RaceDataManager);\n\n    _defineProperty(this, \"startTimer\", function (interval) {\n      _this.timer = setInterval(function () {\n        if (window.ended) {\n          _this.newRound();\n\n          _this.stopTimer();\n        } else if (window.started) {\n          _this.time++;\n          var eeg_data = {\n            type: 'bar',\n            x: [\"Alpha\", \"Beta\", \"Theta\", \"Gamma\"],\n            y: [_this.bands.alpha, _this.bands.beta, _this.bands.theta, _this.bands.gamma],\n            marker: {\n              color: '#C8A2C8'\n            }\n          };\n          if (_this.popup) Plotly.react('plot', [eeg_data]); // Plotly.extendTraces('plot', {\n          // \ty: [[this.bands.alpha, this.bands.beta, this.bands.theta, this.bands.gamma]]\n          // }, [0]);\n\n          console.log(\"HERE \", _this.bands);\n        }\n      }, interval || 1000);\n    });\n\n    _defineProperty(this, \"stopTimer\", function () {\n      clearInterval(_this.timer);\n    });\n\n    _defineProperty(this, \"writeUserData\", function (fb, name) {\n      var roundNum = 0;\n      Object.values(_this.rounds).map(function (o, i) {\n        if (i == 0) _this.highest = o;\n        if (o < _this.highest) _this.highest = o;\n        return roundNum += Number(o);\n      });\n      _this.roundAverage = roundNum / (_this.roundNumber - 1);\n      fb.collection(\"simulator-players\").add({\n        name: name,\n        rounds: _this.rounds,\n        round_average: _this.roundAverage,\n        high_score: _this.highest\n      }).then(function () {\n        _this.reset();\n\n        Swal.fire({\n          title: '<strong>Final Score</strong>',\n          type: 'info',\n          html: \"Your high score was \".concat(_this.highest, \" and round average was \").concat(_this.roundAverage, \" <br>Your results can be seen in the Brain-Drone Experience website.\"),\n          showCloseButton: true,\n          focusConfirm: false,\n          confirmButtonText: 'OK!',\n          onClose: function onClose() {\n            window.location.reload();\n          }\n        });\n      });\n    });\n\n    _defineProperty(this, \"newRound\", function () {\n      _this.rounds[_this.roundNumber] = _this.time;\n      _this.time = 1;\n      _this.roundNumber++;\n      _this.running = false;\n    });\n\n    this.time = time;\n    this.timer = null;\n    this.rounds = rounds;\n    this.roundNumber = roundNumber;\n    this.roundAverage = 0;\n    this.highest = 0;\n    this.running = running;\n    this.bands = bands;\n    this.popup = popup;\n  }\n  /**\n   * Starts a timer in JavaScript.\n   */\n\n\n  _createClass(RaceDataManager, [{\n    key: \"reset\",\n\n    /**\n     * \n     */\n    value: function reset() {\n      this.time = 1;\n      this.timer = null;\n      this.rounds = {};\n      this.roundNumber = 1;\n      this.running = false;\n    }\n  }]);\n\n  return RaceDataManager;\n}();\n\nwindow.onload = function () {\n  var fb = firebase.firestore();\n  var SECONDS = 0.25;\n  var BUFFER_SIZE = SECONDS * 256;\n  var WEIGHT = 0.95;\n  var dataManager = new RaceDataManager();\n  var buffer = new Array();\n  var weighted = {\n    alpha: -1,\n    beta: -1,\n    theta: -1,\n    gamma: -1,\n    engagement: -1\n  };\n  window.Device = new BCIDevice({\n    dataHandler: function dataHandler(data) {\n      data.data.forEach(function (el) {\n        if (buffer.length > BUFFER_SIZE) buffer.shift();\n        buffer.push(el);\n      });\n      if (buffer.length < BUFFER_SIZE) return;\n      var psd = window.bci.signal.getPSD(BUFFER_SIZE, buffer);\n      var alpha = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, \"alpha\");\n      var beta = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, \"beta\");\n      var theta = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, \"theta\");\n      var gamma = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, \"gamma\");\n      var engagement = beta / (alpha + theta);\n      var sum = alpha + beta + theta + gamma;\n      var w_alpha = alpha / sum;\n      var w_beta = beta / sum;\n      var w_theta = theta / sum;\n      var w_gamma = gamma / sum;\n\n      if (weighted.alpha < 0) {\n        weighted.alpha = w_alpha || 0;\n        weighted.beta = w_beta || 0;\n        weighted.theta = w_theta || 0;\n        weighted.gamma = w_gamma || 0;\n        weighted.engagement = engagement || 0;\n      } else {\n        weighted.alpha = weighted.alpha * WEIGHT + (w_alpha || 0) * (1 - WEIGHT);\n        weighted.beta = weighted.beta * WEIGHT + (w_beta || 0) * (1 - WEIGHT);\n        weighted.theta = weighted.theta * WEIGHT + (w_theta || 0) * (1 - WEIGHT);\n        weighted.gamma = weighted.gamma * WEIGHT + (w_gamma || 0) * (1 - WEIGHT);\n        weighted.engagement = weighted.engagement * WEIGHT + (engagement || 0) * (1 - WEIGHT);\n      }\n\n      if (window.gameInstance.__ready == true) {\n        window.gameInstance.SendMessage(\"Drone\", \"SetSpeed\", weighted.gamma / weighted.alpha);\n        dataManager.bands = weighted; // console.log((weighted.gamma/weighted.alpha));\n\n        document.getElementById(\"pre-start\").style.display = \"none\";\n        document.getElementById(\"footer\").style.display = \"flex\";\n      }\n    },\n    statusHandler: function statusHandler(status) {\n      console.log(status);\n    },\n    connectionHandler: function connectionHandler(connected) {\n      if (!connected) {\n        alert(\"Device connection lost. Please reconnect.\");\n        window.location.reload();\n      }\n    }\n  });\n\n  var connect =\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return window.Device.connect();\n\n            case 3:\n              // Plot data\n              window.gameInstance = UnityLoader.instantiate(\"gameContainer\", \"Build/bdr-simulator.json\", {\n                onProgress: UnityProgress,\n                Module: {\n                  onRuntimeInitialized: function onRuntimeInitialized() {\n                    UnityProgress(gameInstance, \"complete\");\n                    window.gameInstance.__ready = true;\n                  }\n                }\n              });\n              _context.next = 10;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"connect/load error. retrying...\");\n              connect();\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function connect() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  window.addEventListener(\"keydown\", function (e) {\n    setTimeout(function () {\n      if (window.started && !dataManager.running) {\n        dataManager.running = true;\n        dataManager.startTimer();\n      }\n    }, 1000);\n  });\n  document.getElementById(\"gameContainer\").addEventListener(\"click\", function (e) {\n    setTimeout(function () {\n      if (window.started && !dataManager.running) {\n        dataManager.running = true;\n        dataManager.startTimer();\n      }\n    }, 1000);\n  });\n  $(\"#connect\").on(\"click\", function () {\n    connect();\n  });\n  $(\"#submit\").on(\"click\", function () {\n    if (dataManager.roundNumber > 1) {\n      dataManager.writeUserData(fb, localStorage.getItem(\"name\"));\n    } else {\n      Swal.fire({\n        title: 'Sorry!',\n        text: 'You have not completed any rounds yet. Your score cannot be submitted.',\n        type: 'error',\n        confirmButtonText: 'OK'\n      });\n    }\n  });\n  $(\"#fullscreen\").on(\"click\", function () {\n    window.gameInstance.SetFullscreen(1);\n  });\n  $(\"#plot-button\").on(\"click\", function () {\n    Swal.fire({\n      title: '<strong>EEG Plot</strong>',\n      type: 'info',\n      html: '<div id=\"plot\"></div>',\n      showCloseButton: true,\n      focusConfirm: false,\n      confirmButtonText: 'OK!',\n      onClose: function onClose() {\n        dataManager.popup = false;\n      }\n    });\n    dataManager.popup = true;\n    var y_eeg_data = {\n      type: 'bar',\n      x: [\"Alpha\", \"Beta\", \"Theta\", \"Gamma\"],\n      y: [0, 0, 0, 0],\n      marker: {\n        color: '#C8A2C8'\n      }\n    };\n    Plotly.newPlot('plot', [y_eeg_data]);\n  });\n  $(\"#instructions-btn\").on(\"click\", function () {\n    Swal.fire({\n      title: '<strong>Instructions</strong>',\n      type: 'info',\n      html: 'Start by pressing \"Connect\", select your Muse device, then press any key to start the simulator!',\n      showCloseButton: true,\n      focusConfirm: false,\n      confirmButtonText: 'OK!'\n    });\n  });\n};\n\n//# sourceURL=webpack:///./public/js/main.js?");

/***/ }),

/***/ "./public/js/validate.js":
/*!*******************************!*\
  !*** ./public/js/validate.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  \"use strict\";\n  /*==================================================================\r\n  [ Focus Contact2 ]*/\n\n  $('.input2').each(function () {\n    $(this).on('blur', function () {\n      if ($(this).val().trim() != \"\") {\n        $(this).addClass('has-val');\n      } else {\n        $(this).removeClass('has-val');\n      }\n    });\n  });\n  /*==================================================================\r\n  [ Validate ]*/\n\n  var name = $('.validate-input input[name=\"name\"]');\n  $('.validate-form').on('submit', function () {\n    var check = true;\n\n    if ($(name).val().trim() == '') {\n      showValidate(name);\n      check = false;\n    }\n\n    if (check) {\n      $(\".webgl-content\").show();\n      $(\"#title\").show();\n      $(\".container-contact2\").hide();\n      localStorage.setItem(\"name\", $(name).val().trim());\n      return false;\n    }\n\n    return check;\n  });\n  $('.validate-form .input2').each(function () {\n    $(this).focus(function () {\n      hideValidate(this);\n    });\n  });\n\n  function showValidate(input) {\n    var thisAlert = $(input).parent();\n    $(thisAlert).addClass('alert-validate');\n  }\n\n  function hideValidate(input) {\n    var thisAlert = $(input).parent();\n    $(thisAlert).removeClass('alert-validate');\n  }\n})(jQuery);\n\n//# sourceURL=webpack:///./public/js/validate.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************************!*\
  !*** multi ./public/js/main.js ./public/TemplateData/UnityProgress.js ./public/firebase-init.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./public/js/main.js */\"./public/js/main.js\");\n__webpack_require__(/*! ./public/TemplateData/UnityProgress.js */\"./public/TemplateData/UnityProgress.js\");\nmodule.exports = __webpack_require__(/*! ./public/firebase-init.js */\"./public/firebase-init.js\");\n\n\n//# sourceURL=webpack:///multi_./public/js/main.js_./public/TemplateData/UnityProgress.js_./public/firebase-init.js?");

/***/ })

/******/ });