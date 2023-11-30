import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger)

export const initAnimation = () => {

//hero start animation
  gsap.matchMedia().add("(min-width: 568px)", () => {
    const animTopText = document.querySelector(".hero__content_description>h1");
    if (animTopText) {
      const animTopButton = document.querySelector(".hero__content_description>.button");
      const animTopTopic = document.querySelectorAll(".hero__content_description>p");
      const animTopCircle = document.querySelector(".hero__content>.circle");
      const animTopImg = document.querySelector(".hero__content>picture>img");
      gsap.timeline().fromTo(animTopText, {
        y: 50,
        opacity: 0
      }, {
        opacity: 1,
        y: 0
      }, "hero-1")
        .to(animTopButton, {opacity: 1}, "hero-2")
        .to(animTopTopic, {opacity: 1}, "hero-2")
        .fromTo(animTopCircle, {
            width: "32.1rem",
            height: "32.1rem",
          }, {
            width: "62.1rem",
            height: "62.1rem"
          }, "hero-1"
        )
        .fromTo(animTopImg, {
            x: "20rem",
            y: "20rem",
          }, {
            x: 0,
            y: 0
          }, "hero-1"
        )
    }

//text animation on scroll
    const arrayFromAnimatedElements = [
      ".testimonials__list",
      ".supply__content_text>h2",
      ".supply__content_text>ul",
      ".supply__content_text>p",
      ".supply__content_text>blockquote",
      ".supply__content_text>.button",
      ".truck__content_text>h3",
      ".questions__title",
      ".questions__list>li",
      ".contact-us__content_title>h2",
      ".contact-us__content_title>p",
      ".brands-slider",
      ".supply__content_img .animated",
      ".contact-us__content_title>.button",
    ]
    const textAnimationObjects = document.querySelectorAll(arrayFromAnimatedElements.join(", "));
    if (textAnimationObjects.length > 0) {
      textAnimationObjects.forEach(obj => {
        gsap.from(obj, {
          scrollTrigger: {
            trigger: obj,
          },
          y: "10rem",
          opacity: 0
        })
      })
    }

//picture animation on scroll from bottom left to current
    const animatedImages = document.querySelectorAll(".animated");
    if (animatedImages.length > 0) {
      animatedImages.forEach(img => {
        gsap.from(img, {
          scrollTrigger: img,
          x: "-10rem",
          y: "5rem"
        })
      })
    }

//truck animation on scroll
    const truckImg = document.querySelector('.truck__content_img')
    if (truckImg) {
      const truckTopText = document.querySelector('.truck__content_text>p');
      const truckButton = document.querySelector('.truck__content_text>.button')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: truckImg
        }
      })
      tl.from(truckImg, {
        x: "5rem",
      })
        .from(truckTopText, {
          opacity: 0,
        }, "truck")
        .to(truckButton, {opacity: 1},
          "truck")
    }

// circles animation on scroll
    const circleAnimationObjects = document.querySelectorAll(".supply__content_img>.circle");
    if (circleAnimationObjects.length > 0) {
      circleAnimationObjects.forEach(obj => {
        gsap.from(obj, {
          scrollTrigger: {
            trigger: obj,
          },
          width: "32.1rem",
          height: "32.1rem",
        })
      })
    }
//count hero animation
    const textCount = document.querySelector(".supply__content_text>h2>span>span");
    if (textCount) {
      gsap.from(textCount, {
        scrollTrigger: {
          trigger: textCount,
        },
        textContent: 0,
        duration: 4,
        snap: { textContent: 1 },
        stagger: 1,
      })
    }
  })
}