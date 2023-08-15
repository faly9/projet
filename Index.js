const menuItems = document.querySelectorAll(".menuItem");

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id != "notifications") {
      document.querySelector(".notificationsPopup").style.display = "none";
    } else {
      document.querySelector(".notificationsPopup").style.display = "block";
      document.querySelector(
        "#notifications .notificationCount"
      ).style.display = "none";
    }
  });
});

const messagesNotification = document.querySelector("#messages");

const messages = document.querySelector(".messages");

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notificationCount").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 1000);
});

const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messageSearch");
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowercase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

const theme = document.querySelector("#theme");

const themeModal = document.querySelector(".customizeTheme");

const openThemeModal = () => {
  themeModal.style.display = "grid";
};
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customizeTheme"))
    themeModal.style.display = "none";
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};
const fontSizes = document.querySelectorAll(".chooseSize span");
let root = document.querySelector(":root");
fontSizes.forEach((size) => {
  removeSizeSelector();
  let fontSize;
  size.classList.toggle("active");

  size.addEventListener("click", () => {
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-10rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

const colorPalette = document.querySelectorAll(".chooseColor span");

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    changeActiveColorClass();
    let primary;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const chargeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", lightColorLightness);
};

Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  chargeBg();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  chargeBg();
});
