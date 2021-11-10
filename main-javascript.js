"use strict";

console.log("this is a test!");

var menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementById('menu_trigger');

function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
  console.log("The menu has been toggled!");
}

function checkWindowSize() {
  if (window.innerWidth >= 600) {
    menuNav.style.display = "flex";
  }
}

menuTrigger.onclick = menuToggle;

window.onresize = checkWindowSize;
