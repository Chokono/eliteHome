function turnTop(obj) {
    let okno2 = obj.inner.querySelector('.oknoSlider2');
    let okno3 = obj.inner.querySelector('.oknoSlider3');
    let okno4 = okno3.cloneNode(true);
    obj.cont.style.height = okno2.offsetHeight;
    okno3.getElementsByTagName('img')[0].setAttribute('src', obj.imgSrc);
    setTimeout(() => {
        okno2.style.transform = 'translate(-100%)';
        okno3.style.left = '0';
        okno3.parentNode.appendChild(okno4);
    }, 10);
    setTimeout(() => {
        okno2.parentNode.removeChild(okno2);
        okno3.classList.remove("oknoSlider3");
        okno3.classList.add("oknoSlider2");
    }, 2010);
    setTimeout(() => {
        obj.cont.style.height;
    }, 2011);
}

function createMyEl(dom_obj) {
    let el = document.createElement(dom_obj.nodeName);
    if (dom_obj.className) {
        el.className = dom_obj.className;
    }
    if (dom_obj.attr) {
        for (let i in dom_obj.attr) {
            el.setAttribute(i, dom_obj.attr[i]);
        };
    };
    dom_obj.parent.appendChild(el);
    return el;
};

function enterText(data, obj) {
    document.getElementById('mainPhotoDisain').getElementsByTagName('img')[0].setAttribute('src', obj.src);
    document.getElementById("textDisain").getElementsByTagName('h5')[0].innerHTML = `<span>${data[obj.number].number}</span> ${data[obj.number].title}`;
    document.getElementById("textDisain").getElementsByTagName('p')[0].innerHTML = data[obj.number].text;
    document.getElementById("bottomDisain").getElementsByTagName('p')[0].innerHTML = data[obj.number].bottom;
}

function enterTextChertej(obj, number) {
    document.getElementById("chertejSlaiderTextInner").getElementsByTagName('h2')[0].innerHTML = `<span>${obj[number].number}</span> ${obj[number].title}`;
    document.getElementById("chertejSlaiderTextInner").getElementsByTagName('p')[0].innerHTML = obj[number].text;
}

function turnLeft(obj) {
    let okno2 = obj.inner.querySelector('.oknoSlider2');
    let okno3 = obj.inner.querySelector('.oknoSlider3');
    let okno4 = okno3.cloneNode(true);
    obj.cont.style.height = okno2.offsetHeight;
    okno3.getElementsByTagName('img')[0].setAttribute('src', obj.imgSrc);
    okno3.getElementsByTagName('img')[0].setAttribute('number', obj.imgNumber);
    setTimeout(() => {
        okno2.style.transform = 'translateX(-100%)';
        okno3.style.left = '0';
        okno3.parentNode.appendChild(okno4);
    }, 10);
    setTimeout(() => {
        okno2.parentNode.removeChild(okno2);
        okno3.classList.remove("oknoSlider3");
        okno3.classList.add("oknoSlider2");
    }, 510);
    setTimeout(() => {
        obj.cont.style.height;
    }, 520);
    enterText(data, { src: obj.imgSrc, number: obj.imgNumber });
    console.log(1);
};

function turnRight(obj) {
    let okno2 = obj.inner.querySelector('.oknoSlider2');
    let okno1 = obj.inner.querySelector('.oknoSlider1');
    let okno4 = okno1.cloneNode(true);
    obj.cont.style.height = okno2.offsetHeight;
    okno1.getElementsByTagName('img')[0].setAttribute('src', obj.imgSrc);
    okno1.getElementsByTagName('img')[0].setAttribute('number', obj.imgNumber);
    setTimeout(() => {
        okno2.style.transform = 'translateX(100%)';
        okno1.style.right = '0';
        okno1.parentNode.insertBefore(okno4, okno1.parentNode.firstChild);
        console.log(okno1.getElementsByTagName('img')[0].getAttribute('src'), okno1.getElementsByTagName('img')[0].getAttribute('number'))
    }, 10);
    setTimeout(() => {
        okno2.parentNode.removeChild(okno2);
        okno1.classList.remove("oknoSlider1");
        okno1.classList.add("oknoSlider2");
    }, 510);
    setTimeout(() => {
        obj.cont.style.height;
    }, 520);
    enterText(data, { src: obj.imgSrc, number: obj.imgNumber });
}

