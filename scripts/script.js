const bmark = document.getElementById("bmark");
const ulRwds = document.getElementById("pldg-rwd-list");
const rwdInputs = ulRwds.getElementsByTagName("input");
const bckProjBtn = document.querySelector(".section-1__back");
const bckProjMdlCls = document.querySelector(".back-prj-mdl__cls-mdl");

bmark.addEventListener("click", () => {
  const bmarkImg = document.getElementById("bmarkImg");
  bmarkImg.classList.toggle("section-1__bmark-ctn__bmark-img--green");

  bmark.classList.toggle("section-1__bmark--green-text");
  bmark.classList.contains("section-1__bmark--green-text")
  ? bmark.textContent = "Bookmarked"
  : bmark.textContent = "Bookmark"
});

bckProjBtn.addEventListener("click", () => {
  const bckProjMdl = document.querySelector(".back-prj-mdl");
  const greyBg = document.querySelector(".bck-prj-mdl-bg");
  greyBg.classList.add("bck-prj-mdl-bg--show");
  
  setTimeout(() => {
    bckProjMdl.style.display = "block";

    setTimeout(() => {
      bckProjMdl.classList.add("back-prj-mdl--show");
    }, 15);
  }, 0);
});

bckProjMdlCls.addEventListener("click", () => {
  const bckProjMdl = document.querySelector(".back-prj-mdl");
  const greyBg = document.querySelector(".bck-prj-mdl-bg");
  greyBg.classList.remove("bck-prj-mdl-bg--show");

  bckProjMdl.classList.remove("back-prj-mdl--show");
  setTimeout(() => {
    bckProjMdl.style.display = "none";
  }, 100);
})

for (let i = 1; i <= 3; i++) {
  const pldgItem = document.getElementById(`pldg-rwd-item-${i}`);
  const rwdInput = document.getElementById(`pledge-rwd-${i}`);
  const hdr = document.getElementById(`pldg-hdr-${i}`);
  const pldgBtm = document.getElementById(`pldg-btm-${i}`);
  let timer = null;

  hdr.addEventListener("click", () => {
    if (timer) clearTimeout(timer);

    const pldgItems = ulRwds.getElementsByTagName("li");
    rwdInput.checked = true;

    Array.from(pldgItems).forEach((pldgLiItem, j) => {
      if (pldgLiItem.classList.contains("pldg-rwd-item--active")) {
        pldgLiItem.classList.remove("pldg-rwd-item--active");

        const pldgLiItemBtm = pldgLiItem.querySelector(".pldg-rwd-item__bottom.pldg-rwd-item__bottom--show");
        if (j+1 !== i) pldgLiItemBtm.classList.remove("pldg-rwd-item__bottom--show");
      }
      else if (pldgLiItem.classList.contains("pldg-rwd-item--active-mod")) {
        pldgLiItem.classList.remove("pldg-rwd-item--active-mod");
      }
    });

    if (i !== 1) {
      pldgItem.classList.add("pldg-rwd-item--active");
      timer = setTimeout(() => {
        pldgBtm.style.display = "flex";
  
        setTimeout(() => {
          pldgBtm.classList.add("pldg-rwd-item__bottom--show")        
        }, 10);
      }, 0);
    }
    else {
      pldgItem.classList.add("pldg-rwd-item--active-mod");
    }
  });

  hdr.addEventListener("mouseover", () => {
    rwdInput.style.borderColor = "hsl(176, 50%, 47%)";
  });

  hdr.addEventListener("mouseout", () => {
    rwdInput.style = undefined;
  });

  rwdInput.addEventListener("mouseover", () => {
    hdr.style.color = "hsl(176, 50%, 47%)";
  });

  rwdInput.addEventListener("mouseout", () => {
    hdr.style = undefined;
  });

  rwdInput.addEventListener("click", () => {
    hdr.click();
  });
};

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