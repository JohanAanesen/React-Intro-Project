import React, {useState} from 'react';
import { Button, Typography } from 'antd';

export default function About(){

    const { Title } = Typography;
    const [count, setCount] = useState(0);

	return (
		<div className="">
			<Title level={1}>About</Title>

            <Title level={2}>{count}</Title>
			<Button type="primary" onClick={() => setCount(count + 1)}>+</Button>
            <Button type="danger" onClick={() => setCount(count - 1)}>-</Button>
		</div>
	);
}