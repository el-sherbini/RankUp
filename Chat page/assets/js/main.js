const optionsSection = document.querySelector(".options");
const chatsSection = document.querySelector(".chats");
const chatAreaSection = document.querySelector(".chat-area");

function openOptions() {
  if (window.innerWidth > 1199) {
    optionsSection.classList.remove("close-options");
    chatsSection.classList.remove("expand-chats");
    chatAreaSection.classList.remove("expand-chat-area");
  } else {
    optionsSection.classList.add("open");
  }
}

function closeOptions() {
  if (window.innerWidth > 1199) {
    optionsSection.classList.add("close-options");
    chatsSection.classList.add("expand-chats");
    chatAreaSection.classList.add("expand-chat-area");
  } else {
    optionsSection.classList.remove("open");
  }
}

function openChats() {
  if (chatsSection.classList.contains("open"))
    chatsSection.classList.remove("open");
  else chatsSection.classList.add("open");
}
