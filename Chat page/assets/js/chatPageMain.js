function toggleSection(sectionName) {
  const section = document.querySelector(`.${sectionName}`);
  if (section.classList.contains("open")) section.classList.remove("open");
  else section.classList.add("open");
}

const infoItemsSection = document.querySelector(".info-items");

function toggleInfoItem(item) {
  if (infoItemsSection.style.display != "none") {
    infoItemsSection.style.display = "none";
    document.querySelector(`.${item}`).style.display = "block";
  } else {
    infoItemsSection.style.display = "block";
    document.querySelector(`.${item}`).style.display = "none";
  }
}

function formatText(type) {
  const sel = window.getSelection();
  const text = sel.toString();
  let range = sel.getRangeAt(0);

  if (sel.rangeCount) {
    let element = document.createElement(type);
    if (type === "span") element.style.fontWeight = 400;
    element.innerHTML = text;

    range.deleteContents();
    range.insertNode(element);
  }
}

// console.log(document.querySelector(".mce-content-body p"));
