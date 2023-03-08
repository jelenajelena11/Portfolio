var tabLinks = document.getElementsByClassName("about__tab_link");
var tabContents = document.getElementsByClassName("about__tabs_content");
var sidemenu = document.getElementById("sidemenu");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active_link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active_link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
  sidemenu.style.right = "0";
}

function closeMenu() {
  sidemenu.style.right = "-200px";
}
