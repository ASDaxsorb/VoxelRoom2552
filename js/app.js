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
			addImage(img.getAttribute("src"), img.getAttribute("alt"));
		});
	});

	imageView.addEventListener("click", () =>
		imageView.classList.toggle(MOVE_CLASS)
	);

	const addImage = (src, alt) => {
		imageView.classList.toggle(MOVE_CLASS);
		imageToShow.setAttribute("src", img.getAttribute(src));
		imageDescription.innerHTML = img.getAttribute(alt);
	};
})();
