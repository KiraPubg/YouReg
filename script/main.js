[`resize`].forEach(it => {
	window.addEventListener(it, () => {
		const menuOpen = document.querySelector(".menu-open"),
			menuClose = document.querySelector(".menu-close");
		const pageWidth = document.documentElement.scrollWidth;
		if (pageWidth > 992) {
			menuOpen.classList.add("menu-active")
			menuClose.classList.remove("menu-active")
			body.classList.remove("active")
		}
	});
});

const menuOpen = document.querySelector(".menu-open"),
	menuClose = document.querySelector(".menu-close"),
	burgerMenu = document.querySelector(".burger-menu"),
	headerNav = document.querySelector(".header__nav");
burgerMenu.addEventListener("click", function () {
	menuOpen.classList.toggle("menu-active")
	menuClose.classList.toggle("menu-active")
	headerNav.classList.toggle("header__nav-active")
})

