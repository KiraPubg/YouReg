[`resize`].forEach(it => {
	window.addEventListener(it, () => {
		const menuOpen = document.querySelector(".menu-open"),
			menuClose = document.querySelector(".menu-close"),
			logIn = document.querySelector(".header__login"),
			headerContainer = document.querySelector(".header .container"),
			headerLinks = document.querySelector(".header__links"),
			body = document.querySelector("body");

		const pageWidth = document.documentElement.scrollWidth;
		if (pageWidth > 767.98) {
			menuOpen.classList.add("menu-active")
			menuClose.classList.remove("menu-active")
			headerLinks.classList.remove("header__links-active")
			body.style.overflowY = "scroll"
		}

		const loginHtml = `	<a class="header__account btn header__login" href="#">
		Log in
	</a>`
		if (pageWidth >= 1920) {
			logIn.remove()
			headerContainer.insertAdjacentHTML("beforeend", loginHtml)
		} else if (pageWidth < 1920) {
			logIn.remove()
			headerLinks.insertAdjacentHTML("beforeend", loginHtml)
		}
	});
});

const menuOpen = document.querySelector(".menu-open"),
	menuClose = document.querySelector(".menu-close"),
	burgerMenu = document.querySelector(".burger-menu"),
	headerLinks = document.querySelector(".header__links"),
	body = document.querySelector("body");

burgerMenu.addEventListener("click", function () {
	menuOpen.classList.toggle("menu-active")
	menuClose.classList.toggle("menu-active")
	headerLinks.classList.toggle("header__links-active")
	if (body.style.overflowY === "hidden") {
		body.style.overflowY = "scroll"
	} else {
		body.style.overflowY = "hidden"
	}
})
document.cookie = "hi"

console.log(document.cookie)
