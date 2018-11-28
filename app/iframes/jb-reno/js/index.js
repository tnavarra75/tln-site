document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineLite,
    headline1a = $('#headline1a'),
    headline1b = $('#headline1b'),
    headline2 = $('#headline2'),
    mountains = $('#mountains'),
    mountaingroup1 = $('#mountain-group1'),
    mountaingroup2 = $('#mountain-group2'),
    mountaingroup3 = $('#mountain-group3'),
    water = $("#water"),
    treesHill = $('#trees-hill'),
    dock = $('#dock'),
    buildings = $('#buildings'),
    building = $('.building'),
    cloud1 = $('#cloud1'),
    cloud2 = $('#cloud2'),
    cloud3 = $('#cloud3'),
    plane = $('#plane')
    button = $('.button');


TweenLite.set(cloud1, {x: '-=50'});
TweenLite.set(cloud2, {x: '-=70', y: '+=10'});
TweenLite.set(cloud3, {x: '-=50', y:'+=32'});

TweenLite.set(mountains, {x: '-=28'});

TweenLite.set(plane, {autoAlpha: 1, y: '+=13', x: '-=100', transformOrigin: '0%, 100%', rotation: '-2'});

TweenLite.to(plane, 6, {x: '+=370', y: '+=5', ease: Power0.easeNone});

TweenLite.to(cloud1, 7.5, {x: '+=120', ease: Power1.easeOut});
TweenLite.to(cloud2, 9, {x: '+=90', ease: Power1.easeOut, delay: .5});
TweenLite.to(cloud3, 9, {x: '+=60', ease: Power1.easeOut});


var waterDuration = 1.5;
//TIMELINE
tl
.add('waterOut')
.to(headline1a, .3, {autoAlpha: 1}, 'waterIn')
.to(water, waterDuration, {y: '+=54', transformOrigin: '50%, 0%', ease: Power2.easeIn}, 'waterOut')
.to(dock, waterDuration, {y: '+=54', scale: .8, transformOrigin: '50%, 100%', ease: Power2.easeIn}, 'waterOut')
.to(mountains, waterDuration, {y: '+=54', transformOrigin: '50%, 100%', ease: Power2.easeIn}, 'waterOut')
.to([mountaingroup1, mountaingroup3], waterDuration, {autoAlpha: 0, ease: Power2.easeIn}, 'waterOut')
.to(mountaingroup2, waterDuration, {scaleX: 2, scaleY: 4, transformOrigin: '50%, 100%', ease: Power2.easeIn}, 'waterOut')
.set(treesHill, {autoAlpha: 1, ease: Power2.easeOut})
.from(treesHill, .7, {y: '+=50', ease: Power2.easeOut}, '-=.2')
.add('bulidingsIn', '+=1')
.to(headline1b, .5, {autoAlpha: 1}, 'bulidingsIn')
.set(buildings, {autoAlpha: 1}, 'bulidingsIn')
.staggerFrom(building, .3, {y: '+=50', ease: Power2.easeOut}, .09, 'bulidingsIn')
.to([headline1a, headline1b], .5, {autoAlpha: 0, ease: Power2.easeIn}, '+=1.5')
.to(headline2, .5, {autoAlpha: 1, ease: Power2.easeIn}, '-=.05');


$(button).on('mouseenter', function (event) {
    TweenLite.to(button, .3, {scale: 1.2});

    $(this).on('mouseleave', function (event) {
        TweenLite.to(button, .3, {scale: 1});
    });
});



//PLAYHEAD
GSDevTools.create();

  
}, false);