const infoSection = document.querySelector(".info");
const chatsSection = document.querySelector(".chats");
const chatAreaSection = document.querySelector(".chat-area");

function openInfo() {
  if (window.innerWidth > 1199) {
    infoSection.classList.remove("close-info");
    chatsSection.classList.remove("expand-chats");
    chatAreaSection.classList.remove("expand-chat-area");
  } else {
    infoSection.classList.add("open");
  }
}

function closeInfo() {
  if (window.innerWidth > 1199) {
    infoSection.classList.add("close-info");
    chatsSection.classList.add("expand-chats");
    chatAreaSection.classList.add("expand-chat-area");
  } else {
    infoSection.classList.remove("open");
  }
}

function toggleChats() {
  if (chatsSection.classList.contains("open"))
    chatsSection.classList.remove("open");
  else chatsSection.classList.add("open");
}
