const gallery = (() => {
	"use strict";

	const images = document.querySelectorAll(".gallery__img"),
		imageView = document.querySelector(".img-container"),
		imageToShow = document.querySelector(".img-show"),
		imageDescription = document.querySelector(".img-description"),
		btnNetx = document.querySelector(".nextBtn"),
		btnBack = document.querySelector(".backBtn"),
		btnExit = document.querySelector(".exit-icon"),
		MOVE_CLASS = "move";

	let currentImageIndex = 0;

	images.forEach((img, index) => {
		img.addEventListener("click", () => {
			imageView.classList.toggle(MOVE_CLASS);
			imageToShow.classList.toggle("img-scale");
			currentImageIndex = index;
			addImage(img.src, img.alt);
		});
	});

	btnExit.addEventListener("click", () => {
		imageView.classList.toggle(MOVE_CLASS);
		imageToShow.classList.toggle("img-scale");
	});

	const addImage = (src, alt) => {
		imageToShow.src = src;
		imageDescription.innerHTML = alt;
		hideGalleryButtons();
	};

	btnNetx.addEventListener("click", () => {
		if (currentImageIndex < images.length - 1) {
			currentImageIndex++;
			addImage(images[currentImageIndex].src, images[currentImageIndex].alt);
			hideGalleryButtons();
		}
	});

	btnBack.addEventListener("click", () => {
		if (currentImageIndex > 0) {
			currentImageIndex--;
			addImage(images[currentImageIndex].src, images[currentImageIndex].alt);
			hideGalleryButtons();
		}
	});

	const hideGalleryButtons = () => {
		switch (currentImageIndex) {
			case 0:
				btnBack.classList.add("hideBtn");
				break;
			case images.length - 1:
				btnNetx.classList.add("hideBtn");
				break;
			default:
				btnNetx.classList.remove("hideBtn");
				btnBack.classList.remove("hideBtn");
				break;
		}
	};
})();
