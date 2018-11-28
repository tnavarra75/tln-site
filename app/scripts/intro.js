$( document ).ready(function() {

  if( $('.intro').length === 0) {
    return;
  }

  var stripes = $('.stripes'),
    eye = $('.eye'),
    branch = $('.branch'),
    mouth = $('.mouth'),
    leg1stripes = $('.leg-1-stripes'),
    leg3stripes = $('.leg-3-stripes'),
    leg2 = $('.leg-2'),
    face = $('.face'),
    highlight = $('.highlight'),
    highlightDot = $('.highlight-dot'),
    outterShape = $('#outter-shape'),
    yellow = '#fff166',
    orange = '#ffa415',
    blue = '#00c0c7',
    purple = '#ad0094',
    green = '#24b34b',
    color1 = $('#color1'),
    headline = $('#intro-h1'),
    subhead = $('#intro-h2'),
    copy = $('#intro-p'),
    copySplit = new SplitText(copy, {type:'lines'}),
    copySplitLines = copySplit.lines,
    part1 = $('#part1'),
    part2 = $('#part2'),
    part3 = $('#part3'),
    socialIconsContainer = $('.social-icons-container-intro'),
    viewWork = $('.view-work');



  function drawChameleon() {
    var drawChameleon = new TimelineLite();
    drawChameleon
    .add('faceIn')
    .staggerFrom(face, .06, {drawSVG: 0, ease: Power2.easeInOut}, .1, 'faceIn')
    .staggerFrom(eye, .2, {drawSVG: 0, ease: Power2.easeInOut}, .3, 'faceIn')
    .staggerFrom(mouth, .2, {drawSVG: 0, ease: Power2.easeInOut}, .3, 'faceIn')
    .staggerFrom(stripes, .2, {drawSVG: 0, ease: Power2.easeInOut}, .03, 'faceIn-=.5')
    .staggerFrom(highlight, .2, {drawSVG: 0, ease: Power2.easeInOut}, .3, 'faceIn')
    .add('legStripeIn')
    .staggerFrom(highlightDot, .2, {drawSVG: 0, ease: Power2.easeInOut}, .05, 'legStripeIn-=.5')
    .staggerFrom(leg3stripes, .2, {drawSVG: 0, ease: Power2.easeInOut}, .05, 'legStripeIn-=.8')
    .staggerFrom(leg1stripes, .2, {drawSVG: 0, ease: Power2.easeInOut}, .05, 'legStripeIn-=.5');

    drawChameleon.duration(.7);

    return drawChameleon;
  }


  function handwriting() {
    var handwriting = new TimelineLite();

    handwriting
    .from($('#H-1-path'), .4, {drawSVG: 0, ease: Power2.easeInOut})
    .from($('#H-2-path'), .6, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#iA-1-1-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#iA-1-2-path'), .3, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#iA-1-3-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#iA-1-dot'), .05, {autoAlpha: 0, ease: Power0.easeNone})
    .from($('#excl-path'), .4, {drawSVG: 0, ease: Power2.easeInOut})
    .from($('#excl-dot'), .05, {autoAlpha: 0, ease: Power0.easeNone})
    .from($('#I-1-path'), .4, {drawSVG: 0, ease: Power2.easeInOut}, '+=1')
    .from($('#I-2-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#apost'), .05, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-1-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-2-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-3-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-4-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-5-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-6-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#m-7-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#T-1-path'), .4, {drawSVG: 0, ease: Power2.easeInOut})
    .from($('#T-2-path'), .4, {drawSVG: 0, ease: Power2.easeInOut})
    .from($('#e-r-path'), .6, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#r-1-1-path'), .4, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#i-2-1-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#i-2-2-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#i-2-3-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#i-2-dot'), .05, {autoAlpha: 0, ease: Power0.easeNone})
    .from($('#N-1-path'), .4, {drawSVG: 0, ease: Power2.easeInOut})
    .from($('#N-2-path'), .5, {drawSVG: 0, ease: Power2.easeInOut})
    .from($('#a-1-1-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-1-2-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-1-3-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-1-4-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#v-1-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#v-2-path'), .4, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-2-1-path'), .4, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-2-2-path'), .2, {drawSVG: 0, ease: Power0.easeNone}, '+=.2')
    .from($('#a-2-3-path'), .1, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#r-3-path'), .4, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#r-4-path'), .4, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-3-1-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-3-2-path'), .2, {drawSVG: 0, ease: Power0.easeNone}, '+=.2')
    .from($('#a-3-3-path'), .2, {drawSVG: 0, ease: Power0.easeNone})
    .from($('#a-3-4-path'), .1, {drawSVG: 0, ease: Power0.easeNone});

    handwriting.timeScale(6);

    return handwriting;
  }


function introText() {
  var introText = new TimelineLite();

  introText
  .staggerFrom(copySplitLines, .7, {autoAlpha: 0, y: '+20', ease: Power2.easeInOut}, .15, '+=.5')
  .from(viewWork, .5, {autoAlpha: 0})
  .from(socialIconsContainer, 1, {autoAlpha: 0}, '+=.18');

  return introText;
}



var master = new TimelineLite();

master
.add(handwriting())
.add('part1In', '+=.6')
.from(part1, .5, {autoAlpha: 0}, 'part1In')
.from('#outter-shape', 1, {drawSVG: 0, ease: Power2.easeInOut}, 'part1In')
.from(leg2, .2, {drawSVG: 0, ease: Power2.easeInOut}, 'part1In+=.5')
.add('part2In', '+=.5')
.from(part2, .5, {autoAlpha: 0}, 'part2In')
.from(branch, .6, {drawSVG: 0, ease:Power2.easeInOut}, 'part2In')
.add('part3In', '+=.8')
.from(part3, .7, {autoAlpha: 0}, 'part3In')
.add(drawChameleon(), 'part3In')
.add(introText())
.staggerTo($('#chameleon-2 stop'), 3, {cycle:{stopColor: [purple, yellow, orange, purple]}, yoyo: true,repeat: -1, repeatDelay: 6}, 2, '-=1');

}); //end doc ready












