const hamburger = document.querySelector(".hero__hamburger");
const menu = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu__overlay");
const close = document.querySelector(".menu__close");

// Функція закриття меню
function closeMenu() {
  menu.classList.remove("active");
}

// Відкриття меню при кліку на гамбургер
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

// Закриття при кліку на кнопку "X"
close.addEventListener("click", closeMenu);

// Закриття при натисканні ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// Закриття при кліку поза меню (по задньому фону)
menu.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    closeMenu();
  }
});

// Плавний скрол до якорів + закриття меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });

      // Закриваємо меню після кліку
      closeMenu();
    }
  });
});

const mySwiper = new Swiper(".portfolioSwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
