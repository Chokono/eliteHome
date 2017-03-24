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
	        obj.cont.style.height = 'auto';
	    }, 520);
	    enterText(data, { src: obj.imgSrc, number: obj.imgNumber });
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
	
	function disainCostLeft(obj) {
	    var okno2 = obj.cont.querySelector('.okno2');
	    var okno3 = obj.cont.querySelector('.okno3');
	    var okno4 = okno3.cloneNode(true);
	    obj.cont.style.height = okno2.offsetHeight;
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
	    setTimeout(function () {
	        obj.cont.style.height = 'auto';
	    }, 520);
	}
	
	function disainCostRight(obj) {
	    var okno2 = obj.cont.querySelector('.okno2');
	    var okno1 = obj.cont.querySelector('.okno1');
	    var okno4 = okno1.cloneNode(true);
	    obj.cont.style.height = okno2.offsetHeight;
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
	    setTimeout(function () {
	        obj.cont.style.height = 'auto';
	    }, 520);
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
	            //       let button = createMyEl({parent: sloyForvard, className: 'sloyPolz', nodeName: 'div'});
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
	    (function () {
	        var slideImg = document.getElementById('disainCostLine').querySelectorAll('[src]');
	        var switcers = document.getElementById("disainCostLine").querySelectorAll('.disainCostSliderMin');
	        var cont = document.getElementById("disainCostSliderCont");
	        var slideOkno = createMyEl({ parent: cont, nodeName: 'div', className: 'okno okno1' });
	        var inner = createMyEl({ parent: slideOkno, nodeName: 'div', className: 'disainCostSlider' });
	        createMyEl({ parent: inner, nodeName: 'img', attr: { src: '', alt: 1 } });
	        slideOkno = slideOkno.cloneNode('true');
	        slideOkno.className = 'okno okno2';
	        cont.appendChild(slideOkno);
	        slideOkno = slideOkno.cloneNode('true');
	        slideOkno.className = 'okno okno3';
	        cont.appendChild(slideOkno);
	        var number = parseInt(document.getElementById('disainCostLine').querySelector('.active').getAttribute('number'));
	        var src = document.getElementById('disainCostLine').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	        cont.querySelector('.okno2').setAttribute('number', number);
	        cont.querySelector('.okno2').getElementsByTagName('img')[0].setAttribute('src', src);
	        [].forEach.call(switcers, function (el) {
	            el.addEventListener('click', function (ev) {
	                document.getElementById('disainCostLine').querySelector('.active').classList.remove('active');
	                el.classList.add('active');
	                number = parseInt(el.getAttribute('number'));
	                var numberOkno = parseInt(cont.querySelector('.okno2').getAttribute('number'));
	                src = document.getElementById('disainCostLine').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	                if (number > numberOkno) {
	                    chertejLeft({ cont: cont, number: number, src: src });
	                } else if (number < numberOkno) {
	                    chertejRight({ cont: cont, number: number, src: src });
	                };
	            });
	        });
	        document.getElementById("disainCostSliderRamka").querySelector('.angleLeft').addEventListener('click', function () {
	            switcers[number - 1].classList.remove("active");
	            number = parseInt(cont.querySelector('.okno2').getAttribute('number')) - 1;
	            if (!document.getElementById('disainCostLine').querySelector('[number="' + number + '"]')) {
	                number = parseInt(switcers[switcers.length - 1].getAttribute('number'));
	            }
	            switcers[number - 1].classList.add("active");
	            src = document.getElementById('disainCostLine').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	            chertejRight({ cont: cont, number: number, src: src });
	        });
	        document.getElementById("disainCostSliderRamka").querySelector('.angleRight').addEventListener('click', function () {
	            switcers[number - 1].classList.remove("active");
	            number = parseInt(cont.querySelector('.okno2').getAttribute('number')) + 1;
	            if (!document.getElementById('disainCostLine').querySelector('[number="' + number + '"]')) {
	                number = parseInt(switcers[0].getAttribute('number'));
	            }
	            switcers[number - 1].classList.add("active");
	            src = document.getElementById('disainCostLine').querySelectorAll('[number="' + number + '"]')[1].getAttribute('src');
	            chertejLeft({ cont: cont, number: number, src: src });
	        });
	    })();
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzZiZWZjMWQ3MWI2NmM4NTlmZTQiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ob21lLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZGlzYWluLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImljb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwicmVxdWlyZSIsInR1cm5Ub3AiLCJvYmoiLCJva25vMiIsImlubmVyIiwib2tubzMiLCJva25vNCIsImNsb25lTm9kZSIsImNvbnQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJpbWdTcmMiLCJzZXRUaW1lb3V0IiwidHJhbnNmb3JtIiwibGVmdCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlTXlFbCIsImRvbV9vYmoiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlTmFtZSIsImNsYXNzTmFtZSIsImF0dHIiLCJpIiwicGFyZW50IiwiZW50ZXJUZXh0IiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiaW5uZXJIVE1MIiwibnVtYmVyIiwidGl0bGUiLCJ0ZXh0IiwiYm90dG9tIiwiZW50ZXJUZXh0Q2hlcnRlaiIsInR1cm5MZWZ0IiwiaW1nTnVtYmVyIiwidHVyblJpZ2h0Iiwib2tubzEiLCJyaWdodCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwiZGlzYWluQ29zdExlZnQiLCJkaXNhaW5Db3N0UmlnaHQiLCJjaGVydGVqTGVmdCIsImNoZXJ0ZWpSaWdodCIsImRpc2FpbiIsInNsaWRlcyIsImRpc2FpblNsYWlkZXJDb250IiwiaW5kZXgiLCJhdHRydmFsdWUiLCJib2R5Iiwib2Zmc2V0V2lkdGgiLCJwcmV2aW9zIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJ0b3BDb250IiwidG9wSW5uZXIiLCJ0b3BJbWFnZXMiLCJzZXRJbnRlcnZhbCIsImJlZm9yZUFmdGVyIiwic2xhaWRlcyIsInNsaWRlckNvbnQiLCJva25vU2xpZGVyMSIsIm9rbm9TbGlkZXIyIiwib2tub1NsaWRlcjMiLCJva25vU2xpZGVyNCIsIm1hc0lubmVycyIsImluZCIsImNvbXBvcmlzb24iLCJzbG95QmFjayIsInNsb3lGb3J2YXJkIiwic3JjQmFjayIsInNyY0ZvcnZhcmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWciLCJldiIsIm1vdmVQcm9jIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJ0b0ZpeGVkIiwid2lkdGgiLCJva25hIiwiZWxlbSIsInN3aXRjaGVycyIsInNsaWRlSW1nIiwic2xpZGVPa25vIiwiYWx0IiwiZGlzYWluUHJvaiIsIm51bWJlck9rbm8iLCJzd2l0Y2VycyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxJQUFHQSxPQUFILENBQVdDLElBQVgsQ0FBZ0JDLFNBQVNDLGdCQUFULENBQTBCLFNBQTFCLENBQWhCLEVBQXNELFVBQUNDLENBQUQsRUFBTztBQUN6RCxNQUFJQyxJQUFJLENBQUNDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUEzQixDQUFELEVBQWtDRixLQUFLQyxLQUFMLENB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LFNBQXJCLENBQStCRyxNQUEvQixDQUFzQyxRQUF0QztBQUNBa0Msc0JBQVMyQixTQUFTcEQsS0FBS2QsYUFBTCxDQUFtQixRQUFuQixFQUE2QnFELFlBQTdCLENBQTBDLFFBQTFDLENBQVQsSUFBZ0UsQ0FBekU7QUFDQSxpQkFBSSxDQUFDakUsU0FBU2dELGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDcEMsYUFBMUMsZUFBb0V1QyxNQUFwRSxRQUFMLEVBQXNGO0FBQ2xGQSwwQkFBUzJCLFNBQVNxQyxTQUFTLENBQVQsRUFBWWxELFlBQVosQ0FBeUIsUUFBekIsQ0FBVCxDQUFUO0FBQ0g7QUFDRGtELHNCQUFTaEUsU0FBUyxDQUFsQixFQUFxQnJDLFNBQXJCLENBQStCRSxHQUEvQixDQUFtQyxRQUFuQztBQUNBaUMsbUJBQU1qRCxTQUFTZ0QsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEMvQyxnQkFBMUMsZUFBdUVrRCxNQUF2RSxTQUFtRixDQUFuRixFQUFzRmMsWUFBdEYsQ0FBbUcsS0FBbkcsQ0FBTjtBQUNBRyx5QkFBWSxFQUFFMUMsTUFBTUEsSUFBUixFQUFjeUIsUUFBUUEsTUFBdEIsRUFBOEJGLEtBQUtBLEdBQW5DLEVBQVo7QUFDSCxVQVREO0FBekN1QztBQW1EMUMsRyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzZiZWZjMWQ3MWI2NmM4NTlmZTQiLCJbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0ZWtsbycpLCAoZSkgPT4ge1xuICAgIHZhciB0ID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIyMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIyMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIyMCldO1xuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoJHt0WzBdfSwke3RbMV19LCR7dFsyXX0sMC4zMClgO1xufSk7XG5sZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJylbMF07XG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpO1xuaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9Pntcblx0aWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1iYXJzJykpIHtcblx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcblx0XHRpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcblx0XHRpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cdFx0aWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10aW1lcycpO1xuXHRcdGljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuXHR9O1xufSk7XG5yZXF1aXJlKCcuL2Rpc2Fpbi5qcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvaG9tZS5qcyIsImZ1bmN0aW9uIHR1cm5Ub3Aob2JqKSB7XG4gICAgbGV0IG9rbm8yID0gb2JqLmlubmVyLnF1ZXJ5U2VsZWN0b3IoJy5va25vU2xpZGVyMicpO1xuICAgIGxldCBva25vMyA9IG9iai5pbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjMnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0ID0gb2tubzIub2Zmc2V0SGVpZ2h0O1xuICAgIG9rbm8zLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5pbWdTcmMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0xMDAlKSc7XG4gICAgICAgIG9rbm8zLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG9rbm8zLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQob2tubzQpO1xuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8zLmNsYXNzTGlzdC5yZW1vdmUoXCJva25vU2xpZGVyM1wiKTtcbiAgICAgICAgb2tubzMuY2xhc3NMaXN0LmFkZChcIm9rbm9TbGlkZXIyXCIpO1xuICAgIH0sIDIwMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYmouY29udC5zdHlsZS5oZWlnaHQ7XG4gICAgfSwgMjAxMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU15RWwoZG9tX29iaikge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZG9tX29iai5ub2RlTmFtZSk7XG4gICAgaWYgKGRvbV9vYmouY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGRvbV9vYmouY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAoZG9tX29iai5hdHRyKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZG9tX29iai5hdHRyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaSwgZG9tX29iai5hdHRyW2ldKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGRvbV9vYmoucGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICByZXR1cm4gZWw7XG59O1xuXG5mdW5jdGlvbiBlbnRlclRleHQoZGF0YSwgb2JqKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5QaG90b0Rpc2FpbicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5zcmMpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpc2FpblwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDUnKVswXS5pbm5lckhUTUwgPSBgPHNwYW4+JHtkYXRhW29iai5udW1iZXJdLm51bWJlcn08L3NwYW4+ICR7ZGF0YVtvYmoubnVtYmVyXS50aXRsZX1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpc2FpblwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IGRhdGFbb2JqLm51bWJlcl0udGV4dDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbURpc2FpblwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IGRhdGFbb2JqLm51bWJlcl0uYm90dG9tO1xufVxuXG5mdW5jdGlvbiBlbnRlclRleHRDaGVydGVqKG9iaiwgbnVtYmVyKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVydGVqU2xhaWRlclRleHRJbm5lclwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDInKVswXS5pbm5lckhUTUwgPSBgPHNwYW4+JHtvYmpbbnVtYmVyXS5udW1iZXJ9PC9zcGFuPiAke29ialtudW1iZXJdLnRpdGxlfWA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVydGVqU2xhaWRlclRleHRJbm5lclwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IG9ialtudW1iZXJdLnRleHQ7XG59XG5cbmZ1bmN0aW9uIHR1cm5MZWZ0KG9iaikge1xuICAgIGxldCBva25vMiA9IG9iai5pbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjInKTtcbiAgICBsZXQgb2tubzMgPSBvYmouaW5uZXIucXVlcnlTZWxlY3RvcignLm9rbm9TbGlkZXIzJyk7XG4gICAgbGV0IG9rbm80ID0gb2tubzMuY2xvbmVOb2RlKHRydWUpO1xuICAgIG9iai5jb250LnN0eWxlLmhlaWdodCA9IG9rbm8yLm9mZnNldEhlaWdodDtcbiAgICBva25vMy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouaW1nU3JjKTtcbiAgICBva25vMy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdudW1iZXInLCBvYmouaW1nTnVtYmVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgb2tubzMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgb2tubzMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChva25vNCk7XG4gICAgfSwgMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9rbm8yKTtcbiAgICAgICAgb2tubzMuY2xhc3NMaXN0LnJlbW92ZShcIm9rbm9TbGlkZXIzXCIpO1xuICAgICAgICBva25vMy5jbGFzc0xpc3QuYWRkKFwib2tub1NsaWRlcjJcIik7XG4gICAgfSwgNTEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH0sIDUyMCk7XG4gICAgZW50ZXJUZXh0KGRhdGEsIHsgc3JjOiBvYmouaW1nU3JjLCBudW1iZXI6IG9iai5pbWdOdW1iZXIgfSk7XG59O1xuXG5mdW5jdGlvbiB0dXJuUmlnaHQob2JqKSB7XG4gICAgbGV0IG9rbm8yID0gb2JqLmlubmVyLnF1ZXJ5U2VsZWN0b3IoJy5va25vU2xpZGVyMicpO1xuICAgIGxldCBva25vMSA9IG9iai5pbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjEnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0ID0gb2tubzIub2Zmc2V0SGVpZ2h0O1xuICAgIG9rbm8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5pbWdTcmMpO1xuICAgIG9rbm8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ251bWJlcicsIG9iai5pbWdOdW1iZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgIG9rbm8xLnN0eWxlLnJpZ2h0ID0gJzAnO1xuICAgICAgICBva25vMS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShva25vNCwgb2tubzEucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc29sZS5sb2cob2tubzEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLmdldEF0dHJpYnV0ZSgnc3JjJyksIG9rbm8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKVxuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8xLmNsYXNzTGlzdC5yZW1vdmUoXCJva25vU2xpZGVyMVwiKTtcbiAgICAgICAgb2tubzEuY2xhc3NMaXN0LmFkZChcIm9rbm9TbGlkZXIyXCIpO1xuICAgIH0sIDUxMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9iai5jb250LnN0eWxlLmhlaWdodDtcbiAgICB9LCA1MjApO1xuICAgIGVudGVyVGV4dChkYXRhLCB7IHNyYzogb2JqLmltZ1NyYywgbnVtYmVyOiBvYmouaW1nTnVtYmVyIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNhaW5Db3N0TGVmdChvYmopIHtcbiAgICBsZXQgb2tubzIgPSBvYmouY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKTtcbiAgICBsZXQgb2tubzMgPSBvYmouY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzMnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2JqLmNvbnQuc3R5bGUuaGVpZ2h0ID0gb2tubzIub2Zmc2V0SGVpZ2h0O1xuICAgIG9rbm8zLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iai5zcmMpO1xuICAgIG9rbm8zLnNldEF0dHJpYnV0ZSgnbnVtYmVyJywgb2JqLm51bWJlcik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9rbm8yLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSc7XG4gICAgICAgIG9rbm8zLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG9rbm8zLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQob2tubzQpO1xuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8zLmNsYXNzTmFtZSA9IFwib2tubyBva25vMlwiO1xuICAgIH0sIDUxMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9iai5jb250LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9LCA1MjApO1xufVxuXG5mdW5jdGlvbiBkaXNhaW5Db3N0UmlnaHQob2JqKSB7XG4gICAgbGV0IG9rbm8yID0gb2JqLmNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJyk7XG4gICAgbGV0IG9rbm8xID0gb2JqLmNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8xJyk7XG4gICAgbGV0IG9rbm80ID0gb2tubzEuY2xvbmVOb2RlKHRydWUpO1xuICAgIG9iai5jb250LnN0eWxlLmhlaWdodCA9IG9rbm8yLm9mZnNldEhlaWdodDtcbiAgICBva25vMS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouc3JjKTtcbiAgICBva25vMS5zZXRBdHRyaWJ1dGUoJ251bWJlcicsIG9iai5udW1iZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgIG9rbm8xLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG9rbm8xLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG9rbm80LCBva25vMS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8xLmNsYXNzTmFtZSA9IFwib2tubyBva25vMlwiO1xuICAgIH0sIDUxMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9iai5jb250LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9LCA1MjApO1xufVxuXG5mdW5jdGlvbiBjaGVydGVqTGVmdChvYmopIHtcbiAgICBsZXQgb2tubzIgPSBvYmouY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKTtcbiAgICBsZXQgb2tubzMgPSBvYmouY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzMnKTtcbiAgICBsZXQgb2tubzQgPSBva25vMy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb2tubzMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgb2JqLnNyYyk7XG4gICAgb2tubzMuc2V0QXR0cmlidXRlKCdudW1iZXInLCBvYmoubnVtYmVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgb2tubzMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgb2tubzMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChva25vNCk7XG4gICAgfSwgMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9rbm8yKTtcbiAgICAgICAgb2tubzMuY2xhc3NOYW1lID0gXCJva25vIG9rbm8yXCI7XG4gICAgfSwgNTEwKTtcbn1cblxuZnVuY3Rpb24gY2hlcnRlalJpZ2h0KG9iaikge1xuICAgIGxldCBva25vMiA9IG9iai5jb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMicpO1xuICAgIGxldCBva25vMSA9IG9iai5jb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMScpO1xuICAgIGxldCBva25vNCA9IG9rbm8xLmNsb25lTm9kZSh0cnVlKTtcbiAgICBva25vMS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouc3JjKTtcbiAgICBva25vMS5zZXRBdHRyaWJ1dGUoJ251bWJlcicsIG9iai5udW1iZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBva25vMi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgIG9rbm8xLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG9rbm8xLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG9rbm80LCBva25vMS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgIH0sIDEwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2tubzIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChva25vMik7XG4gICAgICAgIG9rbm8xLmNsYXNzTmFtZSA9IFwib2tubyBva25vMlwiO1xuICAgIH0sIDUxMCk7XG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpblwiKSkge1xuICAgIGxldCBkaXNhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpblwiKTtcbiAgICBsZXQgc2xpZGVzID0gZGlzYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWFsbFBob3RvRGlzYWluJyk7XG4gICAgbGV0IGRpc2FpblNsYWlkZXJDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNhaW5TbGFpZGVyQ29udFwiKTtcbiAgICBsZXQgaW5uZXIgPSBkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVySW5uZXInKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoc2xpZGVzLCAoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUoJ251bWJlcicpO1xuICAgICAgICAgICAgbGV0IGF0dHJ2YWx1ZSA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgZW50ZXJUZXh0KGRhdGEsIHsgc3JjOiBhdHRydmFsdWUsIG51bWJlcjogaW5kZXggfSlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhaW5TbGFpZGVyQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2tub1NsaWRlcjJcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXIucXVlcnlTZWxlY3RvcihcIi5va25vU2xpZGVyMlwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdudW1iZXInLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkaXNhaW5TbGFpZGVyQ29udC5zdHlsZS5oZWlnaHQgPSAnYXV0bycgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWluU2xhaWRlckNvbnQuc3R5bGUuaGVpZ2h0ID0gaW5uZXIucXVlcnlTZWxlY3RvcihcIi5va25vU2xpZGVyMlwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgZGlzYWluU2xhaWRlckNvbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IGlubmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2tub1NsaWRlcjJcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gbnVtYmVyICYmIGluZGV4IDwgbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmlnaHQoeyBpbm5lcjogaW5uZXIsIGNvbnQ6IGRpc2FpblNsYWlkZXJDb250LCBpbWdTcmM6IGF0dHJ2YWx1ZSwgaW1nTnVtYmVyOiBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gbnVtYmVyICYmIGluZGV4ID4gbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuTGVmdCh7IGlubmVyOiBpbm5lciwgY29udDogZGlzYWluU2xhaWRlckNvbnQsIGltZ1NyYzogYXR0cnZhbHVlLCBpbWdOdW1iZXI6IGluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcuY3Jvc3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzYWluU2xhaWRlckNvbnQuc3R5bGUuaGVpZ2h0ID0gaW5uZXIucXVlcnlTZWxlY3RvcihcIi5va25vU2xpZGVyMlwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNhaW5TbGFpZGVyQ29udC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIGRpc2FpblNsYWlkZXJDb250LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICB9LCAxMCk7XG4gICAgfSk7XG4gICAgZGlzYWluU2xhaWRlckNvbnQucXVlcnlTZWxlY3RvcignLmxlZnRBbmdsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIWRpc2FpblNsYWlkZXJDb250LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0QW5nbGUnKS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RSZWFkeVwiKSkge1xuICAgICAgICAgICAgZGlzYWluU2xhaWRlckNvbnQucXVlcnlTZWxlY3RvcignLmxlZnRBbmdsZScpLmNsYXNzTGlzdC5hZGQoXCJub3RSZWFkeVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc2FpblNsYWlkZXJDb250LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0QW5nbGUnKS5jbGFzc0xpc3QucmVtb3ZlKFwibm90UmVhZHlcIilcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICBsZXQgcHJldmlvcyA9IHBhcnNlSW50KGlubmVyLnF1ZXJ5U2VsZWN0b3IoJy5va25vU2xpZGVyMicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKSAtIDE7XG4gICAgICAgICAgICBpZiAoIWRpc2Fpbi5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVxcXCIke3ByZXZpb3N9XFxcIl1gKSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3MgPSBzbGlkZXNbc2xpZGVzLmxlbmd0aCAtIDFdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHNyYyA9IGRpc2Fpbi5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVxcXCIke3ByZXZpb3N9XFxcIl1gKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICAgIHR1cm5SaWdodCh7IGlubmVyOiBpbm5lciwgY29udDogZGlzYWluU2xhaWRlckNvbnQsIGltZ1NyYzogc3JjLCBpbWdOdW1iZXI6IHByZXZpb3MgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgZGlzYWluU2xhaWRlckNvbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0QW5nbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKCFkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcubGVmdEFuZ2xlJykuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90UmVhZHlcIikpIHtcbiAgICAgICAgICAgIGRpc2FpblNsYWlkZXJDb250LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0QW5nbGUnKS5jbGFzc0xpc3QuYWRkKFwibm90UmVhZHlcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNhaW5TbGFpZGVyQ29udC5xdWVyeVNlbGVjdG9yKCcubGVmdEFuZ2xlJykuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFJlYWR5XCIpXG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgbGV0IHByZXZpb3MgPSBwYXJzZUludChpbm5lci5xdWVyeVNlbGVjdG9yKCcub2tub1NsaWRlcjInKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uZ2V0QXR0cmlidXRlKCdudW1iZXInKSkgKyAxO1xuICAgICAgICAgICAgaWYgKCFkaXNhaW4ucXVlcnlTZWxlY3RvcihgW251bWJlcj1cXFwiJHtwcmV2aW9zfVxcXCJdYCkpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW9zID0gcGFyc2VJbnQoc2xpZGVzWzBdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBzcmMgPSBkaXNhaW4ucXVlcnlTZWxlY3RvcihgW251bWJlcj1cXFwiJHtwcmV2aW9zfVxcXCJdYCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICB0dXJuTGVmdCh7IGlubmVyOiBpbm5lciwgY29udDogZGlzYWluU2xhaWRlckNvbnQsIGltZ1NyYzogc3JjLCBpbWdOdW1iZXI6IHByZXZpb3MgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tc2xpZGVyVG9wLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgbGV0IHRvcENvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclRvcENvbnRcIik7XG4gICAgbGV0IHRvcElubmVyID0gdG9wQ29udC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyVG9wSW5uZXInKTtcbiAgICBsZXQgdG9wSW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJJbWFnZXNGb3JzVG9wXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbiAgICBsZXQgc3JjID0gdG9wSW1hZ2VzWzBdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgdG9wSW5uZXIucXVlcnlTZWxlY3RvcignLm9rbm9TbGlkZXIyJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBsZXQgbnVtYmVyID0gMDtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIG51bWJlcisrO1xuICAgICAgICBpZiAoIXRvcEltYWdlc1tudW1iZXJdKSB7XG4gICAgICAgICAgICBudW1iZXIgPSAwO1xuICAgICAgICB9O1xuICAgICAgICBzcmMgPSB0b3BJbWFnZXNbbnVtYmVyXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB0dXJuVG9wKHsgaW5uZXI6IHRvcElubmVyLCBjb250OiB0b3BDb250LCBpbWdTcmM6IHNyYyB9KTtcbiAgICB9LCAxMDAwMCk7XG59O1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVmb3JlQWZ0ZXJcIikpIHtcbiAgICBsZXQgYmVmb3JlQWZ0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlZm9yZUFmdGVyXCIpO1xuICAgIGxldCBzbGFpZGVzID0gYmVmb3JlQWZ0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmJlZm9yZVNsYWlkcycpO1xuICAgIGxldCBzbGlkZXJDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZWZvcmVTbGFpZGVyQ29udFwiKTtcbiAgICBsZXQgb2tub1NsaWRlcjEgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBzbGlkZXJDb250LCBjbGFzc05hbWU6ICdwb3pDZW50ZXIgb2tub1NsaWRlcicsIG5vZGVOYW1lOiAnZGl2JyB9KTtcbiAgICBsZXQgb2tub1NsaWRlcjIgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBzbGlkZXJDb250LCBjbGFzc05hbWU6ICdwb3pSaWdodCBva25vU2xpZGVyJywgbm9kZU5hbWU6ICdkaXYnIH0pO1xuICAgIGxldCBva25vU2xpZGVyMyA9IGNyZWF0ZU15RWwoeyBwYXJlbnQ6IHNsaWRlckNvbnQsIGNsYXNzTmFtZTogJ3BvelJpZ2h0IG9rbm9TbGlkZXInLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgbGV0IG9rbm9TbGlkZXI0ID0gY3JlYXRlTXlFbCh7IHBhcmVudDogc2xpZGVyQ29udCwgY2xhc3NOYW1lOiAncG96UmlnaHQgb2tub1NsaWRlcicsIG5vZGVOYW1lOiAnZGl2JyB9KTtcbiAgICBjcmVhdGVNeUVsKHsgcGFyZW50OiBva25vU2xpZGVyMSwgY2xhc3NOYW1lOiAnc2xpZGVySW5uZXInLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgY3JlYXRlTXlFbCh7IHBhcmVudDogb2tub1NsaWRlcjIsIGNsYXNzTmFtZTogJ3NsaWRlcklubmVyJywgbm9kZU5hbWU6ICdkaXYnIH0pO1xuICAgIGNyZWF0ZU15RWwoeyBwYXJlbnQ6IG9rbm9TbGlkZXIzLCBjbGFzc05hbWU6ICdzbGlkZXJJbm5lcicsIG5vZGVOYW1lOiAnZGl2JyB9KTtcbiAgICBjcmVhdGVNeUVsKHsgcGFyZW50OiBva25vU2xpZGVyNCwgY2xhc3NOYW1lOiAnc2xpZGVySW5uZXInLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gICAgbGV0IG1hc0lubmVycyA9IHNsaWRlckNvbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcklubmVyJyk7XG4gICAgW10uZm9yRWFjaC5jYWxsKG1hc0lubmVycywgKGVsLCBpbmQpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvcmlzb24gPSBzbGFpZGVzW2luZF0ucXVlcnlTZWxlY3RvcignLmNvbXBvcmlzb24nKTtcbiAgICAgICAgbGV0IHNsb3lCYWNrID0gY3JlYXRlTXlFbCh7IHBhcmVudDogZWwsIGNsYXNzTmFtZTogJ3Nsb3lCYWNrJywgbm9kZU5hbWU6ICdkaXYnIH0pO1xuICAgICAgICBsZXQgc2xveUZvcnZhcmQgPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBlbCwgY2xhc3NOYW1lOiAnc2xveUZvcnZhcmQnLCBub2RlTmFtZTogJ2RpdicgfSk7XG4gLy8gICAgICAgbGV0IGJ1dHRvbiA9IGNyZWF0ZU15RWwoe3BhcmVudDogc2xveUZvcnZhcmQsIGNsYXNzTmFtZTogJ3Nsb3lQb2x6Jywgbm9kZU5hbWU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBzcmNCYWNrID0gY29tcG9yaXNvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3JjO1xuICAgICAgICBsZXQgc3JjRm9ydmFyZCA9IGNvbXBvcmlzb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzFdLnNyYztcbiAgICAgICAgc2xveUJhY2suc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgc3JjQmFjayArICcpJztcbiAgICAgICAgc2xveUZvcnZhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgc3JjRm9ydmFyZCArICcpJztcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdpbmRleCcsIGluZCk7XG4gICAgICAgIGxldCBpbWcgPSBjb21wb3Jpc29uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5jbG9uZU5vZGUoJ2ZhbHNlJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldikgPT4ge1xuICAgICAgICAgICAgbGV0IG1vdmVQcm9jID0gKCgoZWwub2Zmc2V0V2lkdGggLSBldi5jbGllbnRYICsgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCkgLyBzbGlkZXJDb250Lm9mZnNldFdpZHRoKSAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHNsb3lGb3J2YXJkLnN0eWxlLndpZHRoID0gbW92ZVByb2MgKyAnJSc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxldCBva25hID0gc2xpZGVyQ29udC5xdWVyeVNlbGVjdG9yQWxsKCcub2tub1NsaWRlcicpO1xuICAgIFtdLmZvckVhY2guY2FsbChzbGFpZGVzLCBlbCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNsYWlkZXMsIGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBlbC5nZXRBdHRyaWJ1dGUoJ251bWJlcicpO1xuICAgICAgICAgICAgbGV0IHNyY0JhY2sgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY29tcG9yaXNvbicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zcmM7XG4gICAgICAgICAgICBsZXQgc3JjRm9ydmFyZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Jpc29uJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzFdLnNyYztcbiAgICAgICAgICAgIGlmIChudW1iZXIgIT09IHBhcnNlSW50KHNsaWRlckNvbnQucXVlcnlTZWxlY3RvcignLnBvekNlbnRlcicpLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJJbm5lcicpLmdldEF0dHJpYnV0ZSgnaW5kZXgnKSkpIHtcbiAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwob2tuYSwgKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyID4gcGFyc2VJbnQoZWwucXVlcnlTZWxlY3RvcignLnNsaWRlcklubmVyJykuZ2V0QXR0cmlidXRlKCdpbmRleCcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygncG96Q2VudGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pMZWZ0IG9rbm9TbGlkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pMZWZ0IG9rbm9TbGlkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IHBhcnNlSW50KGVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJJbm5lcicpLmdldEF0dHJpYnV0ZSgnaW5kZXgnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvekNlbnRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMTAwJSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pSaWdodCBva25vU2xpZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAncG96UmlnaHQgb2tub1NsaWRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0RGVhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwb3pDZW50ZXIgb2tub1NsaWRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlcnRlaicpKSB7XG4gICAgbGV0IHN3aXRjaGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXInKTtcbiAgICBsZXQgc2xpZGVJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoZXJzJykucXVlcnlTZWxlY3RvckFsbCgnW3NyY10nKTtcbiAgICBsZXQgY29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlcnRlalNsYWlkZXJJbm5lckNvbnRcIik7XG4gICAgbGV0IHNsaWRlT2tubyA9IGNyZWF0ZU15RWwoeyBwYXJlbnQ6IGNvbnQsIG5vZGVOYW1lOiAnZGl2JywgY2xhc3NOYW1lOiAnb2tubyBva25vMScgfSk7XG4gICAgY3JlYXRlTXlFbCh7IHBhcmVudDogc2xpZGVPa25vLCBub2RlTmFtZTogJ2ltZycsIGF0dHI6IHsgc3JjOiAnJywgYWx0OiAxIH0gfSk7XG4gICAgc2xpZGVPa25vID0gc2xpZGVPa25vLmNsb25lTm9kZSgndHJ1ZScpO1xuICAgIHNsaWRlT2tuby5jbGFzc05hbWUgPSAnb2tubyBva25vMic7XG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkZU9rbm8pO1xuICAgIHNsaWRlT2tubyA9IHNsaWRlT2tuby5jbG9uZU5vZGUoJ3RydWUnKTtcbiAgICBzbGlkZU9rbm8uY2xhc3NOYW1lID0gJ29rbm8gb2tubzMnO1xuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZGVPa25vKTtcbiAgICBsZXQgbnVtYmVyID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKTtcbiAgICBsZXQgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuc2V0QXR0cmlidXRlKCdudW1iZXInLCBudW1iZXIpO1xuICAgIGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBlbnRlclRleHRDaGVydGVqKGRpc2FpblByb2osIG51bWJlcik7XG4gICAgW10uZm9yRWFjaC5jYWxsKHN3aXRjaGVycywgZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hlcnMnKS5xdWVyeVNlbGVjdG9yKGAuYWN0aXZlYCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG51bWJlciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICAgICAgbGV0IG51bWJlck9rbm8gPSBwYXJzZUludChjb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMicpLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICAgICAgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKG51bWJlciA+IG51bWJlck9rbm8pIHtcbiAgICAgICAgICAgICAgICBjaGVydGVqTGVmdCh7IGNvbnQ6IGNvbnQsIG51bWJlcjogbnVtYmVyLCBzcmM6IHNyYyB9KTtcbiAgICAgICAgICAgICAgICBlbnRlclRleHRDaGVydGVqKGRpc2FpblByb2osIG51bWJlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IG51bWJlck9rbm8pIHtcbiAgICAgICAgICAgICAgICBjaGVydGVqUmlnaHQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgICAgICAgICAgZW50ZXJUZXh0Q2hlcnRlaihkaXNhaW5Qcm9qLCBudW1iZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVydGVqU2xhaWRlckNvbnRcIikucXVlcnlTZWxlY3RvcignLmFuZ2xlTGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hlcnNbbnVtYmVyIC0gMV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQoY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKSAtIDE7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3IoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKSkge1xuICAgICAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQoc3dpdGNoZXJzW3N3aXRjaGVycy5sZW5ndGggLSAxXS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2hlcnNbbnVtYmVyIC0gMV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBjaGVydGVqUmlnaHQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgIGVudGVyVGV4dENoZXJ0ZWooZGlzYWluUHJvaiwgbnVtYmVyKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZXJ0ZWpTbGFpZGVyQ29udFwiKS5xdWVyeVNlbGVjdG9yKCcuYW5nbGVSaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hlcnNbbnVtYmVyIC0gMV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQoY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKSArIDE7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaGVycycpLnF1ZXJ5U2VsZWN0b3IoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKSkge1xuICAgICAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQoc3dpdGNoZXJzWzBdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaGVyc1tudW1iZXIgLSAxXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBzcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoZXJzJykucXVlcnlTZWxlY3RvckFsbChgW251bWJlcj1cIiR7bnVtYmVyfVwiXWApWzFdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGNoZXJ0ZWpMZWZ0KHsgY29udDogY29udCwgbnVtYmVyOiBudW1iZXIsIHNyYzogc3JjIH0pO1xuICAgICAgICBlbnRlclRleHRDaGVydGVqKGRpc2FpblByb2osIG51bWJlcik7XG4gICAgfSk7XG59XG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNhaW5Db3N0XCIpKSB7XG4gICAgbGV0IHNsaWRlSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2FpbkNvc3RMaW5lJykucXVlcnlTZWxlY3RvckFsbCgnW3NyY10nKTtcbiAgICBsZXQgc3dpdGNlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpbkNvc3RMaW5lXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXNhaW5Db3N0U2xpZGVyTWluJyk7XG4gICAgbGV0IGNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpbkNvc3RTbGlkZXJDb250XCIpO1xuICAgIGxldCBzbGlkZU9rbm8gPSBjcmVhdGVNeUVsKHsgcGFyZW50OiBjb250LCBub2RlTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ29rbm8gb2tubzEnIH0pO1xuICAgIGxldCBpbm5lciA9IGNyZWF0ZU15RWwoeyBwYXJlbnQ6IHNsaWRlT2tubywgbm9kZU5hbWU6ICdkaXYnLCBjbGFzc05hbWU6ICdkaXNhaW5Db3N0U2xpZGVyJyB9KTtcbiAgICBjcmVhdGVNeUVsKHsgcGFyZW50OiBpbm5lciwgbm9kZU5hbWU6ICdpbWcnLCBhdHRyOiB7IHNyYzogJycsIGFsdDogMSB9IH0pO1xuICAgIHNsaWRlT2tubyA9IHNsaWRlT2tuby5jbG9uZU5vZGUoJ3RydWUnKTtcbiAgICBzbGlkZU9rbm8uY2xhc3NOYW1lID0gJ29rbm8gb2tubzInO1xuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZGVPa25vKTtcbiAgICBzbGlkZU9rbm8gPSBzbGlkZU9rbm8uY2xvbmVOb2RlKCd0cnVlJyk7XG4gICAgc2xpZGVPa25vLmNsYXNzTmFtZSA9ICdva25vIG9rbm8zJztcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWRlT2tubyk7XG4gICAgbGV0IG51bWJlciA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNhaW5Db3N0TGluZScpLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ251bWJlcicpKTtcbiAgICBsZXQgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2FpbkNvc3RMaW5lJykucXVlcnlTZWxlY3RvckFsbChgW251bWJlcj1cIiR7bnVtYmVyfVwiXWApWzFdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKS5zZXRBdHRyaWJ1dGUoJ251bWJlcicsIG51bWJlcik7XG4gICAgY29udC5xdWVyeVNlbGVjdG9yKCcub2tubzInKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIFtdLmZvckVhY2guY2FsbChzd2l0Y2VycywgZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNhaW5Db3N0TGluZScpLnF1ZXJ5U2VsZWN0b3IoYC5hY3RpdmVgKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKCdudW1iZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtYmVyT2tubyA9IHBhcnNlSW50KGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0QXR0cmlidXRlKCdudW1iZXInKSk7XG4gICAgICAgICAgICBzcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzYWluQ29zdExpbmUnKS5xdWVyeVNlbGVjdG9yQWxsKGBbbnVtYmVyPVwiJHtudW1iZXJ9XCJdYClbMV0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICAgIGlmIChudW1iZXIgPiBudW1iZXJPa25vKSB7XG4gICAgICAgICAgICAgICAgY2hlcnRlakxlZnQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IG51bWJlck9rbm8pIHtcbiAgICAgICAgICAgICAgICBjaGVydGVqUmlnaHQoeyBjb250OiBjb250LCBudW1iZXI6IG51bWJlciwgc3JjOiBzcmMgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpbkNvc3RTbGlkZXJSYW1rYVwiKS5xdWVyeVNlbGVjdG9yKCcuYW5nbGVMZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN3aXRjZXJzW251bWJlciAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIG51bWJlciA9IHBhcnNlSW50KGNvbnQucXVlcnlTZWxlY3RvcignLm9rbm8yJykuZ2V0QXR0cmlidXRlKCdudW1iZXInKSkgLSAxO1xuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNhaW5Db3N0TGluZScpLnF1ZXJ5U2VsZWN0b3IoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKSkge1xuICAgICAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQoc3dpdGNlcnNbc3dpdGNlcnMubGVuZ3RoIC0gMV0uZ2V0QXR0cmlidXRlKCdudW1iZXInKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNlcnNbbnVtYmVyIC0gMV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2FpbkNvc3RMaW5lJykucXVlcnlTZWxlY3RvckFsbChgW251bWJlcj1cIiR7bnVtYmVyfVwiXWApWzFdLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGNoZXJ0ZWpSaWdodCh7IGNvbnQ6IGNvbnQsIG51bWJlcjogbnVtYmVyLCBzcmM6IHNyYyB9KTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FpbkNvc3RTbGlkZXJSYW1rYVwiKS5xdWVyeVNlbGVjdG9yKCcuYW5nbGVSaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2Vyc1tudW1iZXIgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBudW1iZXIgPSBwYXJzZUludChjb250LnF1ZXJ5U2VsZWN0b3IoJy5va25vMicpLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpICsgMTtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzYWluQ29zdExpbmUnKS5xdWVyeVNlbGVjdG9yKGBbbnVtYmVyPVwiJHtudW1iZXJ9XCJdYCkpIHtcbiAgICAgICAgICAgIG51bWJlciA9IHBhcnNlSW50KHN3aXRjZXJzWzBdLmdldEF0dHJpYnV0ZSgnbnVtYmVyJykpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjZXJzW251bWJlciAtIDFdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHNyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNhaW5Db3N0TGluZScpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtudW1iZXI9XCIke251bWJlcn1cIl1gKVsxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBjaGVydGVqTGVmdCh7IGNvbnQ6IGNvbnQsIG51bWJlcjogbnVtYmVyLCBzcmM6IHNyYyB9KTtcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2Rpc2Fpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=