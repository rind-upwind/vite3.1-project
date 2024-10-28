import "./style.css";

import { fetchUsers } from "./utils/fetchData.ts";
import { handleData } from "./utils/handleData.ts";

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;

const users = await fetchUsers();
handleData(app, users);
