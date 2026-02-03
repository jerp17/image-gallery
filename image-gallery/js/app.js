// Get elements
const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Open modal when image clicked
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.style.overflow = "hidden"; 
  });
});

// Close when X clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});