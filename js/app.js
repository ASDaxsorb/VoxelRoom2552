const gallery = (() => {
	"use strict";

	const images = document.querySelectorAll(".gallery__img"),
		imageView = document.querySelector(".img-container"),
		imageToShow = document.querySelector(".img-show"),
		imageDescription = document.querySelector(".img-description"),
		exitBtn = document.querySelector(".exit-icon"),
		MOVE_CLASS = "move";

	images.forEach((img) => {
		img.addEventListener("click", () => {
			console.log("xd");
			imageView.classList.toggle(MOVE_CLASS);
			imageDescription.innerHTML = img.getAttribute("alt");
			imageToShow.setAttribute("src", img.getAttribute("src"));
		});
	});

	imageView.addEventListener("click", () =>
		imageView.classList.toggle(MOVE_CLASS)
	);

	return {
		images,
	};
})();
