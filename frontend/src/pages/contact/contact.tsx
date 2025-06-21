import {Button, Input, Tooltip, Typography} from 'antd';
import React from 'react';
import {useInfoStore} from "../../store";
import Trans from "../../navigation/Translate";
import "./contact.css"
import TextArea from "antd/es/input/TextArea";
import {MailOutlined, PhoneFilled} from "@ant-design/icons";
import {Link} from "react-router";
import {GitHubIcon, ItchIcon} from "../../basics/customIcons/icons";

const {Title, Text, Paragraph} = Typography;


export default function Contact() {
    const isMobile = useInfoStore((state) => state.isMobileRatio);
    const translate = useInfoStore((state) => state.getTranslation);
    return (<>
        <Title>Contact</Title>
        <div className={"contact-splitter" + (isMobile ? "-mobile" : "")}>
            <div>
                <div className={"container"} style={{width: '100%', position: 'relative'}}>
                    {isMobile ? null : <img src={'/recources/LeaningOnWall.png'} className={"wall-leaning"}
                                            alt="Ruby Leaning on Wall"/>}
                    <Title level={2} style={{margin: "0.5rem 0 1.5rem 0"}}><Trans
                        path={"contact.message.leaveMessage"}/></Title>
                    <div style={{display: "flex", marginBottom: "1rem"}}>
                        <Input placeholder={translate("contact.message.firstName")} variant="filled"/>
                        <Input placeholder={translate("contact.message.lastName")} variant="filled" style={{marginLeft: "32px"}}/>
                    </div>
                    <Input style={{marginBottom: "1rem"}} placeholder={translate("contact.message.emailAddress")} variant="filled"/>
                    <TextArea
                        placeholder={translate("contact.message.textHere")}
                        autoSize={{minRows: 9, maxRows: 18}}
                        style={{marginBottom: "1rem"}}
                    />
                    <div style={{textAlign: "center"}}>
                        <Button type="primary" style={{margin: "0 auto"}}><Trans path={"contact.message.sendRequest"}/></Button>
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: isMobile ? 0 : "9rem"}}>
                <Title level={2}><Trans
                    path={"contact.findMe"}/></Title>
                <Paragraph copyable><PhoneFilled/> +49 179 1368 592</Paragraph>
                <Tooltip title={translate("contact.writeDirect")}>
                    <Link to={"mailto:contact@rubinschwein47.com"} target={"_blank"}><MailOutlined
                        style={{color: "var(--link-color)"}}/> contact@rubinschwein47.com</Link>
                </Tooltip>
                <Text copyable={{text: 'contact@rubinschwein47.com'}}/>
                <br style={{marginBottom: "1rem"}}/>
                <Tooltip title={translate("contact.toExternal")}>
                    <Link to={"https://rubinschwein47.itch.io/"} target={"_blank"}><ItchIcon
                        style={{color: "#c24c4e"}}/> <Trans path={"contact.itch"}/></Link>
                </Tooltip>
                <br style={{marginBottom: "1rem"}}/>
                <Tooltip title={translate("contact.toExternal")}>
                    <Link to={"https://github.com/Rubinschwein47"} target={"_blank"}>
                        <GitHubIcon/> <Trans path={"contact.gitHub"}/>
                    </Link>
                </Tooltip>
            </div>
        </div>
        <Text style={{position: "absolute", right: "1rem", bottom: "1rem"}}><Trans path={"contact.niceDay"}/> </Text>
    </>)
}