function chertejLeft(obj) {
    let okno2 = obj.cont.querySelector('.okno2');
    let okno3 = obj.cont.querySelector('.okno3');
    let okno4 = okno3.cloneNode(true);
    okno3.getElementsByTagName('img')[0].setAttribute('src', obj.src);
    okno3.setAttribute('number', obj.number);
    setTimeout(() => {
        okno2.style.transform = 'translateX(-100%)';
        okno3.style.left = '0';
        okno3.parentNode.appendChild(okno4);
    }, 10);
    setTimeout(() => {
        okno2.parentNode.removeChild(okno2);
        okno3.className = "okno okno2";
    }, 510);
}

function chertejRight(obj) {
    let okno2 = obj.cont.querySelector('.okno2');
    let okno1 = obj.cont.querySelector('.okno1');
    let okno4 = okno1.cloneNode(true);
    okno1.getElementsByTagName('img')[0].setAttribute('src', obj.src);
    okno1.setAttribute('number', obj.number);
    setTimeout(() => {
        okno2.style.transform = 'translateX(100%)';
        okno1.style.left = '0';
        okno1.parentNode.insertBefore(okno4, okno1.parentNode.firstChild);
    }, 10);
    setTimeout(() => {
        okno2.parentNode.removeChild(okno2);
        okno1.className = "okno okno2";
    }, 510);
}

