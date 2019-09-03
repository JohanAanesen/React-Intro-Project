import React, { useState } from "react";
import Text from "./Text";
import { Button } from 'antd';

export default function Login() {
	const [text, setText] = useState("");

	const handleFormChange = e => {
		setText(e.currentTarget.value);
	};

	return (
		<div>
			<h1>Login</h1>
			<div className="input-group">
				<Text Type="text" Text="Username" Handler={handleFormChange} />
				<Text
					Type="password"
					Text="Show me your money"
					Handler={handleFormChange}
				/>
			</div>
			<Button type="primary">Login</Button>

			<h2>{text}</h2>
		</div>
	);
}
