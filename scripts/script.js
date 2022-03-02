const bmark = document.getElementById("bmark");

bmark.addEventListener("click", () => {
  const bmarkImg = document.getElementById("bmarkImg");
  bmarkImg.classList.toggle("section-1__bmark-ctn__bmark-img--green");

  bmark.classList.toggle("section-1__bmark--green-text");
  bmark.classList.contains("section-1__bmark--green-text")
  ? bmark.textContent = "Bookmarked"
  : bmark.textContent = "Bookmark"

});