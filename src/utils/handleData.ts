import { cardComponent } from "../components/cardComponent";
import cardImage from "../components/cardImage";
import usersData from "../components/usersData";

type User = {
	userName: string;
	lastName: string;
	age: number;
	gender: string;
	address: {
		street: string;
		number: number;
		house: boolean;
	};
	role: string;
};

export function handleData(app: HTMLDivElement, usersArray: User[]) {
	usersArray.map((user) => {
		const card = cardComponent();
		const image = cardImage();
		const userData = usersData(user.userName, user.lastName);

		card.appendChild(image);
		card.appendChild(userData);
		app.appendChild(card);
	});
}
