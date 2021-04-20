const gallery = (() => {
	"use strict";

	const images = document.querySelectorAll(".gallery__img"),
		imageView = document.querySelector(".img-container"),
		imageToShow = document.querySelector(".img-show"),
		imageDescription = document.querySelector(".img-description"),
		MOVE_CLASS = "move";

	images.forEach((img) => {
		img.addEventListener("click", () => {
			addImage(img.src, img.alt);
		});
	});

	imageView.addEventListener("click", () => {
		imageView.classList.toggle(MOVE_CLASS);
		imageToShow.classList.toggle("img-scale");
	});

	const addImage = (src, alt) => {
		imageView.classList.toggle(MOVE_CLASS);
		imageToShow.classList.toggle("img-scale");
		imageToShow.src = src;
		imageDescription.innerHTML = alt;
	};
})();
