import React from "react";
import {Input, Typography} from "antd";
import Trans from "../../basics/Translate";
import "./thingisOverview.css";

const {Text,Title} = Typography;

export default function ThingisOverview(){
    return (<>
        <Title level={1}><Trans path={"thingis.header"}/></Title>
        <div className={"container thingis-search-container"}>
            <span style={{width:'20rem'}}><Input placeholder={"thingis.search.title"}/></span>
            <span style={{width:'5rem'}}><Input placeholder={"Title"}/></span>
            
        </div>
    </>);
}