import "./style.css";
import { gsap } from "gsap";

/* Apparition du titre */
gsap.from(".hero__title", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});
