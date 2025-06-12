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

const projects: ProjectProps[] = [{
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
    colorRotation: 300
},{
    text: "portfolio.projects.hippocampus.text",
    name: "portfolio.projects.hippocampus.name",
    images: [
        {path:"recources/games/Hippocampus/ingame_front.png",alt:"Main Screen"},
        {path:"recources/games/Hippocampus/pack.png",alt:"Code View of the Package"},
        {path:"recources/games/Hippocampus/card.png",alt:"Code View of the Card"},
        {path:"recources/games/Hippocampus/ingame_packs.png",alt:"View Of the Packages"},
    ],
    badges: [
        {text: "Unity",color: "grey"},
        {text: "C#",color: "purple"},
        {text: "rdl(Ruby Data Language)", color: "yellow"}],
    logoPath: "recources/games/Hippocampus/NoLogo.png",
    logoAlt: "logo of hippocampus",
    externalLinks: [],
    colorRotation: 0,
},{
    text: "portfolio.projects.lidlIdlePlanet.text",
    name: "portfolio.projects.lidlIdlePlanet.name",
    images: [
        {path:"recources/games/LidlIdle/Start.jpg",alt:"Main Screen"},
        {path:"recources/games/LidlIdle/Explenation.jpg",alt:"Explenation"},
        {path:"recources/games/LidlIdle/View1.jpg",alt:"Simple Look"},
        {path:"recources/games/LidlIdle/WelcomeBack.jpg",alt:"Log in after Time"},
        {path:"recources/games/LidlIdle/View2.jpg",alt:"Full Look"},
    ],
    badges: [
        {text: "Unity",color: "grey"},
        {text: "C#",color: "purple"}],
    logoPath: "recources/games/LidlIdle/Logo.png",
    logoAlt: "logo of lidlIdlePlanet",
    externalLinks: [{text:"portfolio.projects.lidlIdlePlanet.external.itch",url:"https://rubinschwein47.itch.io/lidle-idle-planet"}],
    colorRotation: 250
},{
    text: "portfolio.projects.wallOf.text",
    name: "portfolio.projects.wallOf.name",
    images: [
        {path:"recources/games/WallOf/Start.png",alt:"Main Screen"},
        {path:"recources/games/WallOf/View1.png",alt:"Simple Look"},
        {path:"recources/games/WallOf/View2.png",alt:"Full Look"},
        {path:"recources/games/WallOf/Achievements.png",alt:"Achievements"},
    ],
    badges: [
        {text: "Unity",color: "grey"},
        {text: "C#",color: "purple"}],
    logoPath: "recources/games/WallOf/Icon.png",
    logoAlt: "logo of WallOf",
    externalLinks: [{text:"portfolio.projects.wallOf.external.itch",url:"https://rubinschwein47.itch.io/wall-of"}],
    colorRotation: 185
}]
export default function Portfolio() {
    const theme: string = useInfoStore((state) => state.theme);
    return <>
        <Title>Portfolio</Title>
        <div style={{height: "3rem"}}></div>
        {projects.map((it)=><Project props={it} />)}
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
    colorRotation: number,
}
type WrapperProps = {
    props: ProjectProps
}
function Project({props}: WrapperProps) {

    return (<div className={"project"}>
        <div className="project-background" style={{filter: "hue-rotate("+props.colorRotation+"deg)"}}>
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
                height: "70%",
            }}>
                {props.images.map((it) => (<>
                    <ImageWaiter width={"5rem"} alt={it.alt} src={it.path}/>
                    <VDiv/>
                </>))}
            </Image.PreviewGroup>
        </div>
    </div>)
}
