import {Badge, Divider, Image, Space, Typography} from 'antd';
import React from 'react';
import "./portfolio.css";
import ImageWaiter from "../../basics/ImageWaiter";
import {Link} from "react-router";
import {ExportOutlined} from "@ant-design/icons";
import Trans from "../../navigation/Translate";
import VDiv from "../../basics/VDiv";
import {useInfoStore} from "../../store";

const {Title, Text, Paragraph} = Typography;


export default function Portfolio() {
    const theme: string = useInfoStore((state) => state.theme);
    return <>
        <Title>Portfolio</Title>
        <div style={{height: "3rem"}}></div>
        <Project/>
    </>
}

type ProjectProps = {
    LogoPath:string;
    LogoAlt:string;
    externalLinks:[{text:string,url:string}],
    name:string,
    badges:[{text:string,color:string}],
    text:string,
    //todo: images fehlen noch
}
function Project(){
    
    return (<div className={"project"}>
        <div className="project-background">
            <img src={"recources/Dither.png"} alt=""/>
            <img src={"recources/Dither.png"} alt=""/>
            <img src={"recources/Dither.png"} alt=""/>
            <img src={"recources/Dither.png"} alt=""/>
            <img src={"recources/Dither.png"} alt=""/>
        </div>
        <div className={"project-head"}>
            <div style={{display: "grid"}}>
                <ImageWaiter width={"12rem"} alt={"logo_skull"} src="recources/logos/LogoSkull.png"/>
                <Link
                    className="badge"
                    style={{margin: "1rem 0 0 1rem", backgroundColor: "var(--container-color)"}}
                    to={"https://www.crunchyroll.com/de"} >
                    Source <ExportOutlined style={{color: "#1677ff"}}/>
                </Link>
            </div>
            <div style={{marginLeft: "1rem"}}>
                <Title level={2} style={{margin: "0 0 1rem 0"}}>Projekt Name</Title>
                <div style={{display: "flex", flexDirection: "row", margin: "0 0 1rem 0"}}>
                    <Text className="badge">LOL</Text>
                    <Text className="badge">LOL</Text>
                    <Text className="badge">LOL</Text>
                    <Text className="badge">LOL</Text>
                </div>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                </Paragraph>
            </div>
        </div>
        <div>
            <Image.PreviewGroup preview={{
                toolbarRender: (
                    reactElement,
                    {
                        current
                    },
                ) => (
                    <Space size={12} className="toolbar-wrapper">
                        <Title level={3}><Trans path={"home.whyRuby.logoDescriptions." + current + ".header"}/></Title>
                        <Text><Trans path={"home.whyRuby.logoDescriptions." + current + ".text"}/></Text>
                    </Space>
                ),
                height: "50%",
            }}>
                <ImageWaiter width={"5rem"} alt={"logo_skull"} src="recources/logos/LogoSkull.png"/>
                <VDiv/>
                <ImageWaiter width={"5rem"} alt={"logo_conrad"} src="recources/logos/LogoConrad.png"/>
                <VDiv/>
                <ImageWaiter width={"5rem"} alt={"logo_pig1"} src="recources/logos/LogoPig1.png"/>
                <VDiv/>
                <ImageWaiter width={"5rem"} alt={"logo_pig2"} src="recources/logos/LogoPig2.png"/>
                <VDiv/>
                <ImageWaiter width={"5rem"} alt={"logo_pig3"} src="recources/logos/LogoRuby.png"/>
            </Image.PreviewGroup>
        </div>
    </div>)
}
