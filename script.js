class SCROLL {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.top = obj.top;
        this.el.style.position = 'fixed';
        this.unit = obj.unit;
        this.el.style.top = this.scroll();

        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }
    scroll() {
        this.window = this.scrollNumber();

        if (this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + 'px';
        } else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight;
        }
    }
    calc(height, top) {
        return height / 100 * top
    }
}

const myScroll = new SCROLL({
    el: '.header__nav',
    top: 100
})



const text = [
    'HEADER TITLE'
];

let line = 0;
let count = 0;
let result = '';
function typeLine() {
    let interval = setTimeout(
        () => {
            result += text[line][count]
            document.querySelector('.header__title').innerHTML = result + '|';

            count++;
            if (count >= text[line].length) {
                count = 0;
                line++;
                if (line == text.length) {
                    clearTimeout(interval);
                    document.querySelector('.header__title').innerHTML = result;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(270 * 2.7)))
}
typeLine();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class MOUSE {
    constructor(object) {
        this.mo = document.querySelector(object.mo);
        this.mo.addEventListener('mouseover', () => { this.mo.style.margin = `${this.motion()}px ${this.motion()}px 0 0` })
        this.mo.addEventListener('resize', () => { this.mo.style.margin = `${this.motion()}px ${this.motion()}px 0 0` })
    }
    motion() {
        return Math.floor(Math.random() * 500)
    }
}

let mouseMotion = new MOUSE({
    mo: '.header__content'
})


/* class STATUS {
    constructor(object) {
        this.status = document.querySelector(object.status);
        this.open = document.querySelector(object.open);

        this.timeMove = object.time != undefined ? object.time : 1000;
    }
    
}

const status = new STATUS({
    status: '.status__bar',
    time: 1000,
    open: '.header__nav-button'
})
 */


function openNav() {
    document.getElementById("status__bar").style.marginLeft = "0";
}

function closeNav() {
    document.getElementById("status__bar").style.marginLeft = "-200px";
}