if (document.getElementById("disain")) {
    let disain = document.getElementById("disain");
    let slides = disain.querySelectorAll('.smallPhotoDisain');
    let disainSlaiderCont = document.getElementById("disainSlaiderCont");
    let inner = disainSlaiderCont.querySelector('.sliderInner');
    [].forEach.call(slides, (el) => {
        el.addEventListener('click', ev => {
            let index = el.getAttribute('number');
            let attrvalue = el.getElementsByTagName('img')[0].getAttribute('src');
            enterText(data, { src: attrvalue, number: index })
            if (document.body.offsetWidth > 550) {
                if (!disainSlaiderCont.classList.contains("open")) {
                    inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].setAttribute('src', attrvalue);
                    inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].setAttribute('number', index);
                    setTimeout(() => { disainSlaiderCont.style.height = 'auto' }, 300);
                    disainSlaiderCont.style.height = inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].offsetHeight + 'px';
                    disainSlaiderCont.classList.add("open");
                } else {
                    let number = inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].getAttribute('number');
                    if (index !== number && index < number) {
                        turnRight({ inner: inner, cont: disainSlaiderCont, imgSrc: attrvalue, imgNumber: index });
                    } else if (index !== number && index > number) {
                        turnLeft({ inner: inner, cont: disainSlaiderCont, imgSrc: attrvalue, imgNumber: index });
                    };
                };
            };
        });
    });
    disainSlaiderCont.querySelector('.cross').addEventListener('click', () => {
        disainSlaiderCont.style.height = inner.querySelector(".oknoSlider2").getElementsByTagName('img')[0].offsetHeight + 'px';
        setTimeout(() => {
            disainSlaiderCont.style.height = '0px';
            disainSlaiderCont.classList.remove("open");
        }, 10);
    });
    disainSlaiderCont.querySelector('.leftAngle').addEventListener('click', () => {
        if (!disainSlaiderCont.querySelector('.leftAngle').classList.contains("notReady")) {
            disainSlaiderCont.querySelector('.leftAngle').classList.add("notReady");
            setTimeout(() => {
                disainSlaiderCont.querySelector('.leftAngle').classList.remove("notReady")
            }, 600);
            let previos = parseInt(inner.querySelector('.oknoSlider2').getElementsByTagName('img')[0].getAttribute('number')) - 1;
            if (!disain.querySelector(`[number=\"${previos}\"]`)) {
                previos = slides[slides.length - 1].getAttribute('number');
            };
            let src = disain.querySelector(`[number=\"${previos}\"]`).getElementsByTagName('img')[0].getAttribute('src');
            turnRight({ inner: inner, cont: disainSlaiderCont, imgSrc: src, imgNumber: previos });
        };
    });
    disainSlaiderCont.querySelector('.rightAngle').addEventListener('click', () => {
        if (!disainSlaiderCont.querySelector('.leftAngle').classList.contains("notReady")) {
            disainSlaiderCont.querySelector('.leftAngle').classList.add("notReady");
            setTimeout(() => {
                disainSlaiderCont.querySelector('.leftAngle').classList.remove("notReady")
            }, 600);
            let previos = parseInt(inner.querySelector('.oknoSlider2').getElementsByTagName('img')[0].getAttribute('number')) + 1;
            if (!disain.querySelector(`[number=\"${previos}\"]`)) {
                previos = parseInt(slides[0].getAttribute('number'));
            };
            let src = disain.querySelector(`[number=\"${previos}\"]`).getElementsByTagName('img')[0].getAttribute('src');
            turnLeft({ inner: inner, cont: disainSlaiderCont, imgSrc: src, imgNumber: previos });
        };
    });
    /*-------------------sliderTop----------------*/
    let topCont = document.getElementById("sliderTopCont");
    let topInner = topCont.querySelector('.sliderTopInner');
    let topImages = document.getElementById("ImagesForsTop").getElementsByTagName('img');
    let src = topImages[0].getAttribute('src');
    topInner.querySelector('.oknoSlider2').getElementsByTagName('img')[0].setAttribute('src', src);
    let number = 0;
    setInterval(() => {
        number++;
        if (!topImages[number]) {
            number = 0;
        };
        src = topImages[number].getAttribute('src');
        turnTop({ inner: topInner, cont: topCont, imgSrc: src });
    }, 10000);
};
if (document.getElementById("beforeAfter")) {
    let beforeAfter = document.getElementById("beforeAfter");
    let slaides = beforeAfter.querySelectorAll('.beforeSlaids');
    let sliderCont = document.getElementById("beforeSlaiderCont");
    let oknoSlider1 = createMyEl({ parent: sliderCont, className: 'pozCenter oknoSlider', nodeName: 'div' });
    let oknoSlider2 = createMyEl({ parent: sliderCont, className: 'pozRight oknoSlider', nodeName: 'div' });
    let oknoSlider3 = createMyEl({ parent: sliderCont, className: 'pozRight oknoSlider', nodeName: 'div' });
    let oknoSlider4 = createMyEl({ parent: sliderCont, className: 'pozRight oknoSlider', nodeName: 'div' });
    createMyEl({ parent: oknoSlider1, className: 'sliderInner', nodeName: 'div' });
    createMyEl({ parent: oknoSlider2, className: 'sliderInner', nodeName: 'div' });
    createMyEl({ parent: oknoSlider3, className: 'sliderInner', nodeName: 'div' });
    createMyEl({ parent: oknoSlider4, className: 'sliderInner', nodeName: 'div' });
    let masInners = sliderCont.querySelectorAll('.sliderInner');
    [].forEach.call(masInners, (el, ind) => {
        let comporison = slaides[ind].querySelector('.comporison');
        let sloyBack = createMyEl({ parent: el, className: 'sloyBack', nodeName: 'div' });
        let sloyForvard = createMyEl({ parent: el, className: 'sloyForvard', nodeName: 'div' });
        let srcBack = comporison.getElementsByTagName('img')[0].src;
        let srcForvard = comporison.getElementsByTagName('img')[1].src;
        sloyBack.style.backgroundImage = 'url(' + srcBack + ')';
        sloyForvard.style.backgroundImage = 'url(' + srcForvard + ')';
        el.setAttribute('index', ind);
        let img = comporison.getElementsByTagName('img')[0].cloneNode('false');
        el.appendChild(img);
        el.addEventListener('mousemove', (ev) => {
            let moveProc = (((el.offsetWidth - ev.clientX + el.getBoundingClientRect().x) / sliderCont.offsetWidth) * 100).toFixed(2);
            sloyForvard.style.width = moveProc + '%';
        });
    });
    let okna = sliderCont.querySelectorAll('.oknoSlider');
    [].forEach.call(slaides, el => {
        el.addEventListener('click', ev => {
            [].forEach.call(slaides, elem => {
                if (elem.classList.contains("active")) {
                    elem.classList.remove('active');
                }
            });
            el.classList.add("active");
            let number = el.getAttribute('number');
            let srcBack = el.querySelector('.comporison').getElementsByTagName('img')[0].src;
            let srcForvard = el.querySelector('.comporison').getElementsByTagName('img')[1].src;
            if (number !== parseInt(sliderCont.querySelector('.pozCenter').querySelector('.sliderInner').getAttribute('index'))) {
                [].forEach.call(okna, (el, index) => {
                    if (number > parseInt(el.querySelector('.sliderInner').getAttribute('index'))) {
                        if (el.classList.contains('pozCenter')) {
                            el.style.transform = 'translateX(-100%)';
                            setTimeout(() => {
                                el.style.transform = 'none';
                                el.className = 'pozLeft oknoSlider';
                            }, 500);
                        } else {
                            el.className = 'pozLeft oknoSlider';
                        }
                    } else if (number < parseInt(el.querySelector('.sliderInner').getAttribute('index'))) {
                        if (el.classList.contains('pozCenter')) {
                            el.style.transform = 'translateX(100%)';
                            setTimeout(() => {
                                el.style.transform = 'none';
                                el.className = 'pozRight oknoSlider';
                            }, 500);
                        } else {
                            el.className = 'pozRight oknoSlider';
                        }
                    } else {
                        el.classList.add('leftDeactive');
                        setTimeout(() => {
                            el.className = 'pozCenter oknoSlider';
                        }, 500);
                    }
                })
            };
        });
    });
};
if (document.getElementById('chertej')) {
    let switchers = document.getElementById('switchers').querySelectorAll('.switcher');
    let slideImg = document.getElementById('switchers').querySelectorAll('[src]');
    let cont = document.getElementById("chertejSlaiderInnerCont");
    let slideOkno = createMyEl({ parent: cont, nodeName: 'div', className: 'okno okno1' });
    createMyEl({ parent: slideOkno, nodeName: 'img', attr: { src: '', alt: 1 } });
    slideOkno = slideOkno.cloneNode('true');
    slideOkno.className = 'okno okno2';
    cont.appendChild(slideOkno);
    slideOkno = slideOkno.cloneNode('true');
    slideOkno.className = 'okno okno3';
    cont.appendChild(slideOkno);
    let number = parseInt(document.getElementById('switchers').querySelector('.active').getAttribute('number'));
    let src = document.getElementById('switchers').querySelectorAll(`[number="${number}"]`)[1].getAttribute('src');
    cont.querySelector('.okno2').setAttribute('number', number);
    cont.querySelector('.okno2').getElementsByTagName('img')[0].setAttribute('src', src);
    enterTextChertej(disainProj, number);
    [].forEach.call(switchers, el => {
        el.addEventListener('click', ev => {
            document.getElementById('switchers').querySelector(`.active`).classList.remove('active');
            el.classList.add('active');
            number = parseInt(el.getAttribute('number'));
            let numberOkno = parseInt(cont.querySelector('.okno2').getAttribute('number'));
            src = document.getElementById('switchers').querySelectorAll(`[number="${number}"]`)[1].getAttribute('src');
            if (number > numberOkno) {
                chertejLeft({ cont: cont, number: number, src: src });
                enterTextChertej(disainProj, number);
            } else if (number < numberOkno) {
                chertejRight({ cont: cont, number: number, src: src });
                enterTextChertej(disainProj, number);
            };
        });
    });
    document.getElementById("chertejSlaiderCont").querySelector('.angleLeft').addEventListener('click', () => {
        switchers[number-1].classList.remove("active");
        number = parseInt(cont.querySelector('.okno2').getAttribute('number')) - 1;
        if (!document.getElementById('switchers').querySelector(`[number="${number}"]`)) {
            number = parseInt(switchers[switchers.length-1].getAttribute('number'));
        }
        switchers[number-1].classList.add("active");
        src = document.getElementById('switchers').querySelectorAll(`[number="${number}"]`)[1].getAttribute('src');
        chertejRight({ cont: cont, number: number, src: src });
        enterTextChertej(disainProj, number);
    });
    document.getElementById("chertejSlaiderCont").querySelector('.angleRight').addEventListener('click', () => {
        switchers[number-1].classList.remove("active");
        number = parseInt(cont.querySelector('.okno2').getAttribute('number')) + 1;
        if (!document.getElementById('switchers').querySelector(`[number="${number}"]`)) {
            number = parseInt(switchers[0].getAttribute('number'));
        }
        switchers[number-1].classList.add("active");
        src = document.getElementById('switchers').querySelectorAll(`[number="${number}"]`)[1].getAttribute('src');
        chertejLeft({ cont: cont, number: number, src: src });
        enterTextChertej(disainProj, number);
    });
}
if(document.getElementById("disainCost")) {
    let cont = document.getElementById("disainCostSliderCont");
    let slideOkno = createMyEl({ parent: cont, nodeName: 'div', className: 'okno okno1' });
    let inner = createMyEl({ parent: slideOkno, nodeName: 'div', className: 'disainCostSlider' });
    createMyEl({ parent: slideOkno, nodeName: 'img', attr: { src: '', alt: 1 } });
    slideOkno = slideOkno.cloneNode('true');
    slideOkno.className = 'okno okno2';
    cont.appendChild(slideOkno);
    slideOkno = slideOkno.cloneNode('true');
    slideOkno.className = 'okno okno3';
    cont.appendChild(slideOkno);
    let number = parseInt(document.getElementById('switchers').querySelector('.active').getAttribute('number'));
    let src = document.getElementById('switchers').querySelectorAll(`[number="${number}"]`)[1].getAttribute('src');
    cont.querySelector('.okno2').setAttribute('number', number);
    cont.querySelector('.okno2').getElementsByTagName('img')[0].setAttribute('src', src);
    enterTextChertej(disainProj, number);
};
