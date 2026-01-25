import "./style.css";
import { gsap } from "gsap";

/* Apparition du titre */
gsap.from(".hero__title", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

/* Carousel avec style peek */
let currentSlide = 0;
const items = document.querySelectorAll(".carousel__item");
const container = document.querySelector(".carousel__container");
const prevBtn = document.querySelector(".carousel__btn--prev");
const nextBtn = document.querySelector(".carousel__btn--next");

const ITEM_WIDTH = 280; // largeur de l'image
const GAP = 24; // gap entre les images (1.5rem = 24px)

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentSlide) {
      item.classList.add("active");
    }
  });

  // Translate le container pour centrer l'image active
  const offset = -(currentSlide * (ITEM_WIDTH + GAP));
  gsap.to(container, {
    x: offset,
    duration: 0.5,
    ease: "power2.out",
  });
}

if (nextBtn && prevBtn && items.length > 0) {
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateCarousel();
  });

  updateCarousel();
}
