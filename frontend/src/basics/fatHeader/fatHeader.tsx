import React from "react";
import {ReactNode} from "react";
import "./fatHeader.css";


export default function FatHeader({children,level=1,style}: { children: ReactNode,level?: Number,style?: React.CSSProperties }){
    const content = (<>
        <span style={{color:"white"}}>{children}</span>
        <span className={"outline-font"}>{children}</span></>)
    switch (level) {
        case 1:
            return (<h1 style={style}>{content}</h1>);
        case 2:
            return (<h2 style={style}>{content}</h2>);
        case 3:
            return (<h3 style={style}>{content}</h3>);
        case 4:
            return (<h4 style={style}>{content}</h4>);
        default:
            return (<h1 style={style}>{content}</h1>);
    }
}