const bmark = document.getElementById("bmark");
const ulRwds = document.getElementById("pldg-rwd-list");
const rwdInputs = ulRwds.getElementsByTagName("input");
// Array.from(rwdInputs).forEach(e, i => console.log(e, i));

bmark.addEventListener("click", () => {
  const bmarkImg = document.getElementById("bmarkImg");
  bmarkImg.classList.toggle("section-1__bmark-ctn__bmark-img--green");

  bmark.classList.toggle("section-1__bmark--green-text");
  bmark.classList.contains("section-1__bmark--green-text")
  ? bmark.textContent = "Bookmarked"
  : bmark.textContent = "Bookmark"

});

for (let i = 1; i <= 4; i++) {
  const pldgItem = document.getElementById(`pldg-rwd-item-${i}`);
  const rwdInput = document.getElementById(`pledge-rwd-${i}`);
  const hdr = document.getElementById(`pldg-hdr-${i}`);

  hdr.addEventListener("click", () => {
    const pldgItems = ulRwds.getElementsByTagName("li");
    rwdInput.checked = true;
    Array.from(pldgItems).forEach(pldgLiItem => {
      if (pldgLiItem.classList.contains("pldg-rwd-item--active")) {
        pldgLiItem.classList.remove("pldg-rwd-item--active");
      }
    })
    pldgItem.classList.add("pldg-rwd-item--active");
  });

  hdr.addEventListener("mouseover", () => {
    rwdInput.style.borderColor = "hsl(176, 50%, 47%)";
  });

  hdr.addEventListener("mouseout", () => {
    rwdInput.style.borderColor = "hsl(0, 0%, 75%)";
  })
}

// for (let i = 0; i < 4; i++) {
//   rwdInputs[i].addEventListener("click", () => {
//     for (let j = 0; j < 4; j++) {
//       if (rwdInputs[j].checked) {
//         rwdInputs[j].checked = false;
//       };
//     };

//     rwdInputs[i].checked = true;
//   });
// };