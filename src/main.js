import "./style.css";

const navMenu = document.getElementById("nav_menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("right-[0]");
});

closeicon.addEventListener("click", () => {
	navMenu.classList.toggle("right-[0]");
});

navLink.forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.toggle("right-[0]");
	});
});

const scrollHeader = () => {
	const stickyMenu = document.getElementById("sticky_menu");

	if (window.scrollY >= 150) {
		stickyMenu.classList.remove("lg:top-[-100%]");
		stickyMenu.classList.add("bg-black/80");
	} else {
		stickyMenu.classList.add("lg:top-[-100%]");
		stickyMenu.classList.remove("bg-black/80");
	}
};

window.addEventListener("scroll", scrollHeader);
