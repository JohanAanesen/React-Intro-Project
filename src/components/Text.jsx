import React from "react";
import { Input } from 'antd';

export default function Text({Type, Text, Handler}) {
	return (
		<>
			<Input size="large" style={{width: '200px'}} required type={Type} placeholder={Text} onChange={Handler}></Input>
		</>
	);
}
