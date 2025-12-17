
document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tabs button");
  const productGrid = document.querySelector(".product-grid");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      /* ---------- ACTIVE STATE ---------- */
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      /* ---------- SUBTLE CONTENT FEEDBACK ---------- */
      if (productGrid) {
        productGrid.style.opacity = "0";
        productGrid.style.transform = "translateY(6px)";

        setTimeout(() => {
          productGrid.style.opacity = "1";
          productGrid.style.transform = "translateY(0)";
        }, 180);
      }

      /* ---------- MOBILE UX POLISH ---------- */
      tab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });

      /* ---------- ACCESSIBILITY (BONUS) ---------- */
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");
    });
  });

});


