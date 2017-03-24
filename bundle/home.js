/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	[].forEach.call(document.querySelectorAll('.steklo'), function (e) {
		var t = [Math.floor(Math.random() * 220), Math.floor(Math.random() * 220), Math.floor(Math.random() * 220)];
		e.style.backgroundColor = 'rgba(' + t[0] + ',' + t[1] + ',' + t[2] + ',0.30)';
	});
	var icon = document.getElementsByTagName('i')[0];
	var menu = document.querySelector('.inner');
	icon.addEventListener('click', function (e) {
		if (icon.classList.contains('fa-bars')) {
			menu.classList.add('open');
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
		} else {
			menu.classList.remove('open');
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
		};
	});
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	function turnTop(obj) {
	    var okno2 = obj.inner.querySelector('.oknoSlider2');
	    var okno3 = obj.inner.querySelector('.oknoSlider3');
	    var okno4 = okno3.cloneNode(true);
	    obj.cont.style.height = okno2.offsetHeight;
	    okno3.getElementsByTagName('img')[0].setAttribute('src', obj.imgSrc);
	    setTimeout(function () {
	        okno2.style.transform = 'translate(-100%)';
	        okno3.style.left = '0';
	        okno3.parentNode.appendChild(okno4);
	    }, 10);
	    setTimeout(function () {
	        okno2.parentNode.removeChild(okno2);
	        okno3.classList.remove("oknoSlider3");
	        okno3.classList.add("oknoSlider2");
	    }, 2010);
	    setTimeout(function () {
	        obj.cont.style.height;
	    }, 2011);
	}
	
	function createMyEl(dom_obj) {
	    var el = document.createElement(dom_obj.nodeName);
	    if (dom_obj.className) {
	        el.className = dom_obj.className;
	    }
	    if (dom_obj.attr) {
	        for (var i in dom_obj.attr) {
	            el.setAttribute(i, dom_obj.attr[i]);
	        };
	    };
	    dom_obj.parent.appendChild(el);
	    return el;
	};
	
	function enterText(data, obj) {
	    document.getElementById('mainPhotoDisain').getElementsByTagName('img')[0].setAttribute('src', obj.src);
	    document.getElementById("textDisain").getElementsByTagName('h5')[0].innerHTML = '<span>' + data[obj.number].number + '</span> ' + data[obj.number].title;
	    document.getElementById("textDisain").getElementsByTagName('p')[0].innerHTML = data[obj.number].text;
	    document.getElementById("bottomDisain").getElementsByTagName('p')[0].innerHTML = data[obj.number].bottom;
	}
	
	function enterTextChertej(obj, number) {
	    document.getElementById("chertejSlaiderTextInner").getElementsByTagName('h2')[0].innerHTML = '<span>' + obj[number].number + '</span> ' + obj[number].title;
	    document.getElementById("chertejSlaiderTextInner").getElementsByTagName('p')[0].innerHTML = obj[number].text;
	}
	
	function turnLeft(obj) {
	    var okno2 = obj.inner.querySelector('.oknoSlider2');
	    var okno3 = obj.inner.querySelector('.oknoSlider3');
	    var okno4 = okno3.cloneNode(true);
	    obj.cont.style.height = okno2.offsetHeight;
	    okno3.getElementsByTagName('img')[0].setAttribute('src', obj.imgSrc);
	    okno3.getElementsByTagName('img')[0].setAttribute('number', obj.imgNumber);
	    setTimeout(function () {
	        okno2.style.transform = 'translateX(-100%)';
	        okno3.style.left = '0';
	        okno3.parentNode.appendChild(okno4);
	    }, 10);
	    setTimeout(function () {
	        okno2.parentNode.removeChild(okno2);
	        okno3.classList.remove("oknoSlider3");
	        okno3.classList.add("oknoSlider2");
	    }, 510);
	    setTimeout(function () {
	        obj.cont.style.height;
	    }, 520);
	    enterText(data, { src: obj.imgSrc, number: obj.imgNumber });
	    console.log(1);
	};
	
	function turnRight(obj) {
	    var okno2 = obj.inner.querySelector('.oknoSlider2');
	    var okno1 = obj.inner.querySelector('.oknoSlider1');
	    var okno4 = okno1.cloneNode(true);
	    obj.cont.style.height = okno2.offsetHeight;
	    okno1.getElementsByTagName('img')[0].setAttribute('src', obj.imgSrc);
	    okno1.getElementsByTagName('img')[0].setAttribute('number', obj.imgNumber);
	    setTimeout(function () {
	        okno2.style.transform = 'translateX(100%)';
	        okno1.style.right = '0';
	        okno1.parentNode.insertBefore(okno4, okno1.parentNode.firstChild);
	        console.log(okno1.getElementsByTagName('img')[0].getAttribute('src'), okno1.getElementsByTagName('img')[0].getAttribute('number'));
	    }, 10);
	    setTimeout(function () {
	        okno2.parentNode.removeChild(okno2);
	        okno1.classList.remove("oknoSlider1");
	        okno1.classList.add("oknoSlider2");
	    }, 510);
	    setTimeout(function () {
	        obj.cont.style.height;
	    }, 520);
	    enterText(data, { src: obj.imgSrc, number: obj.imgNumber });
	}
	
	function chertejLeft(obj) {
	    var okno2 = obj.cont.querySelector('.okno2');
	    var okno3 = obj.cont.querySelector('.okno3');
	    var okno4 = okno3.cloneNode(true);
	    okno3.getElementsByTagName('img')[0].setAttribute('src', obj.src);
	    okno3.setAttribute('number', obj.number);
	    setTimeout(function () {
	        okno2.style.transform = 'translateX(-100%)';
	        okno3.style.left = '0';
	        okno3.parentNode.appendChild(okno4);
	    }, 10);
	    setTimeout(function () {
	        okno2.parentNode.removeChild(okno2);
	        okno3.className = "okno okno2";
	    }, 510);
	}
	
	function chertejRight(obj) {
	    var okno2 = obj.cont.querySelector('.okno2');
	    var okno1 = obj.cont.querySelector('.okno1');
	    var okno4 = okno1.cloneNode(true);
	    okno1.getElementsByTagName('img')[0].setAttribute('src', obj.src);
	    okno1.setAttribute('number', obj.number);
	    setTimeout(function () {
	        okno2.style.transform = 'translateX(100%)';
	        okno1.style.left = '0';
	        okno1.parentNode.insertBefore(okno4, okno1.parentNode.firstChild);
	    }, 10);
	    setTimeout(function () {
	        okno2.parentNode.removeChild(okno2);
	        okno1.className = "okno okno2";
	    }, 510);
	}
	
	if (document.getElementById("disain")) {
	    (function () {
	        var disain = document.getElementById("disain");
	        var slides = disain.querySelectorAll('.smallPhotoDisain');
	        var disainSlaiderCont = document.getElementById("disainSlaiderCont");
	        var inner = disainSlaiderCont.querySelector('.sliderInner');
	        [].forEach.call(slides, function (el) {
	            el.addEventListener('click', function (ev) {
	                var index = el.getAttribute('number');
	                var attrvalue = el.getElementsByTagName('img')[0].getAttribute('src');
	                enterText(data, { src: attrvalue, number: index });
	                if (document.body.offsetWidth > 550) {
	                    if (!disainSlaiderCont.classList.contains("open")) {
	                        inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].setAttribute('src', attrvalue);
	                        inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].setAttribute('number', index);
	                        setTimeout(function () {
	                            disainSlaiderCont.style.height = 'auto';
	                        }, 300);
	                        disainSlaiderCont.style.height = inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].offsetHeight + 'px';
	                        disainSlaiderCont.classList.add("open");
	                    } else {
	                        var _number = inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].getAttribute('number');
	                        if (index !== _number && index < _number) {
	                            turnRight({ inner: inner, cont: disainSlaiderCont, imgSrc: attrvalue, imgNumber: index });
	                        } else if (index !== _number && index > _number) {
	                            turnLeft({ inner: inner, cont: disainSlaiderCont, imgSrc: attrvalue, imgNumber: index });
	                        };
	                    };
	                };
	            });
	        });
	        disainSlaiderCont.querySelector('.cross').addEventListener('click', function () {
	            disainSlaiderCont.style.height = inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].offsetHeight + 'px';
	            setTimeout(function () {
	                disainSlaiderCont.style.height = '0px';
	                disainSlaiderCont.classList.remove("open");
	            }, 10);
	        });
	        disainSlaiderCont.querySelector('.leftAngle').addEventListener('click', function () {
	            if (!disainSlaiderCont.querySelector('.leftAngle').classList.contains("notReady")) {
	                disainSlaiderCont.querySelector('.leftAngle').classList.add("notReady");
	                setTimeout(function () {
	                    disainSlaiderCont.querySelector('.leftAngle').classList.remove("notReady");
	                }, 600);
	                var previos = parseInt(inner.querySelector('.oknoSlider2').getElementsByTagName('img')[0].getAttribute('number')) - 1;
	                if (!disain.querySelector('[number="' + previos + '"]')) {
	                    previos = slides[slides.length - 1].getAttribute('number');
	                };
	                var _src = disain.querySelector('[number="' + previos + '"]').getElementsByTagName('img')[0].getAttribute('src');
	                turnRight({ inner: inner, cont: disainSlaiderCont, imgSrc: _src, imgNumber: previos });
	            };
	        });
	        disainSlaiderCont.querySelector('.rightAngle').addEventListener('click', function () {
	            if (!disainSlaiderCont.querySelector('.leftAngle').classList.contains("notReady")) {
	                disainSlaiderCont.querySelector('.leftAngle').classList.add("notReady");
	                setTimeout(function () {
	                    disainSlaiderCont.querySelector('.leftAngle').classList.remove("notReady");
	                }, 600);
	                var previos = parseInt(inner.querySelector('.oknoSlider2').getElementsByTagName('img')[0].getAttribute('number')) + 1;
	                if (!disain.querySelector('[number="' + previos + '"]')) {
	                    previos = parseInt(slides[0].getAttribute('number'));
	                };
	                var _src2 = disain.querySelector('[number="' + previos + '"]').getElementsByTagName('img')[0].getAttribute('src');
	                turnLeft({ inner: inner, cont: disainSlaiderCont, imgSrc: _src2, imgNumber: previos });
	            };
	        });
	        /*-------------------sliderTop----------------*/
	        var topCont = document.getElementById("sliderTopCont");
	        var topInner = topCont.querySelector('.sliderTopInner');
	        var topImages = document.getElementById("ImagesForsTop").getElementsByTagName('img');
	        var src = topImages[0].getAttribute('src');
	        topInner.querySelector('.oknoSlider2').getElementsByTagName('img')[0].setAttribute('src', src);
	        var number = 0;
	        setInterval(function () {
	            number++;
	            if (!topImages[number]) {
	                number = 0;
	            };
	            src = topImages[number].getAttribute('src');
	            turnTop({ inner: topInner, cont: topCont, imgSrc: src });
	        }, 10000);
	    })();
	};
	if (document.getElementById("beforeAfter")) {
	    (function () {
	        var beforeAfter = document.getElementById("beforeAfter");
	        var slaides = beforeAfter.querySelectorAll('.beforeSlaids');
	        var sliderCont = document.getElementById("beforeSlaiderCont");
	        var oknoSlider1 = createMyEl({ parent: sliderCont, className: 'pozCenter oknoSlider', nodeName: 'div' });
	        var oknoSlider2 = createMyEl({ parent: sliderCont, className: 'pozRight oknoSlider', nodeName: 'div' });
	        var oknoSlider3 = createMyEl({ parent: sliderCont, className: 'pozRight oknoSlider', nodeName: 'div' });
	        var oknoSlider4 = createMyEl({ parent: sliderCont, className: 'pozRight oknoSlider', nodeName: 'div' });
	        createMyEl({ parent: oknoSlider1, className: 'sliderInner', nodeName: 'div' });
	        createMyEl({ parent: oknoSlider2, className: 'sliderInner', nodeName: 'div' });
	        createMyEl({ parent: oknoSlider3, className: 'sliderInner', nodeName: 'div' });
	        createMyEl({ parent: oknoSlider4, className: 'sliderInner', nodeName: 'div' });
	        var masInners = sliderCont.querySelectorAll('.sliderInner');
	        [].forEach.call(masInners, function (el, ind) {
	            var comporison = slaides[ind].querySelector('.comporison');
	            var sloyBack = createMyEl({ parent: el, className: 'sloyBack', nodeName: 'div' });
	            var sloyForvard = createMyEl({ parent: el, className: 'sloyForvard', nodeName: 'div' });
	            var srcBack = comporison.getElementsByTagName('img')[0].src;
	            var srcForvard = comporison.getElementsByTagName('img')[1].src;
	            sloyBack.style.backgroundImage = 'url(' + srcBack + ')';
	            sloyForvard.style.backgroundImage = 'url(' + srcForvard + ')';
	            el.setAttribute('index', ind);
	            var img = comporison.getElementsByTagName('img')[0].cloneNode('false');
	            el.appendChild(img);
	            el.addEventListener('mousemove', function (ev) {
	                var moveProc = ((el.offsetWidth - ev.clientX + el.getBoundingClientRect().x) / sliderCont.offsetWidth * 100).toFixed(2);
	                sloyForvard.style.width = moveProc + '%';
	            });
	        });
	        var okna = sliderCont.querySelectorAll('.oknoSlider');
	        [].forEach.call(slaides, function (el) {
	            el.addEventListener('click', function (ev) {
	                [].forEach.call(slaides, function (elem) {
	                    if (elem.classList.contains("active")) {
	                        elem.classList.remove('active');
	                    }
	                });
	                el.classList.add("active");
	                var number = el.getAttribute('number');
	                var srcBack = el.querySelector('.comporison').getElementsByTagName('img')[0].src;
	                var srcForvard = el.querySelector('.comporison').getElementsByTagName('img')[1].src;
	                if (number !== parseInt(sliderCont.querySelector('.pozCenter').querySelector('.sliderInner').getAttribute('index'))) {
	                    [].forEach.call(okna, function (el, index) {
	                        if (number > parseInt(el.querySelector('.sliderInner').getAttribute('index'))) {
	                            if (el.classList.contains('pozCenter')) {
	                                el.style.transform = 'translateX(-100%)';
	                                setTimeout(function () {
	                                    el.style.transform = 'none';
	                                    el.className = 'pozLeft oknoSlider';
	                                }, 500);
	                            } else {
	                                el.className = 'pozLeft oknoSlider';
	                            }
	                        } else if (number < parseInt(el.querySelector('.sliderInner').getAttribute('index'))) {
	                            if (el.classList.contains('pozCenter')) {
	                                el.style.transform = 'translateX(100%)';
	                                setTimeout(function () {
	                                    el.style.transform = 'none';
	                                    el.className = 'pozRight oknoSlider';
	                                }, 500);
	                            } else {
	                                el.className = 'pozRight oknoSlider';
	                            }
	                        } else {
	                            el.classList.add('leftDeactive');
	                            setTimeout(function () {
	                                el.className = 'pozCenter oknoSlider';
	                            }, 500);
	                        }
	                    });
	                };
	            });
	        });
	    })();
	};
	if (document.getElementById('chertej')) {
	    (function () {
	        var switchers = document.getElementById('switchers').querySelectorAll('.switcher');
	        var slideImg = document.getElementById('switchers').querySelectorAll('[src]');
	        var cont = document.getElementById("chertejSlaiderInnerCont");
	        var slideOkno = createMyEl({ parent: cont, nodeName: 'div', className: 'okno okno1' });
	        createMyEl({ parent: slideOkno, nodeName: 'img', attr: { src: '', alt: 1 } });
	        slideOkno = slideOkno.cloneNode('true');
	        slideOkno.className = 'okno okno2';
	        cont.appendChild(slideOkno);
	        slideOkno = slideOkno.cloneNode('true');
	        slideOkno.className = 'okno okno3';
	        cont.appendChild(slideOkno);
	        var number = parseInt(document.getElementById('switchers').querySelector('.active').getAttribute('number'));
	        var src = document.getElementById('switchers').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	        cont.querySelector('.okno2').setAttribute('number', number);
	        cont.querySelector('.okno2').getElementsByTagName('img')[0].setAttribute('src', src);
	        enterTextChertej(disainProj, number);
	        [].forEach.call(switchers, function (el) {
	            el.addEventListener('click', function (ev) {
	                document.getElementById('switchers').querySelector('.active').classList.remove('active');
	                el.classList.add('active');
	                number = parseInt(el.getAttribute('number'));
	                var numberOkno = parseInt(cont.querySelector('.okno2').getAttribute('number'));
	                src = document.getElementById('switchers').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	                if (number > numberOkno) {
	                    chertejLeft({ cont: cont, number: number, src: src });
	                    enterTextChertej(disainProj, number);
	                } else if (number < numberOkno) {
	                    chertejRight({ cont: cont, number: number, src: src });
	                    enterTextChertej(disainProj, number);
	                };
	            });
	        });
	        document.getElementById("chertejSlaiderCont").querySelector('.angleLeft').addEventListener('click', function () {
	            switchers[number - 1].classList.remove("active");
	            number = parseInt(cont.querySelector('.okno2').getAttribute('number')) - 1;
	            if (!document.getElementById('switchers').querySelector('[number="' + number + '"]')) {
	                number = parseInt(switchers[switchers.length - 1].getAttribute('number'));
	            }
	            switchers[number - 1].classList.add("active");
	            src = document.getElementById('switchers').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	            chertejRight({ cont: cont, number: number, src: src });
	            enterTextChertej(disainProj, number);
	        });
	        document.getElementById("chertejSlaiderCont").querySelector('.angleRight').addEventListener('click', function () {
	            switchers[number - 1].classList.remove("active");
	            number = parseInt(cont.querySelector('.okno2').getAttribute('number')) + 1;
	            if (!document.getElementById('switchers').querySelector('[number="' + number + '"]')) {
	                number = parseInt(switchers[0].getAttribute('number'));
	            }
	            switchers[number - 1].classList.add("active");
	            src = document.getElementById('switchers').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	            chertejLeft({ cont: cont, number: number, src: src });
	            enterTextChertej(disainProj, number);
	        });
	    })();
	}
	if (document.getElementById("disainCost")) {
	    var _cont = document.getElementById("disainCostSliderCont");
	    var _slideOkno = createMyEl({ parent: _cont, nodeName: 'div', className: 'okno okno1' });
	    var _inner = createMyEl({ parent: _slideOkno, nodeName: 'div', className: 'disainCostSlider' });
	    createMyEl({ parent: _slideOkno, nodeName: 'img', attr: { src: '', alt: 1 } });
	    _slideOkno = _slideOkno.cloneNode('true');
	    _slideOkno.className = 'okno okno2';
	    _cont.appendChild(_slideOkno);
	    _slideOkno = _slideOkno.cloneNode('true');
	    _slideOkno.className = 'okno okno3';
	    _cont.appendChild(_slideOkno);
	    var _number2 = parseInt(document.getElementById('switchers').querySelector('.active').getAttribute('number'));
	    var _src3 = document.getElementById('switchers').querySelectorAll('[number="' + _number2 + '"]')[1].getAttribute('src');
	    _cont.querySelector('.okno2').setAttribute('number', _number2);
	    _cont.querySelector('.okno2').getElementsByTagName('img')[0].setAttribute('src', _src3);
	    enterTextChertej(disainProj, _number2);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWMyNThmOWNjNzc3OTgwNzhiMjMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ob21lLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZGlzYWluLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImljb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwicmVxdWlyZSIsInR1cm5Ub3AiLCJvYmoiLCJva25vMiIsImlubmVyIiwib2tubzMiLCJva25vNCIsImNsb25lTm9kZSIsImNvbnQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJpbWdTcmMiLCJzZXRUaW1lb3V0IiwidHJhbnNmb3JtIiwibGVmdCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlTXlFbCIsImRvbV9vYmoiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlTmFtZSIsImNsYXNzTmFtZSIsImF0dHIiLCJpIiwicGFyZW50IiwiZW50ZXJUZXh0IiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiaW5uZXJIVE1MIiwibnVtYmVyIiwidGl0bGUiLCJ0ZXh0IiwiYm90dG9tIiwiZW50ZXJUZXh0Q2hlcnRlaiIsInR1cm5MZWZ0IiwiaW1nTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInR1cm5SaWdodCIsIm9rbm8xIiwicmlnaHQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZ2V0QXR0cmlidXRlIiwiY2hlcnRlakxlZnQiLCJjaGVydGVqUmlnaHQiLCJkaXNhaW4iLCJzbGlkZXMiLCJkaXNhaW5TbGFpZGVyQ29udCIsImluZGV4IiwiYXR0cnZhbHVlIiwiYm9keSIsIm9mZnNldFdpZHRoIiwicHJldmlvcyIsInBhcnNlSW50IiwibGVuZ3RoIiwidG9wQ29udCIsInRvcElubmVyIiwidG9wSW1hZ2VzIiwic2V0SW50ZXJ2YWwiLCJiZWZvcmVBZnRlciIsInNsYWlkZXMiLCJzbGlkZXJDb250Iiwib2tub1NsaWRlcjEiLCJva25vU2xpZGVyMiIsIm9rbm9TbGlkZXIzIiwib2tub1NsaWRlcjQiLCJtYXNJbm5lcnMiLCJpbmQiLCJjb21wb3Jpc29uIiwic2xveUJhY2siLCJzbG95Rm9ydmFyZCIsInNyY0JhY2siLCJzcmNGb3J2YXJkIiwiYmFja2dyb3VuZEltYWdlIiwiaW1nIiwiZXYiLCJtb3ZlUHJvYyIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwidG9GaXhlZCIsIndpZHRoIiwib2tuYSIsImVsZW0iLCJzd2l0Y2hlcnMiLCJzbGlkZUltZyIsInNsaWRlT2tubyIsImFsdCIsImRpc2FpblByb2oiLCJudW1iZXJPa25vIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLElBQUdBLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQkMsU0FBU0MsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBaEIsRUFBc0QsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pELE1BQUlDLElBQUksQ0FBQ0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsRUFBa0NGLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUEzQixDQUFsQyxFQUFtRUYsS0FBS0Ms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SWhCLFFBQU1qRCxTQUFTZ0QsY0FBVCxDQUF3QixXQUF4QixFQUFxQy9DLGdCQUFyQyxlQUFrRWtELFFBQWxFLFNBQThFLENBQTlFLEVBQWlGYyxZQUFqRixDQUE4RixLQUE5RixDQUFWO0FBQ0F2QyxXQUFLZCxhQUFMLENBQW1CLFFBQW5CLEVBQTZCaUIsWUFBN0IsQ0FBMEMsUUFBMUMsRUFBb0RzQixRQUFwRDtBQUNBekIsV0FBS2QsYUFBTCxDQUFtQixRQUFuQixFQUE2QkYsb0JBQTdCLENBQWtELEtBQWxELEVBQXlELENBQXpELEVBQTREbUIsWUFBNUQsQ0FBeUUsS0FBekUsRUFBZ0ZvQixLQUFoRjtBQUNBTSxzQkFBaUJ3RCxVQUFqQixFQUE2QjVELFFBQTdCO0FBQ0gsRyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWMyNThmOWNjNzc3OTgwNzhiMjMiLCJbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0ZWtsbycpLCAoZSkgPT4ge1xuICAgIHZhciB0ID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIyMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIyMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIyMCldO1xuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoJHt0WzBdfSwke3RbMV19LCR7dFsyXX0sMC4zMClgO1xufSk7XG5sZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJylbMF07XG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpO1xuaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9Pntcblx0aWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1iYXJzJykpIHtcblx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcblx0XHRpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcblx0XHRpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cdFx0aWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10aW1lcycpO1xuXHRcdGljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuXHR9O1xufSk7XG5yZXF1aXJlKCcuL2Rpc2Fpbi5qcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvaG9tZS5qcyIsImZ1bmN0aW9uIHR1cm5Ub3Aob2JqKSB7XG4gICAgbGV0IG9rbm8yID0gb2JqLmlubmVyLnF1ZXJ5U2VsZWN0b3IoJy5va25vU2xpZGVyMicpO1xuICAgIGxldCBva25vMyA9IG9iai5pbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjMnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0ID0gb2tubzIub2Zmc2V0SGVpZ2h0O1xuICAgIG9rbm8zLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5pbWdTcmMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0xMDAlKSc7XG4gICAgICAgIG9rbm8zLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG9rbm8zLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQob2tubzQpO1xuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8zLmNsYXNzTGlzdC5yZW1vdmUoXCJva25vU2xpZGVyM1wiKTtcbiAgICAgICAgb2tubzMuY2xhc3NMaXN0LmFkZChcIm9rbm9TbGlkZXIyXCIpO1xuICAgIH0sIDIwMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYmouY29udC5zdHlsZS5oZWlnaHQ7XG4gICAgfSwgMjAxMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU15RWwoZG9tX29iaikge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZG9tX29iai5ub2RlTmFtZSk7XG4gICAgaWYgKGRvbV9vYmouY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGRvbV9vYmouY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAoZG9tX29iai5hdHRyKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZG9tX29iai5hdHRyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaSwgZG9tX29iai5hdHRyW2ldKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGRvbV9vYmoucGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICByZXR1cm4gZWw7XG59O1xuXG5mdW5jdGlvbiBlbnRlclRleHQoZGF0YSwgb2JqKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5QaG90b0Rpc2FpbicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5zcmMpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpc2FpblwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDUnKVswXS5pbm5lckhUTUwgPSBgPHNwYW4+JHtkYXRhW29iai5udW1iZXJdLm51bWJlcn08L3NwYW4+ICR7ZGF0YVtvYmoubnVtYmVyXS50aXRsZX1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpc2FpblwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IGRhdGFbb2JqLm51bWJlcl0udGV4dDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbURpc2FpblwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IGRhdGFbb2JqLm51bWJlcl0uYm90dG9tO1xufVxuXG5mdW5jdGlvbiBlbnRlclRleHRDaGVydGVqKG9iaiwgbnVtYmVyKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVydGVqU2xhaWRlclRleHRJbm5lclwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDInKVswXS5pbm5lckhUTUwgPSBgPHNwYW4+JHtvYmpbbnVtYmVyXS5udW1iZXJ9PC9zcGFuPiAke29ialtudW1iZXJdLnRpdGxlfWA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVydGVqU2xhaWRlclRleHRJbm5lclwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IG9ialtudW1iZXJdLnRleHQ7XG59XG5cbmZ1bmN0aW9uIHR1cm5MZWZ0KG9iaikge1xuICAgIGxldCBva25vMiA9IG9iai5pbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjInKTtcbiAgICBsZXQgb2tubzMgPSBvYmouaW5uZXIucXVlcnlTZWxlY3RvcignLm9rbm9TbGlkZXIzJyk7XG4gICAgbGV0IG9rbm80ID0gb2tubzMuY2xvbmVOb2RlKHRydWUpO1xuICAgIG9iai5jb250LnN0eWxlLmhlaWdodCA9IG9rbm8yLm9mZnNldEhlaWdodDtcbiAgICBva25vMy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouaW1nU3JjKTtcbiAgICBva25vMy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdudW1iZXInLCBvYmouaW1nTnVtYmVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgb2tubzMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgb2tubzMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChva25vNCk7XG4gICAgfSwgMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9rbm8yKTtcbiAgICAgICAgb2tubzMuY2xhc3NMaXN0LnJlbW92ZShcIm9rbm9TbGlkZXIzXCIpO1xuICAgICAgICBva25vMy5jbGFzc0xpc3QuYWRkKFwib2tub1NsaWRlcjJcIik7XG4gICAgfSwgNTEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0O1xuICAgIH0sIDUyMCk7XG4gICAgZW50ZXJUZXh0KGRhdGEsIHsgc3JjOiBvYmouaW1nU3JjLCBudW1iZXI6IG9iai5pbWdOdW1iZXIgfSk7XG4gICAgY29uc29sZS5sb2coMSk7XG59O1xuXG5mdW5jdGlvbiB0dXJuUmlnaHQob2JqKSB7XG4gICAgbGV0IG9rbm8yID0gb2JqLmlubmVyLnF1ZXJ5U2VsZWN0b3IoJy5va25vU2xpZGVyMicpO1xuICAgIGxldCBva25vMSA9IG9iai5pbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjEnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0ID0gb2tubzIub2Zmc2V0SGVpZ2h0O1xuICAgIG9rbm8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5pbWdTcmMpO1xuICAgIG9rbm8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ251bWJlcicsIG9iai5pbWdOdW1iZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgIG9rbm8xLnN0eWxlLnJpZ2h0ID0gJzAnO1xuICAgICAgICBva25vMS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShva25vNCwgb2tubzEucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc29sZS5sb2cob2tubzEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLmdldEF0dHJpYnV0ZSgnc3JjJyksIG9rbm8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKVxuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8xLmNsYXNzTGlzdC5yZW1vdmUoXCJva25vU2xpZGVyMVwiKTtcbiAgICAgICAgb2tubzEuY2xhc3NMaXN0LmFkZChcIm9rbm9TbGlkZXIyXCIpO1xuICAgIH0sIDUxMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9iai5jb250LnN0eWxlLmhlaWdodDtcbiAgICB9LCA1MjApO1xuICAgIGVudGVyVGV4dChkYXRhLCB7IHNyYzogb2JqLmltZ1NyYywgbnVtYmVyOiBvYmouaW1nTnVtYmVyIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVydGVqTGVmdChvYmopIHtcbiAgICBsZXQgb2tubzIgPSBvYmouY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKTtcbiAgICBsZXQgb2tubzMgPSBvYmouY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzMnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2tubzMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgb2JqLnNyYyk7XG4gICAgb2tubzMuc2V0QXR0cmlidXRlKCdudW1iZXInLCBvYmoubnVtYmVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgb2tubzMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgb2tubzMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChva25vNCk7XG4gICAgfSwgMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9rbm8yKTtcbiAgICAgICAgb2tubzMuY2xhc3NOYW1lID0gXCJva25vIG9rbm8yXCI7XG4gICAgfSwgNTEwKTtcbn1cblxuZnVuY3Rpb24gY2hlcnRlalJpZ2h0KG9iaikge1xuICAgIGxldCBva25vMiA9IG9iai5jb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMicpO1xuICAgIGxldCBva25vMSA9IG9iai5jb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMScpO1xuICAgIGxldCBva25vNCA9IG9rbm8xLmNsb25lTm9kZSh0cnVlKTtcbiAgICBva25vMS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouc3JjKTtcbiAgICBva25vMS5zZXRBdHRyaWJ1dGUoJ251bWJlcicsIG9iai5udW1iZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgIG9rbm8xLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG9rbm8xLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG9rbm80LCBva25vMS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8xLmNsYXNzTmFtZSA9IFwib2tubyBva25vMlwiO1xuICAgIH0sIDUxMCk7XG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpblwiKSkge1xuICAgIGxldCBkaXNhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpblwiKTtcbiAgICBsZXQgc2xpZGVzID0gZGlzYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWFsbFBob3RvRGlzYWluJyk7XG4gICAgbGV0IGRpc2FpblNsYWlkZXJDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNhaW5TbGFpZGVyQ29udFwiKTtcbiAgICBsZXQgaW5uZXIgPSBkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVySW5uZXInKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoc2xpZGVzLCAoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUoJ251bWJlcicpO1xuICAgICAgICAgICAgbGV0IGF0dHJ2YWx1ZSA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgZW50ZXJUZXh0KGRhdGEsIHsgc3JjOiBhdHRydmFsdWUsIG51bWJlcjogaW5kZXggfSlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhaW5TbGFpZGVyQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2tub1NsaWRlcjJcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXIucXVlcnlTZWxlY3RvcihcIi5va25vU2xpZGVyMlwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdudW1iZXInLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkaXNhaW5TbGFpZGVyQ29udC5zdHlsZS5oZWlnaHQgPSAnYXV0bycgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWluU2xhaWRlckNvbnQuc3R5bGUuaGVpZ2h0ID0gaW5uZXIucXVlcnlTZWxlY3RvcihcIi5va25vU2xpZGVyMlwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgZGlzYWluU2xhaWRlckNvbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IGlubmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2tub1NsaWRlcjJcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gbnVtYmVyICYmIGluZGV4IDwgbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmlnaHQoeyBpbm5lcjogaW5uZXIsIGNvbnQ6IGRpc2FpblNsYWlkZXJDb250LCBpbWdTcmM6IGF0dHJ2YWx1ZSwgaW1nTnVtYmVyOiBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gbnVtYmVyICYmIGluZGV4ID4gbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuTGVmdCh7IGlubmVyOiBpbm5lciwgY29udDogZGlzYWluU2xhaWRlckNvbnQsIGltZ1NyYzogYXR0cnZhbHVlLCBpbWdOdW1iZXI6IGluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcuY3Jvc3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzYWluU2xhaWRlckNvbnQuc3R5bGUuaGVpZ2h0ID0gaW5uZXIucXVlcnlTZWxlY3RvcihcIi5va25vU2xpZGVyMlwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNhaW5TbGFpZGVyQ29udC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIGRpc2FpblNsYWlkZXJDb250LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICB9LCAxMCk7XG4gICAgfSk7XG4gICAgZGlzYWluU2xhaWRlckNvbnQucXVlcnlTZWxlY3RvcignLmxlZnRBbmdsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIWRpc2FpblNsYWlkZXJDb250LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0QW5nbGUnKS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RSZWFkeVwiKSkge1xuICAgICAgICAgICAgZGlzYWluU2xhaWRlckNvbnQucXVlcnlTZWxlY3RvcignLmxlZnRBbmdsZScpLmNsYXNzTGlzdC5hZGQoXCJub3RSZWFkeVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc2FpblNsYWlkZXJDb250LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0QW5nbGUnKS5jbGFzc0xpc3QucmVtb3ZlKFwibm90UmVhZHlcIilcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICBsZXQgcHJldmlvcyA9IHBhcnNlSW50KGlubmVyLnF1ZXJ5U2VsZWN0b3IoJy5va25vU2xpZGVyMicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKSAtIDE7XG4gICAgICAgICAgICBpZiAoIWRpc2Fpbi5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVxcXCIke3ByZXZpb3N9XFxcIl1gKSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3MgPSBzbGlkZXNbc2xpZGVzLmxlbmd0aCAtIDFdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHNyYyA9IGRpc2Fpbi5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVxcXCIke3ByZXZpb3N9XFxcIl1gKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICAgIHR1cm5SaWdodCh7IGlubmVyOiBpbm5lciwgY29udDogZGlzYWluU2xhaWRlckNvbnQsIGltZ1NyYzogc3JjLCBpbWdOdW1iZXI6IHByZXZpb3MgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgZGlzYWluU2xhaWRlckNvbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0QW5nbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKCFkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcubGVmdEFuZ2xlJykuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90UmVhZHlcIikpIHtcbiAgICAgICAgICAgIGRpc2FpblNsYWlkZXJDb250LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0QW5nbGUnKS5jbGFzc0xpc3QuYWRkKFwibm90UmVhZHlcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcubGVmdEFuZ2xlJykuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFJlYWR5XCIpXG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgbGV0IHByZXZpb3MgPSBwYXJzZUludChpbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjInKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uZ2V0QXR0cmlidXRlKCdudW1iZXInKSkgKyAxO1xuICAgICAgICAgICAgaWYgKCFkaXNhaW4ucXVlcnlTZWxlY3RvcihgW251bWJlcj1cXFwiJHtwcmV2aW9zfVxcXCJdYCkpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW9zID0gcGFyc2VJbnQoc2xpZGVzWzBdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBzcmMgPSBkaXNhaW4ucXVlcnlTZWxlY3RvcihgW251bWJlcj1cXFwiJHtwcmV2aW9zfVxcXCJdYCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICB0dXJuTGVmdCh7IGlubmVyOiBpbm5lciwgY29udDogZGlzYWluU2xhaWRlckNvbnQsIGltZ1NyYzogc3JjLCBpbWdOdW1iZXI6IHByZXZpb3MgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tc2xpZGVyVG9wLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgbGV0IHRvcENvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclRvcENvbnRcIik7XG4gICAgbGV0IHRvcElubmVyID0gdG9wQ29udC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyVG9wSW5uZXInKTtcbiAgICBsZXQgdG9wSW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJJbWFnZXNGb3JzVG9wXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbiAgICBsZXQgc3JjID0gdG9wSW1hZ2VzWzBdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgdG9wSW5uZXIucXVlcnlTZWxlY3RvcignLm9rbm9TbGlkZXIyJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBsZXQgbnVtYmVyID0gMDtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIG51bWJlcisrO1xuICAgICAgICBpZiAoIXRvcEltYWdlc1tudW1iZXJdKSB7XG4gICAgICAgICAgICBudW1iZXIgPSAwO1xuICAgICAgICB9O1xuICAgICAgICBzcmMgPSB0b3BJbWFnZXNbbnVtYmVyXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB0dXJuVG9wKHsgaW5uZXI6IHRvcElubmVyLCBjb250OiB0b3BDb250LCBpbWdTcmM6IHNyYyB9KTtcbiAgICB9LCAxMDAwMCk7XG59O1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVmb3JlQWZ0ZXJcIikpIHtcbiAgICBsZXQgYmVmb3JlQWZ0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlZm9yZUFmdGVyXCIpO1xuICAgIGxldCBzbGFpZGVzID0gYmVmb3JlQWZ0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmJlZm9yZVNsYWlkcycpO1xuICAgIGxldCBzbGlkZXJDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZWZvcmVTbGFpZGVyQ29udFwiKTtcbiAgICBsZXQgb2tub1NsaWRlcjEgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBzbGlkZXJDb250LCBjbGFzc05hbWU6ICdwb3pDZW50ZXIgb2tub1NsaWRlcicsIG5vZGVOYW1lOiAnZGl2JyB9KTtcbiAgICBsZXQgb2tub1NsaWRlcjIgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBzbGlkZXJDb250LCBjbGFzc05hbWU6ICdwb3pSaWdodCBva25vU2xpZGVyJywgbm9kZU5hbWU6ICdkaXYnIH0pO1xuICAgIGxldCBva25vU2xpZGVyMyA9IGNyZWF0ZU15RWwoeyBwYXJlbnQ6IHNsaWRlckNvbnQsIGNsYXNzTmFtZTogJ3BvelJpZ2h0IG9rbm9TbGlkZXInLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgbGV0IG9rbm9TbGlkZXI0ID0gY3JlYXRlTXlFbCh7IHBhcmVudDogc2xpZGVyQ29udCwgY2xhc3NOYW1lOiAncG96UmlnaHQgb2tub1NsaWRlcicsIG5vZGVOYW1lOiAnZGl2JyB9KTtcbiAgICBjcmVhdGVNeUVsKHsgcGFyZW50OiBva25vU2xpZGVyMSwgY2xhc3NOYW1lOiAnc2xpZGVySW5uZXInLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgY3JlYXRlTXlFbCh7IHBhcmVudDogb2tub1NsaWRlcjIsIGNsYXNzTmFtZTogJ3NsaWRlcklubmVyJywgbm9kZU5hbWU6ICdkaXYnIH0pO1xuICAgIGNyZWF0ZU15RWwoeyBwYXJlbnQ6IG9rbm9TbGlkZXIzLCBjbGFzc05hbWU6ICdzbGlkZXJJbm5lcicsIG5vZGVOYW1lOiAnZGl2JyB9KTtcbiAgICBjcmVhdGVNeUVsKHsgcGFyZW50OiBva25vU2xpZGVyNCwgY2xhc3NOYW1lOiAnc2xpZGVySW5uZXInLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgbGV0IG1hc0lubmVycyA9IHNsaWRlckNvbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcklubmVyJyk7XG4gICAgW10uZm9yRWFjaC5jYWxsKG1hc0lubmVycywgKGVsLCBpbmQpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvcmlzb24gPSBzbGFpZGVzW2luZF0ucXVlcnlTZWxlY3RvcignLmNvbXBvcmlzb24nKTtcbiAgICAgICAgbGV0IHNsb3lCYWNrID0gY3JlYXRlTXlFbCh7IHBhcmVudDogZWwsIGNsYXNzTmFtZTogJ3Nsb3lCYWNrJywgbm9kZU5hbWU6ICdkaXYnIH0pO1xuICAgICAgICBsZXQgc2xveUZvcnZhcmQgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBlbCwgY2xhc3NOYW1lOiAnc2xveUZvcnZhcmQnLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgICAgIGxldCBzcmNCYWNrID0gY29tcG9yaXNvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3JjO1xuICAgICAgICBsZXQgc3JjRm9ydmFyZCA9IGNvbXBvcmlzb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzFdLnNyYztcbiAgICAgICAgc2xveUJhY2suc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgc3JjQmFjayArICcpJztcbiAgICAgICAgc2xveUZvcnZhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgc3JjRm9ydmFyZCArICcpJztcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdpbmRleCcsIGluZCk7XG4gICAgICAgIGxldCBpbWcgPSBjb21wb3Jpc29uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5jbG9uZU5vZGUoJ2ZhbHNlJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldikgPT4ge1xuICAgICAgICAgICAgbGV0IG1vdmVQcm9jID0gKCgoZWwub2Zmc2V0V2lkdGggLSBldi5jbGllbnRYICsgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCkgLyBzbGlkZXJDb250Lm9mZnNldFdpZHRoKSAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHNsb3lGb3J2YXJkLnN0eWxlLndpZHRoID0gbW92ZVByb2MgKyAnJSc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxldCBva25hID0gc2xpZGVyQ29udC5xdWVyeVNlbGVjdG9yQWxsKCcub2tub1NsaWRlcicpO1xuICAgIFtdLmZvckVhY2guY2FsbChzbGFpZGVzLCBlbCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNsYWlkZXMsIGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBlbC5nZXRBdHRyaWJ1dGUoJ251bWJlcicpO1xuICAgICAgICAgICAgbGV0IHNyY0JhY2sgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY29tcG9yaXNvbicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zcmM7XG4gICAgICAgICAgICBsZXQgc3JjRm9ydmFyZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Jpc29uJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzFdLnNyYztcbiAgICAgICAgICAgIGlmIChudW1iZXIgIT09IHBhcnNlSW50KHNsaWRlckNvbnQucXVlcnlTZWxlY3RvcignLnBvekNlbnRlcicpLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJJbm5lcicpLmdldEF0dHJpYnV0ZSgnaW5kZXgnKSkpIHtcbiAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwob2tuYSwgKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyID4gcGFyc2VJbnQoZWwucXVlcnlTZWxlY3RvcignLnNsaWRlcklubmVyJykuZ2V0QXR0cmlidXRlKCdpbmRleCcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygncG96Q2VudGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pMZWZ0IG9rbm9TbGlkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pMZWZ0IG9rbm9TbGlkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IHBhcnNlSW50KGVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJJbm5lcicpLmdldEF0dHJpYnV0ZSgnaW5kZXgnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvekNlbnRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMTAwJSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pSaWdodCBva25vU2xpZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAncG96UmlnaHQgb2tub1NsaWRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0RGVhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pDZW50ZXIgb2tub1NsaWRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlcnRlaicpKSB7XG4gICAgbGV0IHN3aXRjaGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXInKTtcbiAgICBsZXQgc2xpZGVJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoZXJzJykucXVlcnlTZWxlY3RvckFsbCgnW3NyY10nKTtcbiAgICBsZXQgY29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlcnRlalNsYWlkZXJJbm5lckNvbnRcIik7XG4gICAgbGV0IHNsaWRlT2tubyA9IGNyZWF0ZU15RWwoeyBwYXJlbnQ6IGNvbnQsIG5vZGVOYW1lOiAnZGl2JywgY2xhc3NOYW1lOiAnb2tubyBva25vMScgfSk7XG4gICAgY3JlYXRlTXlFbCh7IHBhcmVudDogc2xpZGVPa25vLCBub2RlTmFtZTogJ2ltZycsIGF0dHI6IHsgc3JjOiAnJywgYWx0OiAxIH0gfSk7XG4gICAgc2xpZGVPa25vID0gc2xpZGVPa25vLmNsb25lTm9kZSgndHJ1ZScpO1xuICAgIHNsaWRlT2tuby5jbGFzc05hbWUgPSAnb2tubyBva25vMic7XG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkZU9rbm8pO1xuICAgIHNsaWRlT2tubyA9IHNsaWRlT2tuby5jbG9uZU5vZGUoJ3RydWUnKTtcbiAgICBzbGlkZU9rbm8uY2xhc3NOYW1lID0gJ29rbm8gb2tubzMnO1xuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZGVPa25vKTtcbiAgICBsZXQgbnVtYmVyID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKTtcbiAgICBsZXQgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuc2V0QXR0cmlidXRlKCdudW1iZXInLCBudW1iZXIpO1xuICAgIGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBlbnRlclRleHRDaGVydGVqKGRpc2FpblByb2osIG51bWJlcik7XG4gICAgW10uZm9yRWFjaC5jYWxsKHN3aXRjaGVycywgZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yKGAuYWN0aXZlYCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG51bWJlciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICAgICAgbGV0IG51bWJlck9rbm8gPSBwYXJzZUludChjb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMicpLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICAgICAgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKG51bWJlciA+IG51bWJlck9rbm8pIHtcbiAgICAgICAgICAgICAgICBjaGVydGVqTGVmdCh7IGNvbnQ6IGNvbnQsIG51bWJlcjogbnVtYmVyLCBzcmM6IHNyYyB9KTtcbiAgICAgICAgICAgICAgICBlbnRlclRleHRDaGVydGVqKGRpc2FpblByb2osIG51bWJlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IG51bWJlck9rbm8pIHtcbiAgICAgICAgICAgICAgICBjaGVydGVqUmlnaHQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgICAgICAgICAgZW50ZXJUZXh0Q2hlcnRlaihkaXNhaW5Qcm9qLCBudW1iZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVydGVqU2xhaWRlckNvbnRcIikucXVlcnlTZWxlY3RvcignLmFuZ2xlTGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hlcnNbbnVtYmVyLTFdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIG51bWJlciA9IHBhcnNlSW50KGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0QXR0cmlidXRlKCdudW1iZXInKSkgLSAxO1xuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVwiJHtudW1iZXJ9XCJdYCkpIHtcbiAgICAgICAgICAgIG51bWJlciA9IHBhcnNlSW50KHN3aXRjaGVyc1tzd2l0Y2hlcnMubGVuZ3RoLTFdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaGVyc1tudW1iZXItMV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBjaGVydGVqUmlnaHQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgIGVudGVyVGV4dENoZXJ0ZWooZGlzYWluUHJvaiwgbnVtYmVyKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZXJ0ZWpTbGFpZGVyQ29udFwiKS5xdWVyeVNlbGVjdG9yKCcuYW5nbGVSaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hlcnNbbnVtYmVyLTFdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIG51bWJlciA9IHBhcnNlSW50KGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0QXR0cmlidXRlKCdudW1iZXInKSkgKyAxO1xuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVwiJHtudW1iZXJ9XCJdYCkpIHtcbiAgICAgICAgICAgIG51bWJlciA9IHBhcnNlSW50KHN3aXRjaGVyc1swXS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2hlcnNbbnVtYmVyLTFdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHNyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yQWxsKGBbbnVtYmVyPVwiJHtudW1iZXJ9XCJdYClbMV0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgY2hlcnRlakxlZnQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgIGVudGVyVGV4dENoZXJ0ZWooZGlzYWluUHJvaiwgbnVtYmVyKTtcbiAgICB9KTtcbn1cbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzYWluQ29zdFwiKSkge1xuICAgIGxldCBjb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNhaW5Db3N0U2xpZGVyQ29udFwiKTtcbiAgICBsZXQgc2xpZGVPa25vID0gY3JlYXRlTXlFbCh7IHBhcmVudDogY29udCwgbm9kZU5hbWU6ICdkaXYnLCBjbGFzc05hbWU6ICdva25vIG9rbm8xJyB9KTtcbiAgICBsZXQgaW5uZXIgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBzbGlkZU9rbm8sIG5vZGVOYW1lOiAnZGl2JywgY2xhc3NOYW1lOiAnZGlzYWluQ29zdFNsaWRlcicgfSk7XG4gICAgY3JlYXRlTXlFbCh7IHBhcmVudDogc2xpZGVPa25vLCBub2RlTmFtZTogJ2ltZycsIGF0dHI6IHsgc3JjOiAnJywgYWx0OiAxIH0gfSk7XG4gICAgc2xpZGVPa25vID0gc2xpZGVPa25vLmNsb25lTm9kZSgndHJ1ZScpO1xuICAgIHNsaWRlT2tuby5jbGFzc05hbWUgPSAnb2tubyBva25vMic7XG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkZU9rbm8pO1xuICAgIHNsaWRlT2tubyA9IHNsaWRlT2tuby5jbG9uZU5vZGUoJ3RydWUnKTtcbiAgICBzbGlkZU9rbm8uY2xhc3NOYW1lID0gJ29rbm8gb2tubzMnO1xuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZGVPa25vKTtcbiAgICBsZXQgbnVtYmVyID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKTtcbiAgICBsZXQgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuc2V0QXR0cmlidXRlKCdudW1iZXInLCBudW1iZXIpO1xuICAgIGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBlbnRlclRleHRDaGVydGVqKGRpc2FpblByb2osIG51bWJlcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9kaXNhaW4uanMiXSwic291cmNlUm9vdCI6IiJ9