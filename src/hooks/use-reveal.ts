import { useEffect } from "react";

/**
 * Reveals elements on scroll. Supports `data-reveal` directional variants:
 * "up" (default), "down", "left", "right", "scale", "zoom", "blur".
 * Supports `data-reveal-delay="120"` for staggered effects (in ms).
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]");

    els.forEach((el) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.transitionDelay = `${delay}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
