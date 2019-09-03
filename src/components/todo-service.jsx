import axios from "axios";

export default async function getTodos() {
	return await axios.get("http://localhost:5000/todos");
}

export async function removeTodo(id) {
    return await axios.delete(`http://localhost:5000/todos/${id}`);
} 