var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var modalCloseBtn = document.querySelector(".modal__action--negative");
var toggleBtn = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

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
