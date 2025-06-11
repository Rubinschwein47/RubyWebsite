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

const websiteProj: ProjectProps = {
    text: "portfolio.projects.website.text",
    name: "portfolio.projects.website.name",
    images: [],
    badges: [
        {text:"Typescript",color:"blue"},
        {text: "HTML", color: "orange"},
        {text: "CSS", color: "light-blue"},
        {text: "React",color: "blue"},
        {text: "C#",color: "purple"},
        {text: "Asp.net Core", color: "green"}],
    logoPath: "logo512.png",
    logoAlt: "logo of website",
    externalLinks: [{text:"portfolio.projects.website.external.github",url:"https://github.com/Rubinschwein47/RubyWebsite"}],
}
export default function Portfolio() {
    const theme: string = useInfoStore((state) => state.theme);
    return <>
        <Title>Portfolio</Title>
        <div style={{height: "3rem"}}></div>
        <Project props={websiteProj} />
    </>
}

type ProjectProps = {
    logoPath: string;
    logoAlt: string;
    externalLinks: { text: string, url: string }[] | [],
    name: string,
    badges: { text: string, color: string }[] | [],
    text: string,
    images: { path: string; alt: string; }[] | [],
}
type WrapperProps = {
    props: ProjectProps
}
function Project({props}: WrapperProps) {

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
                <ImageWaiter width={"12rem"} alt={props.logoAlt} src={props.logoPath}/>
                {props.externalLinks.map((it) => <Link
                    className="badge"
                    style={{margin: "1rem 0 0 1rem", backgroundColor: "var(--container-color)"}}
                    to={it.url}>
                    <Trans path={it.text}/><ExportOutlined style={{color: "var(--link-color)"}}/>
                </Link>)}

            </div>
            <div style={{marginLeft: "1rem"}}>
                <Title level={2} style={{margin: "0 0 1rem 0"}}>
                    <Trans path={props.name}/>
                </Title>
                <div style={{display: "flex", flexDirection: "row", margin: "0 0 1rem 0"}}>
                    {props.badges.map((it) =>
                        <Text className="badge"
                              style={{backgroundColor: "var(--highlight-" + it.color + ")"}}>{it.text}</Text>
                    )}
                </div>
                <Paragraph>
                    <Trans path={props.text}/>
                </Paragraph>
            </div>
        </div>
        <div>
            <Image.PreviewGroup preview={{
                height: "50%",
            }}>
                {props.images.map((it) => (<>
                    <ImageWaiter width={"5rem"} alt={it.alt} src={it.path}/>
                    <VDiv/>
                </>))}
            </Image.PreviewGroup>
        </div>
    </div>)
}
