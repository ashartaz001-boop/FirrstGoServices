import { useEffect } from "react";

export const useFadeIn = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fu").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
