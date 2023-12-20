function loco(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
};
loco();
function page1(){
var headline = document.querySelector("#headline");
var subtext = document.querySelector("#subtext");
gsap.from(headline,{
  y:400,
  opacity:0,
  duration:2,
  // scale:0,
  duration:1,
});
gsap.from(subtext,{
  delay:1,
  opacity:0,
  // scale:0,
  duration:1,
});
};
page1();

var hvrcntnr = document.querySelector(".hover-container");
function webhover(){
  var web = document.querySelector(".web");
  var webp1 = document.querySelector(".web-p1");
  var webp2 = document.querySelector(".web-p2");
  var webhov = document.querySelector(".web-container");
  var webh1 = document.querySelector(".web-left>h1");
  var webimg = document.querySelector(".web-right>img");

  web.addEventListener("mouseenter",()=>{
    webhov.style.opacity="1";
    hvrcntnr.style.opacity="0";
  gsap.from(webh1,{
    x:-450,
  });
  gsap.from(webp1,{
    x:-350,
    delay:0.3
  });
  gsap.from(webp2,{
    x:-350,
    delay:.5
  });
  gsap.from(webimg,{
    scale:0,
    delay:.7,
    x:500,

  });
});
web.addEventListener("mouseleave",()=>{
  webhov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
webhover();
function htmlhover(){
  var html = document.querySelector(".html");
  var htmlp1 = document.querySelector(".html-p1");
  var htmlp2 = document.querySelector(".html-p2");
  var htmlhov = document.querySelector(".html-container");
  var htmlh1 = document.querySelector(".html-left>h1");
  var htmlimg = document.querySelector(".html-right>img");

html.addEventListener("mouseenter",()=>{
  htmlhov.style.opacity="1";
  hvrcntnr.style.opacity="0";
  gsap.from(htmlh1,{
    x:-250,
  });
  gsap.from(htmlp1,{
    x:-250,
    delay:.2,
  });
  gsap.from(htmlp2,{
    x:-450,
    delay:.4,
  });
  gsap.from(htmlimg,{
    scale:0,
    delay:.6
  });
});
html.addEventListener("mouseleave",()=>{
  htmlhov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
htmlhover();
function csshover(){
  var css = document.querySelector(".css");
  var cssp1 = document.querySelector(".css-p1");
  var cssp2 = document.querySelector(".css-p2");
  var csshov = document.querySelector(".css-container");
  var cssh1 = document.querySelector(".css-left>h1");
  var cssimg = document.querySelector(".css-right>img");

  css.addEventListener("mouseenter",()=>{
    csshov.style.opacity="1";
    hvrcntnr.style.opacity="0";;
  gsap.from(cssh1,{
    x:-250,
  });
  gsap.from(cssp1,{
    x:-250,
    delay:0.2,
  });
  gsap.from(cssp2,{
    x:-380,
    delay:0.4,
  });
  gsap.from(cssimg,{
    scale:0,
    delay:0.6,
  });
});
css.addEventListener("mouseleave",()=>{
  csshov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
csshover();
function jshover(){
  var js = document.querySelector(".js");
  var jsp1 = document.querySelector(".js-p1");
  var jshov = document.querySelector(".js-container");
  var jsh1 = document.querySelector(".js-left>h1");
  var jsimg = document.querySelector(".js-right>img");

  js.addEventListener("mouseenter",()=>{
    jshov.style.opacity="1";
    hvrcntnr.style.opacity="0";
  gsap.from(jsh1,{
    x:-250,
  });
  gsap.from(jsp1,{
    opacity:0,
    delay:0.5
  });
  gsap.from(jsimg,{
    scale:0,
    delay:0.3
  });
});
js.addEventListener("mouseleave",()=>{
  jshov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
jshover();
function nodehover(){
  var node = document.querySelector(".node");
  var nodep1 = document.querySelector(".node-p1");
  var nodehov = document.querySelector(".node-container");
  var nodeh1 = document.querySelector(".node-left>h1");
  var nodeimg = document.querySelector(".node-right>img");

  node.addEventListener("mouseenter",()=>{
    nodehov.style.opacity="1";
    hvrcntnr.style.opacity="0";
  gsap.from(nodeh1,{
    x:-450,
  });
  gsap.from(nodeimg,{
    scale:0,
    delay:.3
  });
  gsap.from(nodep1,{
    opacity:0,
    delay:0.5
  });
});
node.addEventListener("mouseleave",()=>{
  nodehov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
nodehover();
// -----------------------
function expresshover(){
  var express = document.querySelector(".express");
  var expressp1 = document.querySelector(".express-p1");
  var expresshov = document.querySelector(".express-container");
  var expressh1 = document.querySelector(".express-left>h1");
  var expressimg = document.querySelector(".express-right>img");

  express.addEventListener("mouseenter",()=>{
    expresshov.style.opacity="1";
    hvrcntnr.style.opacity="0";
  gsap.from(expressh1,{
    x:-450,
  });
  gsap.from(expressp1,{
    opacity:0,
    delay:0.5
  });
  gsap.from(expressimg,{
    scale:0,
    delay:.3
  });
});
express.addEventListener("mouseleave",()=>{
  expresshov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
expresshover();
// -----------------------
function mongohover(){
  var mongo = document.querySelector(".mongo");
  var mongop1 = document.querySelector(".mongo-p1");
  var mongohov = document.querySelector(".mongo-container");
  var mongoh1 = document.querySelector(".mongo-left>h1");
  var mongoimg = document.querySelector(".mongo-right>img");

  mongo.addEventListener("mouseenter",()=>{
    mongohov.style.opacity="1";
    hvrcntnr.style.opacity="0";
  gsap.from(mongoh1,{
    x:-450,
  });
  gsap.from(mongop1,{
    opacity:0,
    delay:0.5
  });
  gsap.from(mongoimg,{
    scale:0,
    delay:.3
  });
});
mongo.addEventListener("mouseleave",()=>{
  mongohov.style.opacity="0";
  hvrcntnr.style.opacity="1";
});
};
mongohover();
// -----------------------

