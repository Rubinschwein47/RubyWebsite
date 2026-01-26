import React from "react";
import {Input, Typography} from "antd";
import Trans from "../../basics/Translate";
import "./articleOverview.css";

const {Text,Title} = Typography;

export default function ArticleOverview(){
    return (<>
        <Title level={1}><Trans path={"article.header"}/></Title>
        <div className={"container article-search-container"}>
            <span style={{width:'20rem'}}><Input placeholder={"article.search.title"}/></span>
            <span style={{width:'5rem'}}><Input placeholder={"Title"}/></span>
            
        </div>
    </>);
}