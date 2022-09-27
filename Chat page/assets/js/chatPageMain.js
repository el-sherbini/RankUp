function toggleSection(sectionName) {
  const section = document.querySelector(`.${sectionName}`);
  if (section.classList.contains("open")) section.classList.remove("open");
  else section.classList.add("open");
}

const infoItemsSection = document.querySelector(".info-items");
const infoDetailsSection = document.querySelector(".info-details");

function toggleInfoItem(item) {
  if (infoItemsSection.style.display != "none") {
    infoItemsSection.style.display = "none";
    infoDetailsSection.style.display = "block";
    document.querySelector(`.${item}`).style.display = "block";
  } else {
    infoItemsSection.style.display = "block";
    infoDetailsSection.style.display = "none";
    document.querySelector(`.${item}`).style.display = "none";
  }
}

let totalMessages = [],
  iframe,
  iWindow,
  iDocument,
  iParagraph,
  lastChild;

function initializeData() {
  lastChild = Array.from(document.querySelectorAll(".sender, .receiver")).pop();
  lastChild.scrollIntoView({ block: "end", behavior: "smooth" });

  iframe = document.querySelector("#mytextarea_ifr");
  iWindow = iframe.contentWindow;
  iDocument = iWindow.document;
}

function sendMessage() {
  iParagraph = iDocument.getElementsByTagName("p")[0];

  if (iParagraph?.textContent === "") {
    Toastify({
      text: "Message can't be empty",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#b91d1d",
      },
    }).showToast();
  } else {
    const messages = iDocument.querySelectorAll(
      "p, pre, div, h1, h2, h3, h4, h5, h6, ul, ol, ul"
    );

    createMessage("sender", "Mohamed Emad", "9:00 PM", messages);
  }
}

function createMessage(type, name, date, messages) {
  const conversation = document.querySelector(".conversation");

  const messageSender = document.createElement("div");
  messageSender.classList.add(type);

  const information = document.createElement("div");
  information.classList.add("information");

  const image = document.createElement("img");
  image.setAttribute("src", "assets/img/testimonial-2-nurhansamy.jpg");
  image.setAttribute("alt", `${type} image`);

  const title = document.createElement("div");
  title.classList.add("title");

  const titleName = document.createElement("h3");
  titleName.textContent = name;

  const titleDate = document.createElement("span");
  titleDate.classList.add("date");
  titleDate.textContent = date;

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("msgContainer");

  conversation.appendChild(messageSender);

  title.appendChild(titleName);
  title.appendChild(titleDate);

  information.appendChild(image);
  information.appendChild(title);

  messageSender.appendChild(information);
  messageSender.appendChild(messageContainer);

  information.appendChild(title);

  let regExp = /[\u0600-\u06FF]/g;

  for (message of messages) {
    messageContainer.appendChild(message);
    if (regExp.test(message.textContent)) {
      message.style.textAlign = "right";
      message.style.direction = "rtl";
    }
    totalMessages.push(message.outerHTML);
  }

  console.log(totalMessages);

  lastChild = Array.from(document.querySelectorAll(".sender")).pop();
  lastChild.scrollIntoView(true);
}
