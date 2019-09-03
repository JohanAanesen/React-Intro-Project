import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

export default function NavBar() {
	const [current, setCurrent] = useState([]);

	const handleClick = e => {
		setCurrent(e.key);
	};

	return (
		<Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
			<Menu.Item key="Home">
				<Link to="/home">
					<Icon type="mail" />
					Home
				</Link>
			</Menu.Item>
			<Menu.Item key="About">
				<Link to="/about">
					<Icon type="appstore" />
					About
				</Link>
			</Menu.Item>
			<Menu.Item key="Login">
				<Link to="/login">Login</Link>
			</Menu.Item>
            <Menu.Item key="Todo">
				<Link to="/todo">TODO List</Link>
			</Menu.Item>
            <Menu.Item key="Sudoku">
                <Link to="/sudoku">Sudoku</Link>
            </Menu.Item>
		</Menu>
	);
}
