document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineLite,
    rotateTl = new TimelineLite,
    headline1 = document.getElementById('headline1'),
    headline2 = document.getElementById('headline2'),
    headline3 = document.getElementById('headline3'),
    headline1Split = new SplitText(headline1, {type:'chars'}),
    headline2Split = new SplitText(headline2, {type:'chars'}),
    headline3Split = new SplitText(headline3, {type:'chars'}),
    headline1SplitChars = headline1Split.chars,
    headline2SplitChars = headline2Split.chars,
    headline3SplitChars = headline3Split.chars,//an array of all the divs that wrap each character
    carolinaKenoLogo = document.getElementById('carolina-keno-logo'),
    kenoBall = document.getElementById('keno-ball'),
    kenoLogo = document.getElementById('keno-logo'),
    timesRotate = 1.5,
    rotation = 360 * timesRotate,
    headlineCharacterTweenDuration = 0.3,
    headlineStaggerDuration = .04,
    headlineOutDuration = 0.6,
    headlinePause = 1.5,
    button = document.getElementsByClassName('button'),
    rays = document.getElementById('rays'),
    maskCircle = document.getElementById('radial-gradient-for-mask'),
    nceLotteryLogo = document.getElementById('nce-lottery-logo'),
    legal = document.getElementsByClassName('legal');

//SET HEADLINES TO BE INVISIBLE AND ROTATE CHARACTERS - SPLITTEXT NEEDS THEM VISIBLE IN ORG CSS
TweenLite.set([headline1SplitChars, headline2SplitChars, headline3SplitChars], {autoAlpha: 0, transformOrigin: "0% 100%", rotation: '90cw'});

// //FUNCTIONS TO START AND STOP RAYS FROM ROTATING
var raysTween = TweenLite.to(rays, 30, {directionalRotation: '180_cw', ease:Linear.easeNone});

raysTween.timeScale(0);
  
function playRays() {
  TweenLite.to(raysTween, 1, {timeScale:1});
}  
  
function stopRays() {
    TweenLite.to(raysTween, 1, {timeScale:0});
}

//TIMELINE
tl
//rays move into frame and grow as ball rolls
.from(rays, 2, {xPercent:'-50', transformOrigin: "50% 50%", ease:Power4.easeOut}, 0)
.from(maskCircle, 1, {attr:{r: 0}, transformOrigin: "50% 50%", ease:Power2.easeOut}, 0)
.from(carolinaKenoLogo, 2, {x:'-240', transformOrigin:'50% 50%', ease:Power4.easeOut, rotation:rotation}, 0)
.add(playRays, '-=.5')
.to([nceLotteryLogo, legal], .8, {autoAlpha:1}, 'ballOutLogoBig')
.to(kenoBall, .4, {autoAlpha: '0'}, 'ballOutLogoBig')
.to(kenoLogo, .8, {scale: '2', transformOrigin: '50% 50%'}, 'ballOutLogoBig')
//HEADLINES IN AN OUT
.staggerTo(headline1SplitChars, headlineCharacterTweenDuration, {autoAlpha: 1, rotation: "0"}, headlineStaggerDuration, '-=.6')
.to(headline1, headlineOutDuration, {x: '+=300', skewX: '-10', ease:Power2.easeOut}, '+=' + headlinePause)
.staggerTo(headline2SplitChars, headlineCharacterTweenDuration, {autoAlpha: 1, rotation: '0'}, headlineStaggerDuration)
.to(headline2, headlineOutDuration, {x: '+=300', skewX: '-10', ease:Power2.easeOut}, '+=' + headlinePause)
.staggerTo(headline3SplitChars, headlineCharacterTweenDuration, {autoAlpha: 1, rotation: '0'}, headlineStaggerDuration)
.to(headline3, headlineOutDuration, {x: '+=300', skewX: '-10', ease:Power2.easeOut}, '+=' + headlinePause)
//END FRAME
.to(button, .5, {autoAlpha: 1, ease:Power0.easeNone})
.add('stopRaysLabel', '+=1')
.add(stopRays, 'stopRaysLabel');

//PLAYHEAD
// GSDevTools.create();

  
}, false);