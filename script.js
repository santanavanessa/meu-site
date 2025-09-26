function showMenu() {
  let mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    document.querySelector(".icon").src = "assets/menu_white.svg";
  } else {
    mobileMenu.classList.add("open");
    document.querySelector(".icon").src = "assets/close_white.svg";
  }
}
