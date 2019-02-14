var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var modalCloseBtn = document.querySelector(".modal__action--negative");
var toggleBtn = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

selectPlanButtons.forEach(x => {
  x.addEventListener("click", function() {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});

backdrop.addEventListener("click", function() {
  mobileNav.style.display = "none";
  closeModal();
});

modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

toggleBtn.addEventListener("click", function() {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
