import React, { useState, useEffect } from "react";
import getTodos from "./todo-service";
import { List } from "antd";
import { Link } from "react-router-dom";

export default function Todo() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		onLoadData();
	}, []);

	const onLoadData = async () => {
		const { data } = await getTodos();
		setMessages(data);
	};

	const removeTodo = async id => {
		
		try {
			await removeTodo(id);
			const newMessages = messages.filter(m => m.id !== id);
			setMessages(newMessages);
		} catch (e) {
			alert(e.message);
			throw e;
		}
	};

	return (
		<div className="col">
			<h1>Todo's</h1>

			<List
				size="small"
				bordered
				dataSource={messages}
				renderItem={m => (
					<List.Item
						actions={[
							<a
								key="delete-todo"
								onClick={() => removeTodo(m.id)}
							>
								delete
							</a>,
							<a key="list-loadmore-more">>:(</a>
						]}
					>
						{m.message}
					</List.Item>
				)}
			/>
		</div>
	);
}
