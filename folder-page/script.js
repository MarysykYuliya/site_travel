document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("modal");
  const fullImage = document.getElementById("fullImage");
  const closeBtn = document.querySelector(".close");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
      modal.style.display = "flex";
      fullImage.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
