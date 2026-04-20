const loadComponent = async (id, file) => {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
};

// load navbar
loadComponent("navbar", "components/navbar.html").then(() => {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// load footer
loadComponent("footer", "components/footer.html");

// load home hero
loadComponent("home-hero", "components/home-hero.html");

// load who we are
loadComponent("who-we-are", "components/who-we-are.html");

// load features
loadComponent("features", "components/features.html");

// load home-banner
loadComponent("home-banner", "components/home-banner.html");

// load activities-section
loadComponent("activities-section", "components/activities-section.html");

// load courses section
loadComponent("courses-section", "components/courses-section.html").then(() => {
  const swiper = new Swiper(".courses-mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  // desktop buttons
  document
    .getElementById("courses-btn-prev")
    .addEventListener("click", () => swiper.slidePrev());
  document
    .getElementById("courses-btn-next")
    .addEventListener("click", () => swiper.slideNext());

  // mobile buttons
  document
    .getElementById("courses-btn-prev-mobile")
    .addEventListener("click", () => swiper.slidePrev());
  document
    .getElementById("courses-btn-next-mobile")
    .addEventListener("click", () => swiper.slideNext());
});

// load testimonials section
loadComponent(
  "testimonials-section",
  "components/testimonials-section.html",
).then(() => {
  const swiper = new Swiper(".testimonial-mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  // desktop buttons
  document
    .getElementById("testimonial-btn-prev")
    .addEventListener("click", () => swiper.slidePrev());
  document
    .getElementById("testimonial-btn-next")
    .addEventListener("click", () => swiper.slideNext());

  // mobile buttons
  document
    .getElementById("testimonial-btn-prev-mobile")
    .addEventListener("click", () => swiper.slidePrev());
  document
    .getElementById("testimonial-btn-next-mobile")
    .addEventListener("click", () => swiper.slideNext());
});

// load video-section
loadComponent("video-section", "components/video-section.html").then(() => {
  const video = document.getElementById("courseVideo");
  const overlay = document.getElementById("videoOverlay");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    video.play();
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  });

  // لو عايز لما الفيديو يخلص يرجع الزرار
  video.addEventListener("ended", () => {
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
  });
});

// load contact
loadComponent("contact", "components/contact.html").then(() => {
  const phoneInput = document.querySelector("#phone");
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "sa", // مصر
    preferredCountries: ["eg", "sa", "ae"],
    separateDialCode: true,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
  });
});

// load profile-sidebar
loadComponent("profile-sidebar", "components/profile-sidebar.html").then(() => {
  const links = document.querySelectorAll(".profile-link");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
