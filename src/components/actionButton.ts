/**
 *
 * @param icon  The icon to display on the button
 * @param type The type of button (primary, secondary, danger, warning)
 * @returns
 */

export default function actionButton(icon: string, type: string) {
	const button = document.createElement("button");
	button.classList.add("btn", `btn-${type}`);

	const iconElement = new Image();
	iconElement.src = icon;
	button.appendChild(iconElement);

	button.addEventListener("click", () => {
		console.log(`Button clicked: ${type}`);
	});

	return button;
}
