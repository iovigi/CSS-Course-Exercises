var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var modalCloseBtn = document.querySelector(".modal__action--negative");
var toggleBtn = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

if (selectPlanButtons) {
  selectPlanButtons.forEach(x => {
    x.addEventListener("click", function() {
      backdrop.style.display = "block";

      setTimeout(function() {
        backdrop.classList.add("open");
      }, 10);

      modal.classList.add("open");
    });
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");

  closeModal();
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

function closeModal() {
  backdrop.classList.remove("open");

  setTimeout(function() {
    backdrop.style.display = "none";
  }, 1000);

  if (modal) {
    modal.classList.remove("open");
  }
}

toggleBtn.addEventListener("click", function() {
  backdrop.style.display = "block";

  mobileNav.classList.add("open");

  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", function(event) {
  console.log("start", event);
});

ctaButton.addEventListener("animationend", function(event) {
  console.log("end", event);
});

ctaButton.addEventListener("animationiteration", function(event) {
  console.log("iteration", event);
});
