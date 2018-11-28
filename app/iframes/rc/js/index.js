var wave = document.getElementsByClassName('wave'),
    wave2 = document.getElementById('wave2'),
    wave3 = document.getElementById('wave3'),
    taglineLetter = document.getElementsByClassName('tagline-letter'),
    blueBackground = document.getElementsByClassName('blue-background'),
    headline1 = document.getElementById('headline1'),
    headline2 = document.getElementById('headline2'),
    headline3 = document.getElementById('headline3'),
    headline4 = document.getElementById('headline4'),
    voomLogo = document.getElementsByClassName('voom-logo'),
    corner = document.getElementsByClassName('corner'),
    whiteBorder = document.getElementsByClassName('white-border'),
    button = document.getElementsByClassName('button'),
    logo = document.getElementsByClassName('logo'),
    skyjumper = document.getElementById('skyjumper'),
    skyjumperSilo1 = document.getElementById('skyjumper-silo1'),
    skyjumperSilo2 = document.getElementById('skyjumper-silo2'),
    skyjumperSilo3 = document.getElementById('skyjumper-silo3'),
    noJumper = document.getElementById('no-jumper'),
    canvas = document.getElementById('canvas');

function banner() {
    tl = new TimelineMax();
    tl
    .set(blueBackground, {autoAlpha: 1, scaleX: 0})
    .set(taglineLetter, {scaleX: 0, transformOrigin: 'left top'})
    .set(noJumper, {autoAlpha: 1})
    .set(canvas, {autoAlpha: 0})
    .set(skyjumperSilo1, {autoAlpha: 1})

    .add(function() {
        skyJumperMove();
        skyJumperFlap();
    }, '+=.3')
    .add('headlineBorderIn')
    .to(headline1, .1, {autoAlpha: 0})
    .to([whiteBorder, corner], .3, {autoAlpha: 1}, 'headlineBorderIn')
    .to(headline2, .3, {autoAlpha:1}, 'headlineBorderIn')
    .to(headline2, .1, {autoAlpha: 0}, '+=3')
    .to(headline3, .1, {autoAlpha: 1})
    .to(headline3, .1, {autoAlpha: 0}, '+=3')
    .add('logoIn')
    .add( function(){ 
        skyJumperMoveTl.pause(); 
    })
    .to(blueBackground, .4,{scaleX: 1}, 'logoIn')
    .to(voomLogo, .4, {autoAlpha: 1}, 'logoIn')
    .add('tagWavesIn')
    .staggerTo(wave, .8, {autoAlpha: 1,}, .4, 'tagWavesIn')
    .staggerTo(taglineLetter, .1, {autoAlpha: 1, scaleX: 1, ease: Power2.easeIn}, .04, 'tagWavesIn')
    .to(headline4, .3, {autoAlpha: 1}, '=-.3')
    .to(logo, .2, {autoAlpha: 1})
    .to(button, .2, {autoAlpha: 1})
    return tl;
}


function skyJumperFlap() {
    skyJumperFlapTl = new TimelineMax({repeat: -1, yoyo:true});
    skyJumperFlapTl
    .to(skyjumperSilo2, .01, {autoAlpha: 1}, '+=.03')
    .to(skyjumperSilo3,.01, {autoAlpha: 1}, '+=.03')
    return skyJumperFlapTl;
}

function skyJumperMove() {
    skyJumperMoveTl = new TimelineMax({repeat: -1, yoyo:true});
    skyJumperMoveTl
    .to(skyjumper, 2, {ease: Power2.easeInOut, y: '+=20px'}) //down
    .to(skyjumper, 2, {ease: Power3.easeIn, y: '-=15px'}) //up
    .to(skyjumper, .8, {ease: Power2.easeOut, y: '-=8px'}) //up
    .to(skyjumper, 2.5, {ease: Power3.easeIn, y: '+=23px'}) //down
    return skyJumperMoveTl;
}

/// (C) Ken Fyrstenberg Nilsen, Abdias Software, CC3.0-attribute.
var ctx = canvas.getContext('2d'),
    img = new Image();

/// turn off image smoothing - this will give the pixelated effect
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

/// wait until image is actually available
img.onload = pixelate;

/// some image, we are not struck with CORS restrictions as we
/// do not use pixel buffer to pixelate, so any image will do
img.src = 'http://terriloomer.com/iframes/rc/img/skyjumper.jpg';

var v = 1,
    dx = 0.1; /// "speed"

/// MAIN function
function pixelate(v) {

    var size = v * 0.008,

    /// cache scaled width and height
    w = canvas.width * size,
    h = canvas.height * size;

    /// draw original image to the scaled size
    ctx.drawImage(img, 0, 0, w, h);

    /// then draw that scaled image thumb back to fill canvas
    /// As smoothing is off the result will be pixelated
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}

/// poly-fill for requestAnmationFrame with fallback for older
/// browsers which do not support rAF.
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

function anim() {
    /// stop when hits full resolution
    if (v >= 100) {
      dx = cancelAnimationFrame(anim);
      
    }
    else if (v > 80) {
      dx = 30;
      banner(); //plays timeline
    }
    else if (v > 30) {
      dx = 10;
    }
    else {
      dx= .15;
    }
  
    /// increase value
    v += dx;

    /// pixelate image with current value
    pixelate(v);

    /// loop
   requestAnimationFrame(anim);
}

anim();



