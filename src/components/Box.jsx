import React from 'react'
import { Button } from 'antd';

export default function Box({value}){

    return(
        <Button type="default">{value}</Button>
    );
}