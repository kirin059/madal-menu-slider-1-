"use strict";

const navbar = document.getElementById("navbar");
const toggle = document.getElementById("toggle"); // nav-bar 버튼
const open = document.getElementById("open");

// modal
const close = document.getElementById("close"); //modal close버튼
const modal = document.getElementById("modal"); // modal창

// Toggle nav
toggle.addEventListener("click", () => {
    document.body.classList.toggle("show_nav");
    document.body.addEventListener("click", closeNav); // body 아무데나 누르면 closeNav 실행
});

function closeNav(e) {
    // console.log(e.target);
    if (document.body.classList.contains("show_nav") && e.target !== toggle && !toggle.contains(e.target) && e.target !== navbar && !navbar.contains(e.target)) {
        document.body.classList.toggle("show_nav");
        document.body.removeEventListener("click", closeNav);
    } else if (!document.body.classList.contains("show_nav")) {
        document.body.removeEventListener("click", closeNav);
    }
}

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) => (e.target == modal ? modal.classList.remove("show-modal") : false));
