import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";

import actionButton from "./actionButton";

/**
 *
 * @returns {HTMLDivElement}
 */

export const usersActions = () => {
	const actionsContainer = document.createElement("div");
	actionsContainer.classList.add("actions-container");

	const editButton = actionButton(edit, "primary");
	const deleteButton = actionButton(trash, "danger");

	actionsContainer.appendChild(editButton);
	actionsContainer.appendChild(deleteButton);

	return actionsContainer;
};
