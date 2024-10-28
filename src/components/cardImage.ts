export default function cardImage() {
	const div = document.createElement("div");
	div.classList.add("card-image");

	const cardImage = new Image();
	cardImage.src = "https://www.pngmart.com/files/23/Profile-PNG-Photo.png";
	cardImage.alt = "Profile Image";

	div.appendChild(cardImage);

	return div;
}
