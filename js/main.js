if(window.innerWidth<=821){
    alert("Mobile view not pos");
    document.write("d")
}
else{
    console.log("ok")
}



function onMouseUp(btnid){
   document.getElementById(btnid).style.margin="0px"
}
function onMouseDown(btnid){
    document.getElementById(btnid).style.margin="-60px"  
 }

gsap.from('.hero-left h2',{
    opacity:0,
    y:10,
    delay:1
})
gsap.from(".profile-img",{
    opacity:0,
    x:-280,
    duration:.9,
    delay:2,
    scrollTrigger:{
        trigger:".hero",
        scroller:"body",
    }
})
gsap.from(".hero-dt h1",{
    opacity:0,
    x:180,
    duration:1,
    delay:3
})
gsap.from(".hero-dt p",{
    opacity:0,
    y:10,
    duration:2.1,
    delay:4
})
gsap.from('.hero-right .navbar',{
    opacity:0,
    duration:1.6,
    delay:5
})





gsap.from(".page2 .left h1",{
    x:-10,
    opacity:0,
    delay:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body"
    }
})

gsap.from(".page2 .left p",{
    y:10,
    opacity:0,
    delay:.6,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 10%"
    }
})

gsap.from(".page3 .down .card",{
    x: -10,
    opacity:0,
    stagger:0.4,
    duration:.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"bottom 20%"
    }
})

gsap.from(".page4 .right .card",{
    opacity:0,
    scale:.2,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 90%",
    }
})
gsap.from(".page5 .left .pro-card, .right .pro-card",{
    opacity:0,
    scale:.9,
    scrub:2.1,
    duration:0.8,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"bottom 40%",
        end: "bottom -20%",
        scrub:true,
    }
})

gsap.from('.page6 .left',{
    x:-60,
    duration:.2,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        start:"top 1%"
    }
})


function opennav(){
    document.getElementById('res-nav').style.width='90%';   
}
function closenav(){
    document.getElementById('res-nav').style.width='0%';
}

// project page scripting 
gsap.to('.loader2 .box',{
   y:-900,
   duration:.8,
   stagger:.3
})
const div = document.querySelector(".loader2");

// Hide the div after 1 second
setTimeout(() => {
  div.style.display = "none";
}, 1100);