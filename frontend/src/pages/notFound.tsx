import {Button, Typography} from 'antd';
import React from 'react';
import {Link} from "react-router";

const {Title} = Typography;


export default function NotFound() {
    return (
        <>
            <img src={"/recources/Pondering.png"} style={{ height: "22rem",margin: "0 auto",display: "block" }} />
            <Title level={2} style={{textAlign:"center"}}>404: Womp Womp</Title>
            <Title level={3} style={{textAlign:"center"}}>The page under this link doesnt exist ¯\_(ツ)_/¯</Title>
            <div style={{width: "100%",textAlign:"center"}}>
                <Link to={"/home"}>
                    <Button type="primary">Back to Home</Button>
                </Link>
            </div>
        </>
    );
}