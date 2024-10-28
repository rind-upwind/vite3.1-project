/**
 *
 * @param {string} firstname
 * @param {string} lastname
 * @returns {HTMLDivElement}
 */

export default function usersData(
	firstname: string,
	lastname: string
): HTMLDivElement {
	const div = document.createElement("div");
	div.classList.add("data-container");

	const ul = document.createElement("ul");

	const firstName = document.createElement("li");
	firstName.textContent = `First Name: ${firstname}`;
	ul.appendChild(firstName);

	const lastName = document.createElement("li");
	lastName.textContent = `Last Name: ${lastname}`;
	ul.appendChild(lastName);

	div.appendChild(ul);

	return div;
}
