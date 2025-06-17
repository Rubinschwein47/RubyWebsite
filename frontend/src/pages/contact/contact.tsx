import {Button, Input, Tooltip, Typography} from 'antd';
import React from 'react';
import {useInfoStore} from "../../store";
import Trans from "../../navigation/Translate";
import "./contact.css"
import TextArea from "antd/es/input/TextArea";
import {MailOutlined, PhoneFilled} from "@ant-design/icons";
import {Link} from "react-router";

const {Title, Text, Paragraph} = Typography;


export default function Contact() {
    const isMobile = useInfoStore((state) => state.isMobileRatio);
    return (<>
        <Title>Contact</Title>
        <div className={"contact-splitter" + (isMobile ? "-mobile" : "")}>
            <div>
                <div className={"container"} style={{width: '100%', position: 'relative'}}>
                    {isMobile ? null : <img src={'/recources/LeaningOnWall.png'} className={"wall-leaning"}
                                            alt="Ruby Leaning on Wall"/>}
                    <Title level={2} style={{margin: "0.5rem 0 1.5rem 0"}}><Trans
                        path={"contact.leaveMessage"}/></Title>
                    <div style={{display: "flex", marginBottom: "1rem"}}>
                        <Input placeholder="Filled" variant="filled"/>
                        <Input placeholder="Filled" variant="filled" style={{marginLeft: "32px"}}/>
                    </div>
                    <Input style={{marginBottom: "1rem"}} placeholder="Filled" variant="filled"/>
                    <TextArea
                        placeholder="PlaceHolder"
                        autoSize={{minRows: 9, maxRows: 18}}
                        style={{marginBottom: "1rem"}}
                    />
                    <div style={{textAlign: "center"}}>
                        <Button type="primary" style={{margin: "0 auto"}}><Trans path={"contact.sendRequest"}/></Button>
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: isMobile ? 0 : "9rem"}}>
                <Title level={2}><Trans
                    path={"contact.findMe"}/></Title>
                <Paragraph copyable><PhoneFilled/> +49 179 1368 592</Paragraph>
                <Tooltip title={"contact.writeDirect"}>
                    <Link to={"mailto:contact@rubinschwein47.com"} style={{color: "var(--link-color)"}}><MailOutlined
                        style={{color: "var(--link-color)"}}/> contact@rubinschwein47.com</Link>
                </Tooltip>
                <Text copyable={{ text: 'contact@rubinschwein47.com' }} />
            </div>
        </div>
        <Text style={{position: "absolute", right: "1rem", bottom: "1rem"}}><Trans path={"contact.niceDay"}/> </Text>
    </>)
}