import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import initialMembers from "../members";
import { List, Typography } from 'antd';


export default function Home() {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const filterBounty = initialMembers.map(m => m.bounty);
		const newTotal = filterBounty.reduce((a, c) => a + c);
		setTotal(newTotal);
	}, []);

	return (
		<div className="col">
			<h1>Home</h1>
			<h4>Members with bounty:</h4>
			<List
				size="small"
				bordered
				dataSource={initialMembers}
				renderItem={item => <List.Item><Link to={`/profile/${item.id}`}>{item.name}</Link></List.Item>}
			/>

			<h5>Total bounty: {total}</h5>
		</div>
	);
}
