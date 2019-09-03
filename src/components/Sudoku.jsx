import React, { useState, useEffect } from "react";
import Square from "./Square";
import { Row } from "antd";
import initialBoard from "../board";

export default function Sudoku() {
	const [board, setBoard] = useState([]);

	useEffect(() => {
		setBoard(initialBoard);
		console.log(board);
	}, []);

	return (
		<>
			<div style={{ border: "1px", color: "black", margin: "1px" }}>
				<Row type="flex" justify="center" align="centerto">
					<div>
						<Square />
					</div>
					<div>
						<Square />
					</div>
					<div>
						<Square />
					</div>
				</Row>
			</div>
			<Row type="flex" justify="center">
				<div>
					<Square />
				</div>
				<div>
					<Square />
				</div>
				<div>
					<Square />
				</div>
			</Row>
			<Row type="flex" justify="center">
				<div>
					<Square />
				</div>
				<div>
					<Square />
				</div>
				<div>
					<Square />
				</div>
			</Row>
		</>
	);
}
