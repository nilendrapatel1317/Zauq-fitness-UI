// Custom cursor ==================================================================
let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("button");

window.addEventListener("mousemove", cursor);

function cursor(cursorPointer){
  gsap.to(mouseCursor, 0.4, {
    x: cursorPointer.clientX,
    y: cursorPointer.clientY,
  });
}


//------------------------------------------------------------------------------------



var time = gsap.timeline()

time.to('#loader img',{
    scale:0,
    // duration:1,
    delay:3
})

time.to("#loader", {
    height:"0%",
    duration:1.5,
    delay:-.5,
    ease: "expo.inOut",
})
time.from(".logo-image",{
    y:50,
    opacity:0,
    duration:.5,
    delay:-.2,
})

time.from(".nav-links-box a",{
    delay:-.2,
    y:50,
    opacity:0,
    duration:.5,
    stagger:.1
})
time.from(".left-data h2, .left-data h1 , .left-data p, .left-data .input-box",{
    delay:-.2,
    y:50,
    opacity:0,
    duration:.5,
    stagger:.1
})
time.from(".left-data .getInTouch",{
    delay:-.2,
    y:50,
    duration:.5,
    opacity:0,
})
time.from(".right-data .home-img",{
    delay:-.8,
    x:500,
    duration:.5,
    opacity:0,
    duration:1,
})


gsap.from(".s2-text-box",{
    scrollTrigger:{
        trigger:".s2-text-box",
        start:"top bottom",
        end:"bottom 90%",
        // scrub:true,
        // markers:true
    },
    y:100,
    opacity:0,
})
gsap.from(".s2-img-box img",{
    scrollTrigger:{
        trigger:".s2-img-box img",
        start:"top bottom",
        end:"bottom 85%",
        scrub:.5,
        // markers:true
    },
    y:100,
    opacity:0,
    stagger:.1
})

gsap.from(".s4-data-box h1, .s4-data-box p",{
    scrollTrigger:{
        trigger:".s4-data-box h1, .s4-data-box p",
        start:"top 90%",
        end:"bottom 70%",
        // scrub:true,
        // markers:true
    },
    y:100,
    opacity:0,
    stagger:.3
})
gsap.from(".about-master",{
    scrollTrigger:{
        trigger:".about-master",
        start:"top 90%",
        end:"bottom 80%",
        // scrub:true,
        // markers:true
    },
    y:100,
    opacity:0,
    stagger:.3
})
gsap.from(".s5-top",{
    scrollTrigger:{
        trigger:".s5-top",
        start:"top 90%",
        end:"bottom 80%",
        // scrub:true,
        // markers:true
    },
    y:100,
    opacity:0,
})
gsap.from(".s5-bottom .s5-pic",{
    scrollTrigger:{
        trigger:".s5-bottom .s5-pic",
        start:"top 90%",
        end:"bottom 70%",
        // scrub:true,
        // markers:true
    },
    x:-100,
    opacity:0,
    stagger:.5
})
gsap.from(".s5-bottom .s5-b-right p, .s5-bottom .s5-b-right ul li",{
    scrollTrigger:{
        trigger:".s5-bottom .s5-b-right p, .s5-bottom .s5-b-right ul li",
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true,
        // markers:true
    },
    y:50,
    opacity:0,
    stagger:.5
})
gsap.from(".footer-top .col",{
    scrollTrigger:{
        trigger:".footer-top .col",
        start:"top 85%",
        end:"top 70%",
        // scrub:true,
        // markers:true
    },
    y:50,
    opacity:0,
    stagger:.5
})





















































document.querySelector('.getInTouch').addEventListener("mouseover",function(){
    this.style.scale = '1.1'
})
document.querySelector('.getInTouch').addEventListener("mouseleave",function(){
    this.style.scale = '1'
})