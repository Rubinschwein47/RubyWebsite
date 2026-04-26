import Trans from "../../../../basics/Translate";
import React from "react";
import {Typography} from "antd";

const {Text, Title} = Typography;

export default function MultiCounter() {
    
    return (
        <Title level={1}><Trans path={"thingis.multiCounter.title"}/></Title>
    )
} 