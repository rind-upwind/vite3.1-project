export async function fetchUsers() {
	try {
		const response = await fetch("http://localhost:3000", {
			headers: {
				"x-api-key": "my_super_secret_phrase",
			},
		});
		if (!response.ok) throw new Error("Error with the connection");
		const users = await response.json();
		console.log(users);

		return users;
	} catch (error) {
		console.error(error);
		return [];
	}
}
